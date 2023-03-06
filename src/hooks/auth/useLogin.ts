import { ICustomError } from '@/src/interfaces/error.interface'
import AuthRepository from '@/src/repositories/auth'
import TokenHandler from '@/src/utils/TokenHandler.utils'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useToastContext from '../useToast'

export const useLogin = () => {
    const router = useRouter()
    const { toast } = useToastContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        try {
            const { accessToken } = await AuthRepository.login({
                email,
                password,
            })

            TokenHandler.set(accessToken)

            toast({
                title: "You're logged in!",
                description: 'Welcome to the dashboard',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            router.push('/dashboard')
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
