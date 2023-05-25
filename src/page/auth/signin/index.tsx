import { BoxAuthBackground, ButtonForm, Division, FormControlTextFied, FormGroupCustom, IConSocial, InputField, LabelCustom, LabelForm, Line, SocialBox } from '../StyledAuth'
import { Box, Grid, Typography } from '@mui/material'
import ButtonSocialComponent from '../../../components/ButtonSocialComponent'
import { Link } from 'react-router-dom'
import { useForm, FieldValues } from 'react-hook-form'
import '../../../assets/css/index.css'
import CheckBoxComponent from '../../../components/CheckBoxComponent'
import InputComponent from '../../../components/InputComponent'
type Props = {}
interface Request {
    username: string;
    password: string;
    checked1: boolean;
}
const AuthSignIn = (props: Props) => {
    const { register, handleSubmit, formState } = useForm<Request>();
    const onSubmit = (data: Request) => console.log()
    console.log(formState.errors)
    return (
        <BoxAuthBackground>
            <FormGroupCustom onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item sm={12} md={12} textAlign={"center"} mb={4}>
                        <img src={require('../../../assets/img/logo-5.png')} alt="logo" />
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
                            <InputComponent
                                formState={formState}
                                options={{ required: true, maxLength: 30 }}
                                register={register}
                                name={'username'}
                                label='Login' />
                        </FormControlTextFied>
                        <FormControlTextFied marginBottom={"3rem"}>
                            <InputComponent
                                formState={formState}
                                options={{ required: true, maxLength: 30 }}
                                register={register}
                                name={'password'}
                                label='Password' />
                        </FormControlTextFied>

                        <CheckBoxComponent
                            id='checkbox1'
                            label='Remember me'
                            value=''
                            name={'checkbox1'} options={{ required: true }}
                            formState={formState}
                            register={register} />
                        <ButtonForm type='submit'>Sign in</ButtonForm>
                        <Box textAlign="center" marginTop="1rem" color={"#888da8"}>
                            <Link to="#">Forgot Password ?</Link>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <Box textAlign="center">
                            <Box component={"p"} marginTop={"1.5rem"}>New Here? <Link to="/signup">Register </Link> as new user !</Box>
                        </Box>
                    </Grid>
                </Grid>
            </FormGroupCustom>
        </BoxAuthBackground>
    )
}

export default AuthSignIn