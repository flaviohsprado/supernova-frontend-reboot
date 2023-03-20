import PrimaryButton from '@/src/components/global/button/Primary'
import InputText from '@/src/components/global/input/Text'
import BasicModal from '@/src/components/global/Modal'
import { useCreateRole } from '@/src/hooks/role/useCreate'
import { Box, FormControl } from '@mui/material'
import { useEffect, useState } from 'react'
import AdminRoles from '../Admin'
import AlbumRoles from '../Album'
import ArtistRoles from '../Artist'
import MusicRoles from '../Music'
import UserRoles from '../User'

export default function CreateRole() {
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
    } = useCreateRole(setOpen)

    useEffect(() => {
        if (isAdmin) setFalse()
    }, [isAdmin])

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

    return (
        <>
            <PrimaryButton onClick={() => setOpen(true)}>
                Create Role
            </PrimaryButton>
            <BasicModal title={'Create Role'} open={open} setOpen={setOpen}>
                <form onSubmit={handleSubmit}>
                    <FormControl component="fieldset" variant="standard">
                        <InputText
                            label={'Name'}
                            value={name}
                            required={true}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <AdminRoles setIsAdmin={setIsAdmin} />
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
