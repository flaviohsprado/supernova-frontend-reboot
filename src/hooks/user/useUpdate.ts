import { ICustomError } from '@/src/interfaces/error.interface'
import UserRepository from '@/src/repositories/user'
import TokenHandler from '@/src/utils/TokenHandler.utils'
import { AxiosError } from 'axios'
import { useState } from 'react'
import useToastContext from '../useToast'

interface IUserSignup {
    id: string
    email: string
    username: string
    password: string
    accessToken: string
}

export const useUpdateUser = (id: string) => {
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
            const { accessToken } = await UserRepository.update(id, {
                email,
                username,
                password,
            })

            TokenHandler.set(accessToken)

            toast({
                title: "We've updated your account!",
                description: 'Your account has been updated successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            const axiosError = error as AxiosError<ICustomError>

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
