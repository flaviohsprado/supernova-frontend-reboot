import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material'

interface IFriendInformation {
    avatar: string
    username: string
    isOnline: boolean
    musicPlaying: string
}

interface IFriendListDashboardProps {
    friends: IFriendInformation[]
}

export default function FriendListDashboard({
    friends,
}: IFriendListDashboardProps) {
    return (
        <Paper
            style={{
                maxHeight: '68vh',
                overflow: 'auto',
                backgroundColor: 'transparent',
            }}
        >
            <List
                sx={{
                    '& .MuiListItem-root': {
                        padding: '0.5rem 1rem',
                    },
                    '& .MuiListItemText-root': {
                        margin: '0',
                    },
                    //style for the scrollbar
                    '&::-webkit-scrollbar': {
                        width: '0.5em',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'secondary.dark',
                        borderRadius: '10px',
                    },
                }}
            >
                {friends.map((friend, index) => (
                    <ListItem
                        disablePadding
                        key={index}
                        sx={{
                            borderRadius: '5px',
                            backgroundColor: 'secondary.dark',
                            '&:hover': {
                                backgroundColor: 'secondary.light',
                                color: 'white',
                            },
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar src={friend.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            sx={{
                                color: 'white',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'pre-wrap',
                            }}
                            primary={friend.username}
                            secondary={
                                <>
                                    <TextSlider text={friend.musicPlaying} />
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}

function TextSlider({ text }: any) {
    return (
        <Box
            width={'200px'}
            height={'30px'}
            display={'inline-flex'}
            flexDirection={'column'}
            whiteSpace={'nowrap'}
        >
            <Typography
                //component="span"
                variant="caption"
                color="#b8b8b8"
                sx={{
                    position: 'relative',
                    textOverflow: 'ellipsis',
                    transition: 'right 10s linear',
                    //on hover, move the text to the left
                    '&:hover': {
                        left: '-100%',

                        //when the text is out of the box, move it back to the right
                        '&:after': {
                            right: '100%',
                        },
                    },
                }}
            >
                {text}
            </Typography>
        </Box>
    )
}
