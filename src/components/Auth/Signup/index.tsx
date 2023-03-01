import { useSignup } from '@/src/hooks/auth/useSignup'
import { Typography } from '@mui/material'
import { useState } from 'react'
import PrimaryButton from '../../global/button/Primary'
import SecondaryButton from '../../global/button/Secondary'
import InputPassword from '../../global/input/Password'
import InputText from '../../global/input/Text'
import BasicModal from '../../global/Modal'

export default function Signup() {
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
    } = useSignup()

    return (
        <>
            <PrimaryButton
                props={{
                    onClick: () => setOpen(true),
                }}
            >
                Sign up
            </PrimaryButton>
            <BasicModal
                title="Create your account"
                open={open}
                setOpen={setOpen}
            >
                <form onSubmit={handleSubmit}>
                    <InputText
                        label="Email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputText
                        label="Username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputPassword
                        label="Password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputPassword
                        label="Confirm your password"
                        value={confirmPassword}
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <SecondaryButton label="Sign up" type={'submit'} />
                    {/* Centered typografy */}
                    <Typography
                        padding={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        Already have an account?{' '}
                    </Typography>
                </form>
            </BasicModal>
        </>
    )
}
