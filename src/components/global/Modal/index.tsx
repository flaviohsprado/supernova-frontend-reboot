import { Box, Typography } from '@mui/material'
import Modal from '@mui/material/Modal'

export interface IModalProps {
    title: string
    children?: React.ReactNode
    open: boolean
    setOpen: (open: boolean) => void
}

export default function BasicModal({
    title,
    children,
    open,
    setOpen,
}: IModalProps) {
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'secondary.main',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '10px',
                    }}
                >
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        color={''}
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            paddingTop: '1rem',
                        }}
                    >
                        {children}
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
