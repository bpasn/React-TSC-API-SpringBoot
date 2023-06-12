import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Pagination, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/logo-5.png'
import { ButtonCustom2 } from '../../page/admin/ecommerce/addProduct/AddProductStyle'
import useEffectHook from '../../hook/useEffectHook'
import { useAppDispatch } from '../../redux/hook'
import axios from 'axios'
import AppSetting from '../../constance/AppSetting'
import PaginationComponent from '../pagination/PaginationComponent'
import { Categories } from '../../page/categories/CategoriesPage'
type Props = {
    categories: Categories[]
}

const CardCategoryComponent = ({ categories }: Props) => {

  
    return (
        <Grid container>
            <Grid item xs={12} md={12} sm={12}>
                <Grid container mb={10} spacing={4}>
                    {categories?.length && categories.map((item: any) => {
                        return (<Grid key={item.id} item md={4} lg={4} sm={6}>
                            <Card >
                                <CardMedia
                                    sx={{ height: 260 }}
                                    image={"/" + item.imagePath.replace(/[\\]/g, "/").replace(/(src\/main\/resources\/storage\/)/, "")}
                                    title="green iguana"
                                />
                                <CardContent sx={{ paddingLeft: "17px", paddingRight: "17px" }}>
                                    <Typography gutterBottom variant="h2" sx={{
                                        fontWeight: "700",
                                        textAlign: "center",
                                        fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                    }} component="div">
                                        {item.categoryName}
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        color: "#888ea8",
                                        fontSize: "15px"
                                    }} color="text.secondary">
                                        {item.categoryDescription}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box textAlign={"center"} margin={"0 auto"}>
                                        <ButtonCustom2 type='button' sx={{ width: "13rem" }}>More</ButtonCustom2>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>)
                    })}
                </Grid>
               
            </Grid>

        </Grid>
    )
}

export default CardCategoryComponent