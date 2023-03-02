import { Box } from '@mui/material'
import HeaderNavigatorDashboard from './Navigator'
import HeaderProfileMenuDashboard from './ProfileMenu'

export default function DashboardHeader() {
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
                    username={'Flávio Prado'}
                    avatar={
                        'https://supernova-development.s3.sa-east-1.amazonaws.com/1669348075949-itachi-1.png'
                    }
                />
            </Box>
        </>
    )
}
