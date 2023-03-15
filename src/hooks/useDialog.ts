import { useContext } from 'react'
import { DialogContext } from '../contexts/Dialog.context'

export default function useDialogContext() {
    return useContext(DialogContext)
}
