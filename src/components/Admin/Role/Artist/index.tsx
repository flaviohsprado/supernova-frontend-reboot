import LabeledSwitch from '@/src/components/global/Switch'
import { IArtistRole } from '@/src/hooks/role/useCreate'
import { Box, FormGroup, FormHelperText, FormLabel } from '@mui/material'

interface IArtistRolesProps {
    set: (artist: IArtistRole) => void
    value: IArtistRole
    enabled: boolean
    checked?: boolean
}

export default function ArtistRoles({
    set: setArtist,
    value: artist,
    enabled,
    checked,
}: IArtistRolesProps) {
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
                Artist
            </FormLabel>
            <FormGroup>
                <LabeledSwitch
                    label={'Write'}
                    props={{
                        disabled: !enabled,
                    }}
                    checked={checked}
                    onChange={(e) =>
                        setArtist({ ...artist, write: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Read'}
                    props={{
                        disabled: !enabled,
                    }}
                    checked={checked}
                    onChange={(e) =>
                        setArtist({ ...artist, read: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Update'}
                    props={{
                        disabled: !enabled,
                    }}
                    checked={checked}
                    onChange={(e) =>
                        setArtist({ ...artist, update: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Delete'}
                    props={{
                        disabled: !enabled,
                    }}
                    checked={checked}
                    onChange={(e) =>
                        setArtist({ ...artist, delete: e.target.checked })
                    }
                />
            </FormGroup>
            <FormHelperText
                sx={{
                    fontSize: '0.8rem',
                    color: 'white',
                }}
            >
                Artist permissions
            </FormHelperText>
        </Box>
    )
}
