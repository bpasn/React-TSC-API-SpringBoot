import ProductPageLayout from '../../ProductPageLayout'
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { ButtonCustom, FromGroupGrid, InputCustom, InputFileCustom, TextAreaCustom } from '../addProduct/AddProductStyle'
import SelectCustomComponent from '../../../../components/admin/customComponent/SelectCustomComponent'

type Props = {}

const AddCategory = (props: Props) => {
    return (
        <ProductPageLayout
            titleHeader='Add/Edit Categories'
            mainMenu={"ecommerce"}
            subMenu={['Add/Edit Categories']}>

            {addCategory({ type: 'MAIN', title: "Add Categories", form: "categoryMain" })}
            {addCategory({ type: "SUB", title: "Add Sub Categories", form: "categorySub" })}

        </ProductPageLayout>
    )
}

export default AddCategory

function addCategory({ type, title, form }: { type: 'SUB' | 'MAIN', title: string, form: string }) {
    return <Grid container sx={{
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
                                }} variant="h4" color="initial">{title}</Typography>
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
                                        <Box component={"form"} id={form}>
                                            {/*  Name */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Name :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom name="name" />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/* Is Active */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Is Active :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <SelectCustomComponent name="isActive" listOption={['Yes', 'No']} value={''} setState={function (value: any): void {
                                                        throw new Error('Function not implemented.')
                                                    }} />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  image file upload */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Thumbnail Image :
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
                                            </FromGroupGrid>

                                            {/* Description */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Description :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <TextAreaCustom name="description" rows={4} cols={5} />
                                                </Grid>
                                            </FromGroupGrid>

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
                                                        <InputFileCustom name="images" multiple type='file' />
                                                    </Box>
                                                </Grid>
                                            </FromGroupGrid>


                                            {/* Page Title */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Page Title :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom name='pageTitle' />
                                                </Grid>
                                            </FromGroupGrid>


                                            {/* Page Title */}
                                            <FromGroupGrid container display={`${type === "SUB" ? 'flex' : 'none'}`}>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Url :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom name='url' />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/* Meta Keywords */}
                                            <FromGroupGrid container>
                                                <Grid item md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Meta Keywords :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <TextAreaCustom name="metaKeyword" rows={4} cols={5} />
                                                </Grid>
                                            </FromGroupGrid>

                                            <Box textAlign={"center"} margin={"0 auto"}>
                                                <ButtonCustom sx={{
                                                    marginTop:"3rem",
                                                    marginBottom:"1.5rem",
                                                    fontSize:"14px",
                                                }}>Submit</ButtonCustom>
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
}
