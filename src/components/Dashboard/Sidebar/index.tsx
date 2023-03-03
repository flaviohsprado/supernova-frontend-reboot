import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import HomeIcon from '@mui/icons-material/Home'
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import LockIcon from '@mui/icons-material/Lock'
import PublicIcon from '@mui/icons-material/Public'
import SearchIcon from '@mui/icons-material/Search'
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SvgIcon,
} from '@mui/material'
import { ReactNode } from 'react'
import ItemButton from '../../global/ItemButton'

interface LinkItemProps {
    name: string
    icon: typeof SvgIcon
    page?: ReactNode
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: HomeIcon },
    { name: 'Search', icon: SearchIcon },
    { name: 'Your Library', icon: LibraryMusicIcon },
]

interface ISidebarDashboardProps {
    musics: []
}

export default function SidebarDashboard({ musics }: ISidebarDashboardProps) {
    return (
        <>
            <Box sx={{ width: '100%', padding: '1rem' }} role="presentation">
                <List>
                    {LinkItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                sx={{
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    <item.icon
                                        sx={{
                                            color: 'white',
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ItemButton
                        icon={AddToPhotosIcon}
                        name={'Create playlist'}
                    />
                    <ItemButton
                        icon={LibraryAddCheckIcon}
                        name={'Liked songs'}
                    />
                </List>
                <Divider sx={{ backgroundColor: 'white' }} />
                <List>
                    {musics.map((music, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* @ts-ignore */}
                                    {music.private ? (
                                        <LockIcon />
                                    ) : (
                                        <PublicIcon />
                                    )}
                                </ListItemIcon>
                                {/* @ts-ignore */}
                                <ListItemText primary={music.title} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>
    )
}
