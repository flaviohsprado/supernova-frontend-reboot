import { Button, ButtonProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ReactNode } from 'react'

interface IPrimaryButtonProps {
    children: ReactNode
    props: ButtonProps
}

const useStyles = makeStyles({
    button: {
        backgroundColor: 'primary.dark',
        color: 'white',
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: 'primary.dark',
            color: '#FFF',
        },
    },
})

export default function PrimaryButton({
    children,
    props,
}: IPrimaryButtonProps) {
    const classes = useStyles()

    return (
        <Button
            variant={'contained'}
            color={'primary'}
            className={classes.button}
            {...props}
        >
            {children}
        </Button>
    )
}
