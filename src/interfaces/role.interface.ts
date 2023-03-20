export interface IRole {
    id: string
    name: string
    permissions: string
}

export interface IUserRole {
    write: boolean
    read: boolean
    update: boolean
    delete: boolean
}

export interface IAlbumRole {
    write: boolean
    read: boolean
    update: boolean
    delete: boolean
}

export interface IArtistRole {
    write: boolean
    read: boolean
    update: boolean
    delete: boolean
}

export interface IMusicRole {
    write: boolean
    read: boolean
    update: boolean
    delete: boolean
}
