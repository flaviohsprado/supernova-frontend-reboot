import { createContext } from 'react'

export interface IDialog {
    title: string
    message: string
    handleOk: () => void
}

interface IDialogContext {
    dialog: (dialog: IDialog) => void
}

export const DialogContext = createContext({
    dialog: (dialog: IDialog) => {},
} as IDialogContext)
