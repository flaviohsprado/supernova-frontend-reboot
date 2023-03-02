import { ICustomError } from '@/src/interfaces/error.interface'
import { HttpClient } from '@/src/services/HttpClient'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useToastContext from '../useToast'

interface IUserSignup {
    id: string
    email: string
    username: string
    password: string
    accessToken: string
}

export const useSignup = () => {
    const router = useRouter()
    const { toast } = useToastContext()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            toast({
                title: 'Error on signup',
                description: 'Password and confirm password are different',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })

            return
        }

        try {
            const { data } = await HttpClient.post<IUserSignup>('/users', {
                username,
                password,
                email,
            })

            localStorage.setItem('accessToken', String(data?.accessToken))

            toast({
                title: "We've created your account!",
                description: 'Your account has been created successfully',
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
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSubmit,
    }
}
