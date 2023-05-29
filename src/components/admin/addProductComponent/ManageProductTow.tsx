import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { BoxCheckBoxCustom, ButtonCustom, ButtonCustom2, CheckBoxCustom, CheckBoxLable, FromGroupGrid, InputCustom, InputFileCustom, TextAreaCustom } from '../../../page/admin/ecommerce/addProduct/AddProductStyle'
import { SelectBox } from '../customComponent/SelectBox'
import dataMock from '../../../mock/datamock.json';
import React from 'react';
import CheckBoxComponent from '../../CheckBoxComponent';
type Props = {
    idInsert: string
}

const ManageProductTow = ({ idInsert }: Props) => {

    const [formData, setFormData] = React.useState({

    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prve => ({ ...prve, [event.target.name]: event.target.value }))
    }
    return (
        <Grid container sx={{
            backgroundColor: "#fff",
            borderRadius: '5px',
            marginBottom: "40px"
        }}>
            <Grid item sm={12} xs={12} md={12}>
                <Box className="statbox widget box box-shadow"
                    component={'div'}
                    padding={0} marginTop={0} marginBottom={0}>
                    <Box className="widget-header">
                        <Grid container>
                            <Grid item sm={12} md={12} >
                                <Box sx={{
                                    padding: "25px 15px",
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'Open Sans,"Helvetica Neue",Helvetica,Arial,sans-serif',
                                        fontSize: "16px",
                                        color: "#000",
                                        fontWeight: 600,
                                        margin: 0,
                                    }} variant="h4" color="initial">Add / Manage Product</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="widget-content widget-content-area add-manage-product-2">
                        <Grid container spacing={4} padding="0 15px">
                            {/* LEFT */}
                            <Grid item xl={7} lg={7} xs={12} md={12}>
                                <Card
                                    sx={{
                                        marginBottom: "20px",
                                        backgroundColor: "#fff",
                                        borderRadius: ".25rem",
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
                                        subheader=""
                                    />
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
                                                        <InputCustom onChange={handleChange} name="name" />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Description */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Description :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <TextAreaCustom onChange={handleChange} name="description" rows={4} cols={5} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Short Description */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Short Description :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <TextAreaCustom onChange={handleChange} name="shortDescription" rows={4} cols={5} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Category */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Category :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectBox
                                                            options={dataMock.category}
                                                            name="category"
                                                            value=""
                                                            defaultText='Select Category'
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* ฺBrand */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Brand :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectBox
                                                            defaultText='Select Brand'
                                                            options={dataMock.brand}
                                                            name="brand"
                                                            value=""
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Color */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Color :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectBox
                                                            defaultText='Select Color'
                                                            options={dataMock.color}
                                                            name="color"
                                                            value=""
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Size */}
                                                <FromGroupGrid container>
                                                    <Grid item md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Size :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectBox
                                                            defaultText='Select Size'
                                                            options={dataMock.size}
                                                            name="size"
                                                            value=""
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* SKU */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        SKU :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <InputCustom onChange={handleChange} name='SKU' />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Weight */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Weight :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <InputCustom onChange={handleChange} name='weight' />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Status */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Status :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectBox
                                                            options={dataMock.status}
                                                            name="status"
                                                            value=""
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Visibility */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Visibility :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectBox
                                                            options={dataMock.visibility}
                                                            name="visibility"
                                                            value=""
                                                            onChange={handleChange}
                                                        />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Weight */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Country of Manufacture :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <InputCustom onChange={handleChange} placeholder='Type a Country...' name='countryOfManufacture' />
                                                    </Grid>
                                                </FromGroupGrid>
                                            </Box>
                                        </CardContent>
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* RIGHT */}
                            <Grid item xl={5} lg={5} md={12} >
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
                                        title="PRICING"
                                        subheader=""
                                    />
                                    <CardContent sx={{
                                        flex: "1 1 auto",
                                        padding: "20px"
                                    }}>
                                        <CardContent sx={{
                                            padding: "20px"
                                        }}>
                                            {/*  Price */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Price :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom onChange={handleChange} name="price" />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/* Tax Class */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Tax Class :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <SelectBox
                                                        options={dataMock.taxClass}
                                                        name="textClass"
                                                        value=""
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  Discount */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Discount :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom onChange={handleChange} name="discount" />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  Coupon */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Coupon :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom onChange={handleChange} name="coupon" />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  Check */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12} justifyContent={'start'}>
                                                    {/* <BoxCheckBoxCustom>
                                                        <CheckBoxCustom id="apply" onChange={handleChange} type='checkbox' />
                                                        <CheckBoxLable htmlFor='apply'>Check to Apply</CheckBoxLable>
                                                    </BoxCheckBoxCustom> */}
                                                    <CheckBoxComponent id={'apply'} label="Check to Apply" name={'apply'} value=''  />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  Text Image */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={12} sm={12}>
                                                    <Typography variant="h4" sx={{
                                                        textDecoration: "underline",
                                                        color: "#ee3d50",
                                                        textTransform: "uppercase",
                                                        fontSize: "17px"
                                                    }} color="initial">IMAGE</Typography>
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
                                                        <InputFileCustom name="fileUpload" type='file' />
                                                    </Box>
                                                </Grid>
                                            </FromGroupGrid>
                                            {/*  Text Image */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={12} sm={12}>
                                                    <Typography variant="h4" sx={{
                                                        textDecoration: "underline",
                                                        color: "#ee3d50",
                                                        textTransform: "uppercase",
                                                        fontSize: "17px"
                                                    }} color="initial">INVENTORY</Typography>
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  QTY */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    QTY :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom onChange={handleChange} name="inventory" />
                                                </Grid>
                                            </FromGroupGrid>
                                            {/*  KEYWORD */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={12} sm={12}>
                                                    <Typography variant="h4" sx={{
                                                        textDecoration: "underline",
                                                        color: "#ee3d50",
                                                        textTransform: "uppercase",
                                                        fontSize: "17px"
                                                    }} color="initial">KEYWORD</Typography>
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  image file upload */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Keywords :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom onChange={handleChange} name="keyword" />
                                                </Grid>
                                            </FromGroupGrid>

                                            <Box textAlign={"center"} margin={"0 auto"}>
                                                <ButtonCustom2 disabled={!idInsert}>Insert Product</ButtonCustom2>
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
    )
}

export default ManageProductTow