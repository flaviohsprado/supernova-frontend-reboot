import { FormControlLabel, Switch } from '@mui/material'
import { SwitchProps } from '@mui/material/Switch'

interface ILabeledSwitchProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    label: string
    checked?: boolean
    props?: SwitchProps
}

export default function LabeledSwitch({
    onChange,
    label,
    checked,
    props,
}: ILabeledSwitchProps) {
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={checked}
                    onChange={onChange}
                    sx={{
                        '& .MuiSwitch-track': {
                            backgroundColor: 'secondary',

                            '&.Mui-checked': {
                                backgroundColor: 'primary.main',
                            },
                        },
                        '& .MuiSwitch-thumb': {
                            backgroundColor: 'white',
                        },
                        '& .MuiSwitch-thumb:before': {
                            backgroundColor: 'primary.main',
                        },
                    }}
                    {...props}
                />
            }
            label={label}
        />
    )
}
