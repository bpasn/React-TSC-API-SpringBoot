import React from 'react'
import { BoxAuthBackground, ButtonForm, CheckBoxCustom, CustomBox, FormControlTextFied, FormGroupCustom, InputField, LabelCustom, LabelForm } from '../StyledAuth'
import { Box, Grid } from '@mui/material'
import '../../../assets/css/admin.css'
import { Link } from 'react-router-dom'
import InputComponent from '../../../components/InputComponent'
import { useForm } from 'react-hook-form'
import CheckBoxComponent from '../../../components/CheckBoxComponent'
type Props = {}
interface RequestSignUp {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    telephone: string;
    agree: boolean;
}
const AuthSignUp = (props: Props) => {
    const { register, handleSubmit, formState } = useForm<RequestSignUp>()

    return (
        <BoxAuthBackground>
            <FormGroupCustom onSubmit={handleSubmit(() => { })}>
                <Grid container>
                    <Grid item sm={12} md={12} textAlign={"center"} mb={4}>
                        <img src={require('../../../assets/img/logo-5.png')} alt="logo" />
                    </Grid>
                    <Grid item sm={12} md={12} >
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
                                options={{ required: true }}
                            />
                        </FormControlTextFied>

                        <CheckBoxComponent
                            name='agree'
                            label={<span style={{ color: '#6156CE' }}>I agree to all <Link to="">Terms</Link></span>}
                            id={'agree'}
                            formState={formState}
                            register={register}
                            options={{ required: true }} value={''}                        />
                        <ButtonForm type='submit'>Register</ButtonForm>
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