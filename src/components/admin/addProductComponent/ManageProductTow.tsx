import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { ButtonCustom2, FromGroupGrid, InputCustom, InputFileCustom, TextAreaCustom } from '../../../page/admin/ecommerce/addProduct/AddProductStyle'
import { SelectBox } from '../customComponent/SelectBox'
import React from 'react';
import CheckBoxComponent from '../../CheckBoxComponent';
type Props = {
    idInsert: string;
    loadPage: ILoadingPage[]
}

const ManageProductTow = ({ idInsert, loadPage }: Props) => {

    const [formData, setFormData] = React.useState({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prve => ({ ...prve, [event.target.name]: event.target.value }))
    }
    return (
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
                                                options={loadPage.length ? loadPage.find(item => item.name === "category")?.options : []}
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
                                                options={loadPage.length ? loadPage.find(item => item.name === "brand")?.options : []}
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
                                                options={loadPage.length ? loadPage.find(item => item.name === "color")?.options : []}
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
                                                options={loadPage.length ? loadPage.find(item => item.name === "size")?.options : []}
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

                                    {/* Status */}
                                    <FromGroupGrid container>
                                        <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                            Status :
                                        </Grid>
                                        <Grid item xs={12} md={8} sm={12}>
                                            <SelectBox
                                                options={loadPage.length ? loadPage.find(item => item.name === "status")?.options : []}
                                                name="status"
                                                value=""
                                                onChange={handleChange}
                                            />
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
                                            options={loadPage.length ? loadPage.find(item => item.name === "taxClass")?.options : []}
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

                                {/*  Check */}
                                <FromGroupGrid container>
                                    <Grid item xs={12} md={4} sm={12} component={"label"} display={"inline-block"} marginBottom={"0.5rem"} fontSize={"16px"} color={"#3b3f5c"} htmlFor='Attribute'>
                                    </Grid>
                                    <Grid item xs={12} md={8} sm={12} justifyContent={'start'}>
                                        <CheckBoxComponent id={'apply'} label="Check to Apply" name={'apply'} value='' />
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
                                <Box textAlign={"center"} margin={"0 auto"}>
                                    <ButtonCustom2 disabled={!idInsert}>Insert Product</ButtonCustom2>
                                </Box>
                            </CardContent>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ManageProductTow