import PrimaryButton from '@/src/components/global/button/Primary'
import InputText from '@/src/components/global/input/Text'
import BasicModal from '@/src/components/global/Modal'
import { useUpdateRole } from '@/src/hooks/role/useUpdate'
import RoleRepository from '@/src/repositories/role'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { Box, FormControl, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import AdminRoles from '../Admin'
import AlbumRoles from '../Album'
import ArtistRoles from '../Artist'
import MusicRoles from '../Music'
import UserRoles from '../User'

interface IUpdateRoleProps {
    id: string
}

export default function UpdateRole({ id }: IUpdateRoleProps) {
    const date = new Date().toLocaleTimeString()
    console.log('ID', id, date)
    const [open, setOpen] = useState(false)
    const {
        name,
        setName,
        isAdmin,
        setIsAdmin,
        user,
        setUser,
        album,
        setAlbum,
        artist,
        setArtist,
        music,
        setMusic,
        handleSubmit,
    } = useUpdateRole(id, setOpen)

    useEffect(() => {
        if (isAdmin) setFalse()
    }, [isAdmin])

    useQuery(
        'role',
        async () => {
            const role = await RoleRepository.findOne(id)
            setName(role.name)
            castPermission(role.permissions)

            console.log('ROLE', role)
        },
        {
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchOnReconnect: true,
        }
    )

    const entities = [
        {
            name: 'User',
            component: UserRoles,
            set: setUser,
            value: user,
        },
        {
            name: 'Artist',
            component: ArtistRoles,
            set: setArtist,
            value: artist,
        },
        {
            name: 'Album',
            component: AlbumRoles,
            set: setAlbum,
            value: album,
        },
        {
            name: 'Music',
            component: MusicRoles,
            set: setMusic,
            value: music,
        },
    ]

    function setFalse() {
        setUser({ write: false, read: false, update: false, delete: false })
        setAlbum({
            write: false,
            read: false,
            update: false,
            delete: false,
        })
        setArtist({
            write: false,
            read: false,
            update: false,
            delete: false,
        })
        setMusic({
            write: false,
            read: false,
            update: false,
            delete: false,
        })
    }

    function castPermission(permissions: string) {
        const permission = permissions.split(',')

        permission.forEach((perm) => {
            if (perm === '*') setIsAdmin(true)

            if (perm === 'user:read') setUser({ ...user, read: true })
            if (perm === 'user:write') setUser({ ...user, write: true })
            if (perm === 'user:update') setUser({ ...user, update: true })
            if (perm === 'user:delete') setUser({ ...user, delete: true })

            if (perm === 'artist:read') setArtist({ ...artist, read: true })
            if (perm === 'artist:write') setArtist({ ...artist, write: true })
            if (perm === 'artist:update') setArtist({ ...artist, update: true })
            if (perm === 'artist:delete') setArtist({ ...artist, delete: true })

            if (perm === 'album:read') setAlbum({ ...album, read: true })
            if (perm === 'album:write') setAlbum({ ...album, write: true })
            if (perm === 'album:update') setAlbum({ ...album, update: true })
            if (perm === 'album:delete') setAlbum({ ...album, delete: true })

            if (perm === 'music:read') setMusic({ ...music, read: true })
            if (perm === 'music:write') setMusic({ ...music, write: true })
            if (perm === 'music:update') setMusic({ ...music, update: true })
            if (perm === 'music:delete') setMusic({ ...music, delete: true })
        })
    }

    return (
        <>
            <IconButton
                aria-label="update"
                sx={{
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        transition: 'background-color 0.2s',
                    },
                }}
                onClick={() => setOpen(true)}
            >
                <SyncAltIcon />
            </IconButton>
            <BasicModal title={'Update Role'} open={open} setOpen={setOpen}>
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset" variant="standard">
                        <InputText
                            label={'Name'}
                            value={name}
                            required={true}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <AdminRoles isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            sx={{ gap: '4rem', mt: '1rem' }}
                        >
                            {entities.map((entity) => {
                                const Component = entity.component
                                return (
                                    <Component
                                        key={entity.name}
                                        set={entity.set}
                                        value={entity.value}
                                        enabled={!isAdmin}
                                    />
                                )
                            })}
                        </Box>
                        <PrimaryButton type={'submit'}>Create</PrimaryButton>
                    </FormControl>
                </form>
            </BasicModal>
        </>
    )
}
