import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import {
    forwardRef,
    ReactElement,
    ReactNode,
    Ref,
    useCallback,
    useState,
} from 'react'
import { DialogContext, IDialog } from '../contexts/Dialog.context'

interface IDialogProviderProps {
    children: ReactNode
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

export function DialogProvider({ children }: IDialogProviderProps) {
    const [dialog, setDialog] = useState<IDialog>({} as IDialog)
    const [open, setOpen] = useState(false)
    const [agree, setAgree] = useState(false)

    const handleClose = () => {
        setOpen(false)
        setAgree(false)
    }

    const handleAgree = () => {
        setAgree(true)
        setOpen(false)
    }

    const useDialog = useCallback(
        (dialog: IDialog) => {
            setDialog(dialog)

            setOpen(true)

            return agree
        },
        [setDialog, agree]
    )

    return (
        <DialogContext.Provider value={{ dialog: useDialog }}>
            {children}
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{dialog.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {dialog.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleAgree}>Agree</Button>
                </DialogActions>
            </Dialog>
        </DialogContext.Provider>
    )
}
