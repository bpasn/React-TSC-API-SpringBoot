import React from 'react'
import { BoxAuthBackground, ButtonFormSubmit, FormControlTextFied, FormGroupCustom, } from '../StyledAuth'
import { Alert, Box, Grid, Stack } from '@mui/material'
import '../../../assets/css/admin.css'
import { Link } from 'react-router-dom'
import InputComponent from '../../../components/InputComponent'
import { useForm } from 'react-hook-form'
import CheckBoxComponent from '../../../components/CheckBoxComponent'
import { useAppDispatch, useAppSelector } from '../../../redux/hook'
import { signUp } from '../../../action/user.action'
type Props = {}
const AuthSignUp = (props: Props) => {
    const { register, handleSubmit, formState } = useForm<ISignUpRequest>()
    const { severity, status, message } = useAppSelector(state => state.Error);
    const dispatch = useAppDispatch();
    const handleSend = (data: ISignUpRequest) => {
        dispatch<any>(signUp(data))
    }
    return (
        <BoxAuthBackground>
            <FormGroupCustom onSubmit={handleSubmit(handleSend)}>
                <Grid container>
                    <Grid item sm={12} md={12} textAlign={"center"} mb={4}>
                        <img src={require('../../../assets/img/logo-5.png')} alt="logo" />
                    </Grid>
                    <Grid item sm={12} md={12} >
                        {status ?
                            (<Stack sx={{ width: '100%' }} mb={2} spacing={2} >
                                <Alert sx={{
                                    alignItems: "center",
                                    fontSize: "14px",
                                    fontFamily: 'Open Sans,"Helvetica Neue",Helvetica,Arial,sans-serif',
                                    fontWeight: 600
                                }} severity={severity}>{message}</Alert>
                            </Stack>)
                            : ''
                        }
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <InputComponent
                                name='email'
                                label='Email'
                                formState={formState}
                                register={register}
                                options={{ required: true }}
                            />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <InputComponent
                                name='username'
                                label='Username'
                                formState={formState}
                                register={register}
                                options={{ required: true }}
                            />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"3rem"}>
                            <InputComponent
                                name='password'
                                label='Password'
                                type='password'
                                formState={formState}
                                register={register}
                                options={{ required: true }}
                            />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <InputComponent
                                name='firstName'
                                label='First Name'
                                formState={formState}
                                register={register}
                                options={{ required: true }}
                            />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <InputComponent
                                name='lastName'
                                label='Last Name'
                                formState={formState}
                                register={register}
                                options={{ required: true }}
                            />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <InputComponent
                                name='telephon'
                                label='Telephone'
                                formState={formState}
                                register={register}
                                options={{
                                    required: true,
                                    maxLength: {
                                        value: 10,
                                        message: "Max length exceeded"
                                    },
                                    pattern: {
                                        value: /[0-9]/,
                                        message: "Invalid format telephone"
                                    }
                                }}
                            />
                        </FormControlTextFied>

                        <CheckBoxComponent
                            name='agree'
                            label={<span style={{ color: '#6156CE' }}>I agree to all <Link to="">Terms</Link></span>}
                            id={'agree'}
                            formState={formState}
                            register={register}
                            options={{ required: true }} value={''} />
                        <ButtonFormSubmit type='submit'>Register</ButtonFormSubmit>
                        <Box color={"#4f5163"} textAlign={"center"} marginTop={'1.8rem'}>
                            <Link to="/signin">Back</Link>
                        </Box>
                    </Grid>

                </Grid>
            </FormGroupCustom>
        </BoxAuthBackground>
    )
}

export default AuthSignUp