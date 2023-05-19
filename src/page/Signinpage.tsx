import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { signIn } from '../action/user.action'
import {  useNavigate } from 'react-router-dom'
import useAxiosHook from '../axios-hook/axiosHook'
type Props = {}

const Signinpage = (props: Props) => {
    const [bodySign, setBodySign] = React.useState<ISignInRequest>();
    const axiosHook = useAxiosHook();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { userInfo, loading, error } = useAppSelector(state => state.SignUser)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch<any>(signIn(axiosHook,bodySign as ISignInRequest))
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBodySign({ ...bodySign, [e.target.name]: e.target.value }as ISignInRequest) 
    }
    React.useEffect(() => {
        
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])
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
                    {error && <Alert severity="error" sx={{
                        alignItems:"center",
                        fontSize:'14px'
                    }}>{
                        error.response && error.response.data ? error.response.data.error : error.message
                    }</Alert>}
                    <TextField
                        onChange={handleChange}
                        required
                        margin='normal'
                        fullWidth
                        label="Username"
                        name="username"
                        id='username'
                        type='username'
                        autoComplete='username'
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