import { Button, ButtonProps } from '@mui/material'
import { ReactNode } from 'react'

interface IPrimaryButtonProps {
    label: string
    type?: 'submit' | 'reset' | 'button'
    children?: ReactNode
    props?: ButtonProps
}

export default function SecondaryButton({
    label,
    type,
    children,
    props,
}: IPrimaryButtonProps) {
    return (
        <Button
            variant={'contained'}
            color={'secondary'}
            type={type}
            {...props}
            sx={{
                marginTop: '1rem',
                borderRadius: '20px',
                width: '100%',
                textTransform: 'none',
                fontSize: '1rem',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                },
                ...props?.sx,
            }}
        >
            {label}
        </Button>
    )
}
