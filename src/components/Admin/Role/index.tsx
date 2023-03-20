import { useDeleteRole } from '@/src/hooks/role/useDelete'
import { IRole } from '@/src/interfaces/role.interface'
import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useQuery } from 'react-query'
import RoleRepository from '../../../repositories/role'
import DataTable from '../../global/Datatable'
import CreateRole from './Create'
import UpdateRole from './Update'

export default function AdminDashboardRole() {
    const [roles, setRoles] = useState<IRole[]>([])
    const { handleDelete } = useDeleteRole()

    useQuery(
        'roles',
        async () => {
            const roles = await RoleRepository.findAll()
            setRoles(roles)
        },
        {
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchOnReconnect: true,
        }
    )

    return (
        <>
            <Stack spacing={2}>
                <Box>
                    <CreateRole />
                </Box>
                <Box>
                    <DataTable
                        data={roles}
                        hiddenColumns={{
                            id: false,
                        }}
                        childrenUpdate={<UpdateRole id={''} />}
                        handleDelete={handleDelete}
                    />
                </Box>
            </Stack>
        </>
    )
}
