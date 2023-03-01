import { useRouter } from 'next/router'
import { setCookie } from 'nookies'
import { useState } from 'react'

export const useLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const router = useRouter()

    const [login] = useLoginMutation()

    const handleSubmitLogin = async (event: any) => {
        event.preventDefault()

        try {
            const { data } = await login({
                variables: {
                    email,
                    password,
                },
            })

            if (data?.login?.accessToken) setAccessToken(data.login.accessToken)

            setCookie(
                undefined,
                'auth.token',
                String(data?.login?.accessToken),
                {
                    maxAge: 60 * 60 * 1, // 1 hour
                }
            )

            router.push('/dashboard')
        } catch (err) {
            toast({
                title: 'Error on login',
                description:
                    err instanceof ApolloError
                        ? err?.graphQLErrors[0].message
                        : 'An unexpected error has occurred',
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return {
        handleSubmitLogin,
        password,
        setPassword,
        email,
        setEmail,
        accessToken,
    }
}
