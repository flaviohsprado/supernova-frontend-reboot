import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#f50057',
            light: '#f5518b',
            dark: '#9c0238',
        },
        secondary: {
            main: '#1f1f1f',
            light: '#2b2b2b',
            dark: '#0a0a0a',
        },
        error: {
            main: '#fc3728',
            light: '#ff5b4f',
            dark: '#7d2e28',
        },
        warning: {
            main: '#eb9a23',
            light: '#edb25a',
            dark: '#6e4b17',
        },
        info: {
            main: '#26a4de',
            light: '#5cb3db',
            dark: '#1d5b78',
        },
        success: {
            main: '#3eb844',
            light: '#8aed8e',
            dark: '#1c661e',
        },
    },
})
