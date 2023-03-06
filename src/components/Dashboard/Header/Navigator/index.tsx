import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'

export default function HeaderNavigatorDashboard() {
    return (
        <Stack direction="row" spacing={3}>
            <IconButton
                aria-label="previous-content"
                sx={{
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'secondary.main',
                    },
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
                aria-label="next-content"
                sx={{
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'secondary.main',
                    },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Stack>
    )
}
