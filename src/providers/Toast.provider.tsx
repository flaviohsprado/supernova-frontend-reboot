import { useCallback, useEffect, useState } from 'react'
import Toast from '../components/global/Toast'
import { IToast, ToastContext } from '../contexts/Toast.context'

export function ToastContextProvider({ children }: any) {
    const [toasts, setToasts] = useState<IToast[]>([])

    useEffect(() => {
        if (toasts.length > 0) {
            const timer = setTimeout(() => {
                setToasts([])
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [toasts])

    const toast = useCallback(
        (toast: IToast) => {
            setToasts((oldToasts: IToast[]) => [...oldToasts, toast])
        },
        [setToasts]
    )

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className="toasts-wrapper">
                {toasts.map((toast: IToast, index) => (
                    <div className="toast" key={index}>
                        {toast.description}
                        <Toast
                            key={index}
                            title={toast.title}
                            description={toast.description}
                            status={toast.status}
                            duration={toast.duration}
                            isClosable={toast.isClosable}
                        />
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}
