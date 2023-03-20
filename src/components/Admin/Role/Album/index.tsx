import LabeledSwitch from '@/src/components/global/Switch'
import { IAlbumRole } from '@/src/hooks/role/useCreate'
import { Box, FormGroup, FormHelperText, FormLabel } from '@mui/material'

interface IAlbumRolesProps {
    set: (album: IAlbumRole) => void
    value: IAlbumRole
    enabled: boolean
    checked?: boolean
}

export default function AlbumRoles({
    set: setAlbum,
    value: album,
    enabled,
    checked,
}: IAlbumRolesProps) {
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
                Album
            </FormLabel>
            <FormGroup>
                <LabeledSwitch
                    label={'Write'}
                    checked={checked}
                    props={{
                        disabled: !enabled,
                    }}
                    onChange={(e) =>
                        setAlbum({ ...album, write: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Read'}
                    props={{
                        disabled: !enabled,
                    }}
                    checked={checked}
                    onChange={(e) =>
                        setAlbum({ ...album, read: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Update'}
                    props={{
                        disabled: !enabled,
                    }}
                    checked={checked}
                    onChange={(e) =>
                        setAlbum({ ...album, update: e.target.checked })
                    }
                />
                <LabeledSwitch
                    label={'Delete'}
                    props={{
                        disabled: !enabled,
                    }}
                    checked={checked}
                    onChange={(e) =>
                        setAlbum({ ...album, delete: e.target.checked })
                    }
                />
            </FormGroup>
            <FormHelperText
                sx={{
                    fontSize: '0.8rem',
                    color: 'white',
                }}
            >
                Album permissions
            </FormHelperText>
        </Box>
    )
}
