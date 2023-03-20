import { ICustomError } from '@/src/interfaces/error.interface'
import { AxiosError } from 'axios'
import UserRepository from '../../repositories/user'
import { useRefetch } from '../useRefetch'
import useToastContext from '../useToast'

export const useDeleteUser = () => {
    const { toast } = useToastContext()
    const { refetch } = useRefetch()

    const handleDelete = async (id: string) => {
        try {
            await UserRepository.destroy(id)

            toast({
                title: 'User deleted!',
                description: 'User has been deleted successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            refetch('users')
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

    return { handleDelete }
}
