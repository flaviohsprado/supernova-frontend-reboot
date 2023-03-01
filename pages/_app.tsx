import { ToastContextProvider } from '@/src/providers/Toast.provider'
import { theme } from '@/src/theme'
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { Figtree } from '@next/font/google'
import type { AppProps } from 'next/app'

const figtree = Figtree({
    weight: '400',
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ToastContextProvider>
                    <main className={figtree.className}>
                        <Component {...pageProps} />
                    </main>
                </ToastContextProvider>
            </ThemeProvider>
        </>
    )
}
