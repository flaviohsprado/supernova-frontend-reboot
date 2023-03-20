import { TextField, TextFieldProps } from '@mui/material'
import { ChangeEvent } from 'react'

interface IInputTextProps {
    label: string
    value: string
    required?: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    props?: TextFieldProps
}

export default function InputText({
    label,
    value,
    required,
    onChange,
    props,
}: IInputTextProps) {
    return (
        <>
            <TextField
                label={label}
                value={value}
                onChange={onChange}
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
                            borderColor: 'primary.main',
                        },
                    },
                }}
                {...props}
            />
        </>
    )
}
