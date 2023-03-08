import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { ReactNode, useEffect, useState } from 'react'
import { AuthContext, IUser } from '../contexts/Auth.context'
import AuthRepository from '../repositories/auth'
import UserRepository from '../repositories/user'
import CryptrService from '../services/Cryptr'
import { JwtService } from '../services/Jwt'
import TokenHandler from '../utils/TokenHandler.utils'

interface IAuthProviderProps {
    children: ReactNode
}

interface ICredentials {
    email: string
    password: string
    remember?: boolean
}

export default function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser | null>(null)
    const isAuthenticated = !!user
    const router = useRouter()

    useEffect(() => {
        const {
            'nextauth.token': token,
            'nextauth.remember': rememberMeCredentials,
        } = parseCookies()

        if (rememberMeCredentials) {
            const fetchData = async () =>
                await CryptrService.decrypt(rememberMeCredentials)

            fetchData().then((credentials) => {
                if (credentials) {
                    const { email, password } = JSON.parse(credentials)

                    signIn({ email, password, remember: true })
                }
            })
        }

        if (token) {
            const tokenExpirated = JwtService.verifyExpiration(token)

            if (tokenExpirated) {
                const fetchDataTokenRefresh = async () =>
                    await handleTokenRefresh(rememberMeCredentials)

                fetchDataTokenRefresh().then((data) => {})
            }

            const fetchData = async () => await UserRepository.me()

            fetchData().then((data) => {
                const { id, username, avatar } = data

                if (id) {
                    setUser({
                        id,
                        username,
                        avatar,
                        role: '*',
                    })
                }
            })
        }
    }, [])

    async function signIn({ email, password, remember }: ICredentials) {
        try {
            const accessToken = await handleLogin({ email, password })

            await handleRememberMe({ email, password, remember })

            await handleSetUser(accessToken)

            if (router.pathname === '/') {
                router.push('/dashboard')
            } else {
                router.push(router.pathname)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function handleLogin({
        email,
        password,
    }: ICredentials): Promise<string> {
        const { accessToken } = await AuthRepository.login({
            email,
            password,
        })

        const timeToExpire = new Date().getTime() + 60 * 60 * 24

        setCookie(undefined, 'nextauth.token', String(accessToken), {
            maxAge: timeToExpire,
        })

        return accessToken
    }

    async function handleRememberMe({
        email,
        password,
        remember,
    }: ICredentials): Promise<void> {
        const encriptedCredentials = await CryptrService.encrypt(
            JSON.stringify({
                email,
                password,
            })
        )

        if (remember) {
            setCookie(
                undefined,
                'nextauth.remember',
                String(encriptedCredentials)
            )
        }
    }

    async function handleTokenRefresh(rememberMeCredentials: string) {
        const { 'nextauth.refreshToken': refreshToken } = parseCookies()

        if (refreshToken) {
            const refreshExpirated = JwtService.verifyExpiration(refreshToken)

            if (refreshExpirated && rememberMeCredentials) {
                const { accessToken } = await AuthRepository.refresh()
                TokenHandler.set(accessToken)
            } else if (refreshExpirated && !rememberMeCredentials) {
                router.push('/')
            } else if (!refreshExpirated) {
                TokenHandler.set(refreshToken)
            }
        } else {
            router.push('/')
        }
    }

    async function handleSetUser(accessToken: string): Promise<void> {
        const { id, username, avatar } = await JwtService.decode<IUser>(
            accessToken
        )

        setUser({
            id,
            username,
            avatar,
            role: '*',
        })
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
