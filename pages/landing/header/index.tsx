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
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="/premium-themes/onepirate/sign-in/"
                            sx={rightLink}
                        >
                            {'Sign In'}
                        </Link>
                        <Signup />
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    )
}
