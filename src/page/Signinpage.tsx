import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../hook'
import { Action } from '../typing_action'
import { signIn } from '../action/user.action'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Signinpage = (props: Props) => {
    const [bodySign, setBodySign] = React.useState<{ email: string, password: string }>({
        email: '',
        password: ''
    })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { userInfo, loading, error } = useAppSelector(state => state.SignUser)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch<any>(signIn(bodySign))
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBodySign({ ...bodySign, [e.target.name]: e.target.value })
    }
    React.useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [dispatch, navigate, userInfo])
    return (
        <Container component={'div'} maxWidth="xs">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center"
            }}>
                <Typography variant='h6' component={'h2'}>
                    Sign In
                </Typography>
                <Container component={"form"} sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    {error && <Alert severity="error">{
                        error.response && error.response.data ? error.response.data : error.message
                    }</Alert>}
                    <TextField
                        onChange={handleChange}
                        required
                        margin='normal'
                        fullWidth
                        label="Email address"
                        name="email"
                        id='email'
                        type='email'
                        autoComplete='email'
                        autoFocus
                    />
                    <TextField
                        onChange={handleChange}
                        margin='normal'
                        required
                        fullWidth
                        label="Password"
                        name="password"
                        id='password'
                        autoComplete='password'
                        type='password'
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {loading ? "....loading" : 'Sign In'}
                    </Button>
                </Container>
            </Box>
        </Container>

    )
}

export default Signinpage