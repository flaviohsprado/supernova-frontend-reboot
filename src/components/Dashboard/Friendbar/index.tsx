import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { Box, Divider } from '@mui/material'
import ItemButton from '../../global/ItemButton'
import FriendListDashboard from './FriendList'

export default function Friendbar() {
    const friendsMock = [
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'flaviohsprado',
            isOnline: true,
            musicPlaying:
                'The Beatles - Here Comes The Sun dadasdasdadasdasdadsa',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: false,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: false,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: true,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: true,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: true,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: true,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: true,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: true,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: true,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
        {
            avatar: 'https://github.com/flaviohsprado.png',
            username: 'jao',
            isOnline: true,
            musicPlaying: 'The Beatles - Here Comes The Sun',
        },
    ]

    return (
        <>
            <Box sx={{ width: '100%', padding: '1rem' }}>
                <ItemButton icon={PersonAddIcon} name={'Add a new friend'} />
                <Divider />
                <Box sx={{ height: '100%', paddingTop: '1rem' }}>
                    <FriendListDashboard friends={friendsMock} />
                </Box>
            </Box>
        </>
    )
}
