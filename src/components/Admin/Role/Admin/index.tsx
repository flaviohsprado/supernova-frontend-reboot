import LabeledSwitch from '@/src/components/global/Switch'
import { Box, FormGroup, FormLabel } from '@mui/material'

interface IAdminRolesProps {
    isAdmin: boolean
    setIsAdmin: (isAdmin: boolean) => void
}

export default function AdminRoles({ isAdmin, setIsAdmin }: IAdminRolesProps) {
    return (
        <Box>
            <FormLabel
                component={'legend'}
                sx={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: 'primary.main',
                }}
            >
                Admin
            </FormLabel>
            <FormGroup>
                <LabeledSwitch
                    label={'All'}
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                />
            </FormGroup>
        </Box>
    )
}
