import AlbumIcon from '@mui/icons-material/Album'
import GroupIcon from '@mui/icons-material/Group'
import HomeIcon from '@mui/icons-material/Home'
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import RuleIcon from '@mui/icons-material/Rule'
import { SvgIcon } from '@mui/material'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { ReactNode } from 'react'
import AdminDashboardAlbum from '../Album'
import AdminDashboardArtist from '../Artist'
import AdminDashboardHome from '../Home'
import AdminDashboardMusic from '../Music'
import AdminDashboardRole from '../Role'
import AdminDashboardUser from '../User'

const drawerWidth = 240

interface IAdminDashboardSidebarProps {
    setPage: (page: ReactNode) => void
}

interface LinkItemProps {
    name: string
    icon: typeof SvgIcon
    page?: ReactNode
}

const LinkItems: LinkItemProps[] = [
    { name: 'Home', icon: HomeIcon, page: <AdminDashboardHome /> },
    { name: 'Users', icon: GroupIcon, page: <AdminDashboardUser /> },
    { name: 'Role', icon: RuleIcon, page: <AdminDashboardRole /> },
    { name: 'Album', icon: AlbumIcon, page: <AdminDashboardAlbum /> },
    {
        name: 'Artist',
        icon: InterpreterModeIcon,
        page: <AdminDashboardArtist />,
    },
    { name: 'Music', icon: MusicNoteIcon, page: <AdminDashboardMusic /> },
]

export default function AdminDashboardSidebar({
    setPage,
}: IAdminDashboardSidebarProps) {
    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'secondary.light',
                    },
                }}
                color="secondary"
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {LinkItems.map((item: LinkItemProps, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                onClick={() => setPage(item.page)}
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                    },
                                }}
                            >
                                <ListItemIcon>
                                    {
                                        <item.icon
                                            sx={{
                                                color: 'white',
                                            }}
                                        />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}
