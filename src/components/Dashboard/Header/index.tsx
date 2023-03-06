import { AuthContext } from '@/src/contexts/Auth.context'
import { Box } from '@mui/material'
import { useContext } from 'react'
import HeaderNavigatorDashboard from './Navigator'
import HeaderProfileMenuDashboard from './ProfileMenu'

export default function DashboardHeader() {
    const { user, isAuthenticated } = useContext(AuthContext)

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    padding: '20px',
                }}
            >
                <HeaderNavigatorDashboard />
                <HeaderProfileMenuDashboard
                    username={String(user?.username)}
                    role={String(user?.role)}
                    avatar={String(user?.avatar) || 'https://i.pravatar.cc/300'}
                />
            </Box>
        </>
    )
}
