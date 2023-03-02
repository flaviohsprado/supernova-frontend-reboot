import { ICustomError } from '@/src/interfaces/error.interface'
import { HttpClient } from '@/src/services/HttpClient'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useToastContext from '../useToast'

export async function getServerSideProps(context: any) {
    return {
        redirect: {
            permanent: false,
            destination: '/?status=401',
        },
    }
}

interface ILoginResponse {
    accessToken: string
}

export const useLogin = () => {
    const router = useRouter()
    const { toast } = useToastContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        try {
            const { data } = await HttpClient.post<ILoginResponse>(
                '/auth/login',
                {
                    email,
                    password,
                }
            )

            localStorage.setItem('accessToken', String(data?.accessToken))

            toast({
                title: "You're logged in!",
                description: 'Welcome to the dashboard',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            //router.push('/dashboard')
        } catch (error) {
            const axiosError = error as AxiosError<ICustomError>

            console.log(axiosError.response?.data)

            toast({
                title: 'Occured an error',
                description: String(axiosError.response?.data?.message),
                status: Number(axiosError.response?.data?.status),
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
    }
}
