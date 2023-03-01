import { createContext } from 'react'

export interface IToast {
    title: string
    description: string
    status: string | number
    duration: number
    isClosable: boolean
}

interface IToastContext {
    toast: (toast: IToast) => void
}

export const ToastContext = createContext({
    toast: () => {},
} as IToastContext)
