import LabeledSwitch from '@/src/components/global/Switch'
import { IUserRole } from '@/src/hooks/role/useCreate'
import { Box, FormGroup, FormHelperText, FormLabel } from '@mui/material'

interface IUserRolesProps {
    set: (user: IUserRole) => void
    value: IUserRole
    enabled: boolean
}

export default function UserRoles({
    set: setUser,
    value: user,
    enabled,
}: IUserRolesProps) {
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
                User
            </FormLabel>
            <FormGroup>
                <LabeledSwitch
                    label={'Read'}
                    props={{
                        disabled: !enabled,
                    }}
                    onChange={(e) =>
                        setUser({ ...user, read: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Update'}
                    props={{
                        disabled: !enabled,
                    }}
                    onChange={(e) =>
                        setUser({ ...user, update: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Delete'}
                    props={{
                        disabled: !enabled,
                    }}
                    onChange={(e) =>
                        setUser({ ...user, delete: e.target.checked })
                    }
                />
            </FormGroup>
            <FormHelperText
                sx={{
                    fontSize: '0.8rem',
                    color: 'white',
                }}
            >
                User permissions
            </FormHelperText>
        </Box>
    )
}
