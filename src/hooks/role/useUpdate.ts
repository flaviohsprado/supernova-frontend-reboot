import { ICustomError } from '@/src/interfaces/error.interface'
import {
    IAlbumRole,
    IArtistRole,
    IMusicRole,
    IUserRole,
} from '@/src/interfaces/role.interface'
import { AxiosError } from 'axios'
import { useState } from 'react'
import RoleRepository from '../../repositories/role'
import { useRefetch } from '../useRefetch'
import useToastContext from '../useToast'

export const useUpdateRole = (
    id: string,
    setOpen: (value: boolean) => void
) => {
    const { toast } = useToastContext()
    const { refetch } = useRefetch()

    const [name, setName] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [user, setUser] = useState<IUserRole>({} as IUserRole)
    const [album, setAlbum] = useState<IAlbumRole>({} as IAlbumRole)
    const [artist, setArtist] = useState<IArtistRole>({} as IArtistRole)
    const [music, setMusic] = useState<IMusicRole>({} as IMusicRole)

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        let permissions: string = ''

        if (!isAdmin) permissions = mountPermissions(user, album, artist, music)

        try {
            await RoleRepository.update(id, {
                name,
                permissions: isAdmin ? '*' : permissions,
            })

            toast({
                title: `Role ${name} updated`,
                description: 'Role has been updated successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            erasePermissions()
            setOpen(false)
            refetch('roles')
        } catch (error) {
            const axiosError = error as AxiosError<ICustomError>

            toast({
                title: 'Occured an error',
                description: String(axiosError.response?.data?.message),
                status: Number(axiosError.response?.data?.status),
                duration: 3000,
                isClosable: true,
            })
        }
    }

    function erasePermissions() {
        setName('')
        setIsAdmin(false)
        setUser({} as IUserRole)
        setAlbum({} as IAlbumRole)
        setArtist({} as IArtistRole)
        setMusic({} as IMusicRole)
    }

    return {
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
    }
}

function mountPermissions(
    user: IUserRole,
    album: IAlbumRole,
    artist: IArtistRole,
    music: IMusicRole
): string {
    const permissionsArray = []

    if (user.read) permissionsArray.push('user:read')
    if (user.update) permissionsArray.push('user:update')
    if (user.delete) permissionsArray.push('user:delete')

    if (album.write) permissionsArray.push('album:write')
    if (album.read) permissionsArray.push('album:read')
    if (album.update) permissionsArray.push('album:update')
    if (album.delete) permissionsArray.push('album:delete')

    if (artist.write) permissionsArray.push('artist:write')
    if (artist.read) permissionsArray.push('artist:read')
    if (artist.update) permissionsArray.push('artist:update')
    if (artist.delete) permissionsArray.push('artist:delete')

    if (music.write) permissionsArray.push('music:write')
    if (music.read) permissionsArray.push('music:read')
    if (music.update) permissionsArray.push('music:update')
    if (music.delete) permissionsArray.push('music:delete')

    return permissionsArray.join(',')
}
