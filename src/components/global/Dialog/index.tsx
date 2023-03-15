import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { Dispatch, forwardRef, ReactElement, Ref, SetStateAction } from 'react'

interface IGlobalDialogProps {
    open: boolean
    handleclose: Dispatch<SetStateAction<boolean>>
    setAgree: Dispatch<SetStateAction<boolean>>
    title: string
    content: string
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function GlobalDialog({
    open,
    handleclose,
    setAgree,
    title,
    content,
}: IGlobalDialogProps) {
    const handleAgree = () => setAgree(true)

    const handleDisagree = () => {
        setAgree(false)
        handleclose(false)

        console.log('disagree')
        console.log('open', open)
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleclose}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDisagree}>Disagree</Button>
                    <Button onClick={handleAgree}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
