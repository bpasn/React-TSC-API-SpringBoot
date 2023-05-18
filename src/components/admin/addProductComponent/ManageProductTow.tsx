import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import { BoxCheckBoxCustom, ButtonCustom, CheckBoxCustom, CheckBoxLable, FromGroupGrid, InputCustom, InputFileCustom, TextAreaCustom } from '../../../page/admin/ecommerce/addProduct/AddProductStyle'
import SelectCustomComponent from '../customComponent/SelectCustomComponent'

type Props = {}

const ManageProductTow = (props: Props) => {
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
                        <Grid container spacing={4}>
                            {/* LEFT */}
                            <Grid item xl={7} lg={7} xs={12} md={12} >
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
                                                        <InputCustom name="name" />
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

                                                {/* Short Description */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Short Description :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <TextAreaCustom name="shortDescription" rows={4} cols={5} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Category */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Category :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectCustomComponent defaultText='Select Category' name="category" listOption={['Electronics', 'Apparel', 'Clothing', 'Furniture']} value={''} setState={function (value: any): void {
                                                            throw new Error('Function not implemented.')
                                                        }} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* ฺBrand */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Brand :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectCustomComponent defaultText='Select Brand ' name="brand" listOption={['Microsoft', 'Samsung', 'HP', 'Ford']} value={''} setState={function (value: any): void {
                                                            throw new Error('Function not implemented.')
                                                        }} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Color */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Color :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectCustomComponent defaultText='Select Color' name="color" listOption={[
                                                            'Black',
                                                            'White',
                                                            'Blue',
                                                            'Red',
                                                            'Green'
                                                        ]} value={''} setState={function (value: any): void {
                                                            throw new Error('Function not implemented.')
                                                        }} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Size */}
                                                <FromGroupGrid container>
                                                    <Grid item md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Size :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectCustomComponent defaultText='Select Size' name="size" listOption={[
                                                            'S',
                                                            'M',
                                                            'L',
                                                            'XL',
                                                            'XXL',
                                                            'XXXL'

                                                        ]} value={''} setState={function (value: any): void {
                                                            throw new Error('Function not implemented.')
                                                        }} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* SKU */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        SKU :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <InputCustom name='SKU' />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Weight */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Weight :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <InputCustom name='weight' />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Status */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Status :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectCustomComponent
                                                            defaultText="Please Select "
                                                            name="status"
                                                            listOption={[]}
                                                            value={''}
                                                            setState={function (value: any): void {
                                                                throw new Error('Function not implemented.')
                                                            }} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Visibility */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Visibility :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <SelectCustomComponent
                                                            defaultText="Please Select"
                                                            name="visibility"
                                                            listOption={[]}
                                                            value={''}
                                                            setState={function (value: any): void {
                                                                throw new Error('Function not implemented.')
                                                            }} />
                                                    </Grid>
                                                </FromGroupGrid>

                                                {/* Weight */}
                                                <FromGroupGrid container>
                                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                        Country of Manufacture :
                                                    </Grid>
                                                    <Grid item xs={12} md={8} sm={12}>
                                                        <InputCustom placeholder='Type a Country...' name='countryOfManufacture' />
                                                    </Grid>
                                                </FromGroupGrid>
                                            </Box>
                                        </CardContent>
                                    </CardContent>
                                </Card>
                            </Grid>
                            {/* RIGHT */}
                            <Grid item xl={5} lg={5} md={12}>
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
                                                    <InputCustom name="price" />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/* Tax Class */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Tax Class :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <SelectCustomComponent defaultText='Select Category' name="taxClass" listOption={['Electronics', 'Apparel', 'Clothing', 'Furniture']} value={''} setState={function (value: any): void {
                                                        throw new Error('Function not implemented.')
                                                    }} />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  Discount */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Discount :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom name="discount" />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  Coupon */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                    Coupon :
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <InputCustom name="coupon" />
                                                </Grid>
                                            </FromGroupGrid>

                                            {/*  Check */}
                                            <FromGroupGrid container>
                                                <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                                </Grid>
                                                <Grid item xs={12} md={8} sm={12}>
                                                    <BoxCheckBoxCustom>
                                                        <CheckBoxCustom type='checkbox' />
                                                        <CheckBoxLable >Check to Apply</CheckBoxLable>
                                                    </BoxCheckBoxCustom>
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
                                                    <InputCustom name="inventory" />
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
                                                    <InputCustom name="keyword" />
                                                </Grid>
                                            </FromGroupGrid>

                                            <Box textAlign={"center"} margin={"0 auto"}>
                                                <ButtonCustom>Insert Product</ButtonCustom>
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