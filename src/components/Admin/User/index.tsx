import { IUser } from '@/src/contexts/Auth.context'
import { useDeleteUser } from '@/src/hooks/user/useDelete'
import { useState } from 'react'
import { useQuery } from 'react-query'
import UserRepository from '../../../repositories/user'
import Datatable from '../../global/Datatable'
import UpdateUser from './Update'

export default function AdminDashboardUser() {
    const [users, setUsers] = useState<IUser[]>([])
    const { handleDelete } = useDeleteUser()

    useQuery(
        'users',
        async () => {
            const users = await UserRepository.findAll()
            setUsers(users)
        },
        {
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchOnReconnect: true,
        }
    )

    return (
        <>
            <Datatable
                data={users}
                updateButton={true}
                deleteButton={true}
                hiddenColumns={{
                    role: false,
                    file: false,
                }}
                childrenUpdate={<UpdateUser id={''} />}
                handleDelete={handleDelete}
            />
        </>
    )
}
