import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material'
import { useState } from 'react'

interface ISuccessToastProps {
    title: string
    description: string
    status: string | number
    duration: number
    isClosable: boolean
}

export default function Toast({
    title,
    description,
    status,
    duration,
    isClosable,
}: ISuccessToastProps) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={duration}
                onClose={handleClose}
            >
                <Alert
                    onClose={isClosable ? handleClose : undefined}
                    severity={
                        typeof status === 'number'
                            ? getStatus(status)
                            : (status as AlertColor)
                    }
                    sx={{ width: '100%' }}
                >
                    <AlertTitle>{title}</AlertTitle>
                    {description}
                </Alert>
            </Snackbar>
        </>
    )
}

function getStatus(status: number): AlertColor {
    const fistDigit: number = Number(status.toString().charAt(0))

    switch (fistDigit) {
        case 2:
            return 'success'
        case 4:
            return 'error'
        case 5:
            return 'error'
        default:
            return 'info'
    }
}
