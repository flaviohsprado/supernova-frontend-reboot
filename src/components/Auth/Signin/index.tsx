import { AuthContext } from '@/src/contexts/Auth.context'
import { Checkbox, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import PrimaryButton from '../../global/button/Primary'
import SecondaryButton from '../../global/button/Secondary'
import InputPassword from '../../global/input/Password'
import InputText from '../../global/input/Text'
import BasicModal from '../../global/Modal'

export default function Signin() {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRememberMe] = useState(false)
    const { signIn } = useContext(AuthContext)

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        signIn({ email, password, remember })
    }

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
                    <Typography>
                        Remember me{' '}
                        <Checkbox
                            checked={remember}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            inputProps={{ 'aria-label': 'controlled' }}
                            sx={{
                                color: 'primary.main',
                                '&.Mui-checked': {
                                    color: 'primary.main',
                                },
                            }}
                        />
                    </Typography>
                </form>
            </BasicModal>
        </>
    )
}
