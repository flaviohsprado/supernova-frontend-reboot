import { Inter } from '@next/font/google'
import LandingPageHeader from './landing/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <LandingPageHeader />
        </>
    )
}
