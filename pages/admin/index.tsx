import AdminDashboardHome from '@/src/components/Admin/Home'
import AdminDashboardSidebar from '@/src/components/Admin/Sidebar'
import Box from '@mui/material/Box'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { ReactNode, useState } from 'react'

export default function AdminDashboard() {
    const [page, setPage] = useState<ReactNode>(<AdminDashboardHome />)

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboardSidebar setPage={setPage} />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'secondary.dark', p: 3 }}
                >
                    {page}
                </Box>
            </Box>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { 'nextauth.token': token, 'nextauth.refreshToken': refreshToken } =
        parseCookies(context)

    if (!token || !refreshToken) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    }
}
