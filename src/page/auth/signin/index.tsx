import React from 'react'
import { BoxAuthBackground, ButtonForm, ButtonSocial, Division, FormControlTextFied, FormGroupCustom, IConSocial, InputField, LabelForm, Line, SocialBox } from '../StyledAuth'
import { Box, Grid, Typography } from '@mui/material'
import ButtonSocialComponent from '../../../components/ButtonSocialComponent'
import { Link } from 'react-router-dom'
import '../../../assets/css/index.css'
type Props = {}

const AuthSignIn = (props: Props) => {
    const handleClick = () => {
        console.log("this")
    }
    return (
        <BoxAuthBackground>
            <FormGroupCustom>
                <Grid container>
                    <Grid item sm={12} md={12} textAlign={"center"} mb={4}>
                        <img src="https://designreset.com/preview-equation/default/assets/img/logo-5.png" alt="logo" />
                    </Grid>
                    <Grid item sm={12} md={12} >
                        <SocialBox>
                            <Typography variant="h5">Sign in with</Typography>
                            <ButtonSocialComponent social='facebook' faIcon='fa-facebook' />
                            <ButtonSocialComponent social='twitter' faIcon='fa-twitter' />
                            <ButtonSocialComponent social='google' faIcon='fa-google-plus' />
                        </SocialBox>
                        <Division sx={{
                            marginBottom: "3rem !important",
                            marginTop: "1.5rem !important"
                        }}>
                            <Line side='left' />
                            <span>or</span>
                            <Line side='right' />
                        </Division>

                        <FormControlTextFied marginBottom={"2.85rem"}>
                            <LabelForm>Login</LabelForm>
                            <InputField />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"3rem"}>
                            <LabelForm>Password</LabelForm>
                            <InputField />
                        </FormControlTextFied>

                        {/* CHECHBOX */}
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: '1rem'
                        }}>
                            <Box sx={{
                                marginRight: "1rem",
                                position: "relative",
                                display: "block",
                                minHeight: "1.5rem",
                                paddingLeft: "1.5rem",
                                '& input:checked > label::before': {
                                    color: "#fff",
                                    borderColor: "#007bff",
                                    backgroundColor: "#007bff"
                                },
                                '& input:checked > label::after': {
                                    color: "#fff",
                                    borderColor: "#007bff",
                                    backgroundColor: "#007bff"
                                },
                                // '& input$checked > label':{

                                // }
                            }}>
                                <Box component={'input'} type={"checkbox"}
                                    sx={{
                                        position: "absolute",
                                        zIndex: '-1',
                                        opacity: 0,
                                        overflow: "visible",
                                        boxSizing: "border-box",
                                        padding: "0",
                                        margin: 0,
                                        fontFamily: "inherit",
                                        fontSize: "inherit",
                                        lineHeight: "inherit",
                                    }}
                                >

                                </Box>
                                <Box component={"label"} sx={{
                                    textTransform: "initial",
                                    fontSize: "14px",
                                    color: "#e95f2b",
                                    marginBottom: "16px",
                                    cursor: "pointer",
                                    position: "relative",
                                    verticalAlign: "top",
                                    display: "inline-block",
                                    ':before': {
                                        // cursor: "pointer",
                                        borderRadius: "0.25rem",
                                        backgroundColor: "#dee2e6",
                                        border: "none",
                                        content: '""',
                                        transition: "none",
                                        position: "absolute",
                                        top: "0.25rem",
                                        left: "-1.5rem",
                                        display: "block",
                                        width: "1rem",
                                        height: "1rem",
                                        webkitTransition: "none",
                                        pointerEvents: "none",
                                    },
                                    ':after': {
                                        // cursor: "pointer",
                                        position: "absolute",
                                        top: "0.25rem",
                                        left: "-1.5rem",
                                        display: "block",
                                        width: "1rem",
                                        height: "1rem",
                                        content: '""',
                                        background: "no-repeat 50%/50% 50%",
                                        boxSizing: "border-box"
                                    },

                                }}>Remember me</Box>
                            </Box>
                        </Box>

                        <ButtonForm>Sign in</ButtonForm>
                        <Box textAlign="center" marginTop="1rem" color={"#888da8"}>
                            <Link style={{ textDecoration: "none", color: "#4f5163", backgroundColor: "tranpatent" }} to="#">Forgot Password ?</Link>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <Box textAlign="center">
                            <Box component={"p"} marginTop={"1.5rem"}>New Here? <a href="user_register_3.html">Register </a> as new user !</Box>
                        </Box>
                    </Grid>
                </Grid>
            </FormGroupCustom>
        </BoxAuthBackground>
    )
}

export default AuthSignIn