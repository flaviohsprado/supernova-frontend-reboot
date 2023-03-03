import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SvgIcon,
} from '@mui/material'

interface IItemButtonProps {
    icon: typeof SvgIcon
    name: string
}

export default function ItemButton({ icon: Icon, name }: IItemButtonProps) {
    return (
        <ListItemButton
            sx={{
                borderRadius: '5px',
                '&:hover': {
                    backgroundColor: 'primary.main',
                },
            }}
        >
            <ListItemIcon>
                <Icon
                    sx={{
                        color: 'white',
                    }}
                />
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItemButton>
    )
}
