import { TextField } from '@mui/material'
import { ChangeEvent } from 'react'

interface IInputPasswordProps {
    label: string
    value: string
    required?: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function InputPassword({
    label,
    value,
    required,
    onChange,
}: IInputPasswordProps) {
    return (
        <>
            <TextField
                label={label}
                value={value}
                onChange={onChange}
                type={'password'}
                margin={'normal'}
                required={required}
                sx={{
                    width: '100%',
                    fontStyle: {
                        color: 'white',
                    },
                    'label + &': {
                        fontSize: 16,
                    },
                    '& .MuiInputBase-input': {
                        borderRadius: 10,
                        backgroundColor: 'transparent',
                        fontSize: 16,
                        color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderRadius: 10,
                            borderColor: '#FFF',
                            color: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: '#FFF',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#FFF',
                        },
                    },
                }}
            />
        </>
    )
}
