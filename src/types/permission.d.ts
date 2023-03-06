type Entities = 'users' | 'musics' | 'albums' | 'artists' | 'playlists'

type Permissions = 'write' | 'read' | 'delete' | 'update'

export type EntitiesPermissions = `${Entities}:${Permissions}` | '*'
