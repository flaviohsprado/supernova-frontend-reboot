import { useContext } from 'react'
import { ToastContext } from '../contexts/Toast.context'

export default function useToastContext() {
    return useContext(ToastContext)
}
