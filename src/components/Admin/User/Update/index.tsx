import SecondaryButton from '@/src/components/global/button/Secondary'
import InputPassword from '@/src/components/global/input/Password'
import InputText from '@/src/components/global/input/Text'
import BasicModal from '@/src/components/global/Modal'
import { useUpdateUser } from '@/src/hooks/user/useUpdate'
import UserRepository from '@/src/repositories/user'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'

interface IUpdateUserProps {
    id: string
}

export default function UpdateUser({ id }: IUpdateUserProps) {
    const [open, setOpen] = useState(false)
    const {
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSubmit,
    } = useUpdateUser(id, setOpen)

    useEffect(() => {
        const fetchData = async () => await UserRepository.findOne(id)

        fetchData().then((data) => {
            setEmail(data.email)
            setUsername(data.username)
        })
    }, [])

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
            <BasicModal title="Update user" open={open} setOpen={setOpen}>
                <form onSubmit={handleSubmit}>
                    <InputText
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputText
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputPassword
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputPassword
                        label="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <SecondaryButton label="Update" type={'submit'} />
                </form>
            </BasicModal>
        </>
    )
}
