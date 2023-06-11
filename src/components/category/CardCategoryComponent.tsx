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
    
    // const [loading, setLoading] = React.useState(false);
    // const [categories, setCategories] = React.useState<any[]>();

    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const [itemPage] = React.useState<number>(9)

    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // // Avoid a layout jump when reaching the last page with empty rows.
    // const emptyRows = categories?.length &&
    //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - categories.length) : 0;

    // const handleChangePage = (
    //     event: React.MouseEvent<HTMLButtonElement> | null,
    //     newPage: number,
    // ) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // ) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    // };
    // const dispatch = useAppDispatch();
    // useEffectHook(() => {
    //     const getCatalog = async () => {
    //         setLoading(true);
    //         const { data: result } = await axios.get(AppSetting.GET_CATEGORIES);
    //         if (result.success) {
    //             setCategories(result.payload)
    //             setLoading(false)
    //         }
    //     }
    //     getCatalog()

    // })
    return (
        <Grid container>
            <Grid item xs={12} md={12} sm={12}>
                <Grid container mb={10} spacing={4}>
                    {categories?.length && categories.map((item: any) => {
                        return (<Grid key={item.id} item md={4} lg={4} sm={6}>
                            <Card >
                                <CardMedia
                                    sx={{ height: 260 }}
                                    image={"/Users/prpasn/Desktop/authentication_spring/" + item.imagePath}
                                    title="green iguana"
                                />
                                <CardContent sx={{ paddingLeft: "17px", paddingRight: "17px" }}>
                                    <Typography gutterBottom variant="h2" sx={{
                                        fontWeight: "700",
                                        textAlign: "center",
                                        fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
                                    }} component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
                                        color: "#888ea8",
                                        fontSize: "15px"
                                    }} color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
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
                <Stack spacing={2} >
                    <PaginationComponent
                        itemPerPage={currentPage} 
                        totalPage={categories.length}
                        setCurrentPage={setCurrentPage} />

                </Stack>
            </Grid>

        </Grid>
    )
}

export default CardCategoryComponent