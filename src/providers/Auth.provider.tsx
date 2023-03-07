import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { ReactNode, useEffect, useState } from 'react'
import { AuthContext, IUser } from '../contexts/Auth.context'
import AuthRepository from '../repositories/auth'
import UserRepository from '../repositories/user'
import CryptrService from '../services/Cryptr'
import { JwtService } from '../services/Jwt'

interface IAuthProviderProps {
    children: ReactNode
}

interface ICredentials {
    email: string
    password: string
    remember: boolean
}

export default function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser | null>(null)
    const isAuthenticated = !!user
    const router = useRouter()

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        const { 'nextauth.remember': credentials } = parseCookies()

        if (token) {
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

        if (credentials) {
            const fetchData = async () =>
                await CryptrService.decrypt(credentials)

            fetchData().then((credentials) => {
                if (credentials) {
                    const { email, password } = JSON.parse(credentials)

                    signIn({ email, password, remember: true })
                }
            })
        }
    }, [])

    async function signIn({ email, password, remember }: ICredentials) {
        try {
            const { accessToken } = await AuthRepository.login({
                email,
                password,
            })

            const timeToExpire = new Date().getTime() + 60 * 60 * 24

            setCookie(undefined, 'nextauth.token', String(accessToken), {
                maxAge: timeToExpire,
            })

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

            const { id, username, avatar } = await JwtService.decode<IUser>(
                accessToken
            )

            setUser({
                id,
                username,
                avatar,
                role: '*',
            })

            router.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
