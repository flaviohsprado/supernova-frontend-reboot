import AlbumIcon from '@mui/icons-material/Album'
import GroupIcon from '@mui/icons-material/Group'
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

const drawerWidth = 240

interface LinkItemProps {
    name: string
    icon: typeof SvgIcon
    page?: ReactNode
}

const LinkItems: LinkItemProps[] = [
    { name: 'Users', icon: GroupIcon },
    { name: 'Role', icon: RuleIcon },
    { name: 'Album', icon: AlbumIcon },
    { name: 'Artist', icon: InterpreterModeIcon },
    { name: 'Music', icon: MusicNoteIcon },
]

export default function AdminDashboardSidebar() {
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
