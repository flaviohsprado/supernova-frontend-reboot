import LabeledSwitch from '@/src/components/global/Switch'
import { IMusicRole } from '@/src/hooks/role/useCreate'
import { Box, FormGroup, FormHelperText, FormLabel } from '@mui/material'

interface IMusicRolesProps {
    set: (music: IMusicRole) => void
    value: IMusicRole
    enabled: boolean
}

export default function MusicRoles({
    set: setMusic,
    value: music,
    enabled,
}: IMusicRolesProps) {
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
                Music
            </FormLabel>
            <FormGroup>
                <LabeledSwitch
                    label={'Write'}
                    props={{
                        disabled: !enabled,
                    }}
                    onChange={(e) =>
                        setMusic({ ...music, write: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Read'}
                    props={{
                        disabled: !enabled,
                    }}
                    onChange={(e) =>
                        setMusic({ ...music, read: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Update'}
                    props={{
                        disabled: !enabled,
                    }}
                    onChange={(e) =>
                        setMusic({ ...music, update: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Delete'}
                    props={{
                        disabled: !enabled,
                    }}
                    onChange={(e) =>
                        setMusic({ ...music, delete: e.target.checked })
                    }
                />
            </FormGroup>
            <FormHelperText
                sx={{
                    fontSize: '0.8rem',
                    color: 'white',
                }}
            >
                Music permissions
            </FormHelperText>
        </Box>
    )
}
