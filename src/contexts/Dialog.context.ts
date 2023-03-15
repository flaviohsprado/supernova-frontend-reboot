import { createContext } from 'react'

export interface IDialog {
    title: string
    message: string
}

interface IDialogContext {
    dialog: (dialog: IDialog) => boolean
}

export const DialogContext = createContext({
    dialog: (dialog: IDialog) => false,
} as IDialogContext)
