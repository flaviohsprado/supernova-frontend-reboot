import { IUser } from '@/src/contexts/Auth.context'
import { useDeleteUser } from '@/src/hooks/user/useDelete'
import { useEffect, useState } from 'react'
import UserRepository from '../../../repositories/user'
import Datatable from '../../global/Datatable'
import UpdateUser from './Update'

export default function AdminDashboardUser() {
    const [users, setUsers] = useState<IUser[]>([])
    const { handleDelete } = useDeleteUser()

    useEffect(() => {
        const fetchData = async () => await UserRepository.findAll()

        fetchData().then((data) => {
            setUsers(data)
        })
    }, [])

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
