import AuthProvider from '@/src/providers/Auth.provider'
import { DialogProvider } from '@/src/providers/Dialog.provider'
import { ToastContextProvider } from '@/src/providers/Toast.provider'
import { theme } from '@/src/theme'
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { Figtree } from '@next/font/google'
import type { AppProps } from 'next/app'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query/types/react'

const figtree = Figtree({
    weight: '400',
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient()

    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthProvider>
                    <DialogProvider>
                        <ToastContextProvider>
                            <QueryClientProvider client={queryClient}>
                                <main className={figtree.className}>
                                    <Component {...pageProps} />
                                </main>
                            </QueryClientProvider>
                        </ToastContextProvider>
                    </DialogProvider>
                </AuthProvider>
            </ThemeProvider>
        </>
    )
}
