import { Box, Grid } from '@mui/material'

export default function Dashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                spacing={1}
                sx={{
                    gridTemplateAreas: `
                        "sidebar header friendbar"
                        "sidebar main friendbar"
                        "footer footer footer"
                    `,
                    gridTemplateRows: '1fr 6fr 2fr',
                    gridTemplateColumns: '1fr 4fr 1fr',
                    height: '100vh',
                    gap: 1,
                    backgroundColor: 'secondary.main',
                    display: 'grid',
                }}
            >
                <Grid
                    item
                    gridArea={'header'}
                    sx={{ backgroundColor: 'secondary.dark' }}
                >
                    oi
                </Grid>
                <Grid
                    item
                    gridArea={'sidebar'}
                    sx={{ backgroundColor: 'secondary.dark' }}
                >
                    oi
                </Grid>
                <Grid
                    item
                    gridArea={'friendbar'}
                    sx={{ backgroundColor: 'secondary.dark' }}
                >
                    oi
                </Grid>
                <Grid
                    item
                    gridArea={'main'}
                    sx={{ backgroundColor: 'secondary.dark' }}
                >
                    oi
                </Grid>
                <Grid
                    item
                    gridArea={'footer'}
                    sx={{ backgroundColor: 'secondary.dark' }}
                >
                    oi
                </Grid>
            </Grid>
        </Box>
    )
}
