import { Button, ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

interface IPrimaryButtonProps {
    children: ReactNode
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
    props?: ButtonProps
}

export default function PrimaryButton({
    children,
    type = 'button',
    onClick,
    props,
}: IPrimaryButtonProps) {
    return (
        <Button
            variant={'contained'}
            color={'primary'}
            type={type}
            onClick={onClick}
            sx={{
                backgroundColor: 'primary.dark',
                color: 'white',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                marginTop: '1rem',
                '&:hover': {
                    backgroundColor: 'primary.light',
                    color: '#FFF',
                },
            }}
            {...props}
        >
            {children}
        </Button>
    )
}
