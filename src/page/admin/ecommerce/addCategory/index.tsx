import ProductPageLayout from '../../../ProductPageLayout'
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { ButtonCustom, ButtonCustom2, FromGroupGrid, InputCustom, InputFileCustom, TextAreaCustom } from '../addProduct/AddProductStyle'
import { SelectBox } from '../../../../components/admin/customComponent/SelectBox'
import React, { ChangeEvent } from 'react'
import { useAppDispatch } from '../../../../redux/hook'
import { createCategories } from '../../../../action/categories.action'
import axios, { AxiosError } from 'axios'
import AppSetting from '../../../../constance/AppSetting'

type Props = {}

const AddCategory = (props: Props) => {
    const fileInputRef = React.useRef<HTMLInputElement>();
    const dispatch = useAppDispatch();
    const [categories, setCategories] = React.useState<ICategoriesReq>({
        categoriesDescription: "",
        categoryName: "",
        icon: "",
        active: "ACTIVE",
        imagePath: null

    });
    const handleClick = async () => {
        // dispatch({ type: "SHOW_LOADING" })
        // try {
        //     const { data: result } = await axios.post<{ success: boolean, message: string }>(
        //         AppSetting.CREATE_CATEGORIES,
        //         categories,
        //         {
        //             headers: {
        //                 "Content-Type": "multipart/form-data"
        //             }
        //         })
        //     if (result.success) {
        //         dispatch({
        //             type: "SHOW",
        //             payload: {
        //                 errorStatus: true,
        //                 severity: "success",
        //                 message: result.message,
        //             }
        //         })
        //     } else {
        //         dispatch({
        //             type: "SHOW",
        //             payload: {
        //                 errorStatus: true,
        //                 severity: "error",
        //                 message: result.message,
        //             }
        //         })
        //     }
        //     dispatch({ type: "HIDE_LOADING" })

        // } catch (error) {
        //     dispatch({ type: "HIDE_LOADING" })
        //     dispatch({
        //         type: "SHOW",
        //         payload: {
        //             errorStatus: true,
        //             severity: "error",
        //             message: error instanceof AxiosError && error.response && error.response.data && error.response.data.message ? error.response.data.message : (error instanceof Error && error.message),
        //         }
        //     })

        // }
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (event.currentTarget.type) {
            let { files } = event.target as HTMLInputElement;
            if (!files?.length) return
            let file = files[0];
            setCategories(prve => ({
                ...prve,
                imagePath: file
            }))
            return
        }

        setCategories(prve => ({
            ...prve,
            [event.target.name]: event.target.value
        }))
    }
    return (
        <ProductPageLayout
            titleHeader='Add/Edit Categories'
            mainMenu={"ecommerce"}
            subMenu={['Add/Edit Categories']}>

            <Grid container sx={{
                backgroundColor: "#fff",
                borderRadius: '5px',
                marginBottom: "40px"
            }}>
                <Grid item sm={12} xs={12} md={12}>
                    <Box className="statbox widget box box-shadow"
                        component={'div'}>
                        <Box className="widget-header">
                            <Grid container>
                                <Grid item sm={12} md={12} xs={12} xl={10}>
                                    <Box sx={{
                                        padding: "25px 15px",
                                    }}>
                                        <Typography sx={{
                                            fontFamily: 'Open Sans,"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            fontSize: "16px",
                                            color: "#000",
                                            fontWeight: 600,
                                            margin: 0,
                                        }} variant="h4" color="initial">{"Add Category"}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className="widget-content widget-content-area add-manage-product-1">
                            <Grid container spacing={4}>
                                <Grid item xl={12} lg={12} xs={12} md={12} sx={{
                                    padding: {
                                        md: "0 15px",
                                        // xs:"15px"
                                    },
                                    margin: {
                                        md: "0 92px",
                                        xl: "0 92px",
                                        lg: "0 92px",
                                        xs: "0 15px"
                                    }
                                }}>
                                    <Card
                                        sx={{
                                            marginBottom: "20px",
                                            backgroundColor: "#fff",
                                            borderRadius: ".25rem"
                                        }}
                                    >
                                        <CardHeader
                                            sx={{
                                                color: "#fff",
                                                backgroundColor: "#5247bd",
                                                borderTopRightRadius: "4px",
                                                borderTopLeftRadius: "4px",
                                                borderBottom: "1px solid #fff",
                                                padding: "10px 15px"
                                            }}
                                            title="GENERAL"
                                            subheader="" />
                                        <CardContent sx={{
                                            flex: "1 1 auto",
                                            padding: "20px"
                                        }}>
                                            <CardContent sx={{
                                                padding: "20px"
                                            }}>
                                                <Box component={"form"}>
                                                    {/*  Name */}
                                                    <FromGroupGrid container>
                                                        <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                            Name :
                                                        </Grid>
                                                        <Grid item xs={12} md={8} sm={12}>
                                                            <InputCustom required onChange={handleChange} name="categoryName" />
                                                        </Grid>
                                                    </FromGroupGrid>

                                                    {/* Is Active */}
                                                    <FromGroupGrid container>
                                                        <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                            Is Active :
                                                        </Grid>
                                                        <Grid item xs={12} md={8} sm={12}>
                                                            <SelectBox
                                                                options={[{ name: "ACTIVE", id: "1" }, { name: "INACTIVE", id: "2" }]}
                                                                name='active'
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                    </FromGroupGrid>

                                                    {/*  image file upload */}
                                                    {/* <FromGroupGrid container>
                                                        <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                            Icon :
                                                        </Grid>
                                                        <Grid item xs={12} md={8} sm={12}>
                                                            <Box component={"div"}
                                                                sx={{
                                                                    position: "relative",
                                                                    display: "inline-block",
                                                                    width: "100%",
                                                                    height: "calc(1.5em + .75rem + 2px)",
                                                                    marginBottom: 0
                                                                }}
                                                            >
                                                                <InputFileCustom name="thumbnailImage" multiple type='file' />
                                                            </Box>
                                                        </Grid>
                                                    </FromGroupGrid> */}

                                                    {/* Description */}
                                                    <FromGroupGrid container>
                                                        <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                            Description :
                                                        </Grid>
                                                        <Grid item xs={12} md={8} sm={12}>
                                                            <TextAreaCustom required name="categoriesDescription" rows={4} cols={5} />
                                                        </Grid>
                                                    </FromGroupGrid>

                                                    {/*  ShortDescription */}
                                                    {/* <FromGroupGrid container>
                                                        <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                            ShortDescription :
                                                        </Grid>
                                                        <Grid item xs={12} md={8} sm={12}>
                                                            <InputCustom name="categoryName" />
                                                        </Grid>
                                                    </FromGroupGrid> */}

                                                    {/*  image file upload */}
                                                    <FromGroupGrid container>
                                                        <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                            Image :
                                                        </Grid>
                                                        <Grid item xs={12} md={8} sm={12}>
                                                            <Box component={"div"}
                                                                sx={{
                                                                    position: "relative",
                                                                    display: "inline-block",
                                                                    width: "100%",
                                                                    height: "calc(1.5em + .75rem + 2px)",
                                                                    marginBottom: 0
                                                                }}
                                                            >
                                                                <InputFileCustom
                                                                    onChange={handleChange} name="imagePath" type='file' accept="image/png, image/jpeg" />
                                                            </Box>
                                                        </Grid>
                                                    </FromGroupGrid>
                                                    <Box textAlign={"center"} margin={"0 auto"}>
                                                        <ButtonCustom2 onClick={handleClick} type='button'>Create</ButtonCustom2>
                                                    </Box>
                                                </Box>
                                            </CardContent>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </ProductPageLayout>
    )
}

export default AddCategory

function addCategory({ type, title, form }: { type: 'SUB' | 'MAIN', title: string, form: string }) {

    return
}
