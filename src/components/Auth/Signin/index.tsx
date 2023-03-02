import { useLogin } from '@/src/hooks/auth/useLogin'
import { Typography } from '@mui/material'
import { useState } from 'react'
import PrimaryButton from '../../global/button/Primary'
import SecondaryButton from '../../global/button/Secondary'
import InputPassword from '../../global/input/Password'
import InputText from '../../global/input/Text'
import BasicModal from '../../global/Modal'

export default function Signin() {
    const [open, setOpen] = useState(false)
    const { email, setEmail, password, setPassword, handleSubmit } = useLogin()

    return (
        <>
            <PrimaryButton
                props={{
                    onClick: () => setOpen(true),
                }}
            >
                Sign in
            </PrimaryButton>
            <BasicModal title={'Sign in'} open={open} setOpen={setOpen}>
                <form onSubmit={handleSubmit}>
                    <InputText
                        label="Email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputPassword
                        label="Password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <SecondaryButton label="Login" type={'submit'} />
                    <Typography
                        padding={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        Forgot your password?{' '}
                    </Typography>
                </form>
            </BasicModal>
        </>
    )
}
