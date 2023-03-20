import { ICustomError } from '@/src/interfaces/error.interface'
import { AxiosError } from 'axios'
import RoleRepository from '../../repositories/role'
import { useRefetch } from '../useRefetch'
import useToastContext from '../useToast'

export const useDeleteRole = () => {
    const { toast } = useToastContext()
    const { refetch } = useRefetch()

    const handleDelete = async (id: string) => {
        try {
            await RoleRepository.destroy(id)

            toast({
                title: 'Role deleted!',
                description: 'Role has been deleted successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            refetch('roles')
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
