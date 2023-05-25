import React from 'react'
import { BoxAuthBackground, ButtonForm, CheckBoxCustom, CustomBox, FormControlTextFied, FormGroupCustom, InputField, LabelCustom, LabelForm } from '../StyledAuth'
import { Box, Grid } from '@mui/material'
import CheckBoxComponent from '../../../components/CheckBoxComponent'
import SideBoxSpacing from '../../../components/SideBoxSpacing'
import '../../../assets/css/admin.css'
import { Link } from 'react-router-dom'
type Props = {}

const AuthSignUp = (props: Props) => {
    return (
        <BoxAuthBackground>
            <FormGroupCustom>
                <Grid container>
                    <Grid item sm={12} md={12} textAlign={"center"} mb={4}>
                        <img src={require('../../../assets/img/logo-5.png')} alt="logo" />
                    </Grid>
                    <Grid item sm={12} md={12} >
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <LabelForm>Email</LabelForm>
                            <InputField required name='email' />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <LabelForm>Username</LabelForm>
                            <InputField required name='username' />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"3rem"}>
                            <LabelForm>Password</LabelForm>
                            <InputField required name='password' type='password' />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <LabelForm>First Name</LabelForm>
                            <InputField required name='firstName' />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <LabelForm>Last Name</LabelForm>
                            <InputField required name='lastName' />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <LabelForm>Telephone</LabelForm>
                            <InputField required name='telephone' />
                        </FormControlTextFied>

                        <Box display={"flex"} justifyContent={"center"} marginBottom="1rem">
                            <CustomBox sx={{
                                marginRight: "1rem"
                            }}>
                                <CheckBoxCustom id={'agree'} type='checkbox' />
                                <LabelCustom htmlFor={'agree'}>
                                    <span style={{ color: '#6156CE' }}>I agree to all <Link to="">Terms</Link></span></LabelCustom>
                            </CustomBox>
                        </Box>
                        <ButtonForm type='button'>Register</ButtonForm>
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