import AdminDashboardSidebar from '@/src/components/Admin/Sidebar'
import AdminDashboardUser from '@/src/components/Admin/User'
import { JwtService } from '@/src/services/Jwt'
import Box from '@mui/material/Box'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

export default function AdminDashboard() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboardSidebar />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'secondary.dark', p: 3 }}
                >
                    <AdminDashboardUser />
                </Box>
            </Box>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { ['nextauth.token']: token } = parseCookies(context)
    const decodedToken = JwtService.decode(token)

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    } else if (!decodedToken) {
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
