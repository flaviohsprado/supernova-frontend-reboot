import Signin from '@/src/components/Auth/Signin'
import Signup from '@/src/components/Auth/Signup'
import { Link } from '@mui/material'
import { Box } from '@mui/system'
import AppBar from './appBar'
import Toolbar from './toolBar'

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
}

export default function LandingPageHeader() {
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="#"
                        sx={{ fontSize: 24 }}
                    >
                        {'Supernova'}
                    </Link>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Box
                            sx={{
                                width: '15%',
                                display: 'flex',
                                justifyContent: 'space-around',
                            }}
                        >
                            <Signin />
                            <Signup />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}
