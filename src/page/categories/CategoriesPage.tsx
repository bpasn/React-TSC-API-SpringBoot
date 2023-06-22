import React from 'react'
import ProductPageLayout from '../ProductPageLayout'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";



import CardCategoryComponent from '../../components/category/CardCategoryComponent'
import { Box, CircularProgress, Stack} from '@mui/material'
import useEffectHook from '../../hook/useEffectHook';
import { useAppDispatch } from '../../redux/hook';
import { AxiosError } from 'axios';
import AppSetting from '../../constance/AppSetting';
import useAxiosHook from '../../axios-hook/axiosHook';
import PaginationComponent from '../../components/pagination/PaginationComponent';

type Props = {}
export interface Categories {
    id: string;
    categoryName: string;
    categoryDescription: string;
    imagePath: string;
    active: boolean;
}
interface CategoriesRes {
    payload: Categories[],
    success: boolean
}


const theme = createTheme({
    components: {
        MuiTabs: {
            styleOverrides: {
                root: {
                    backgroundColor: "red",
                },
                indicator: {
                    backgroundColor: orange[700]
                }
            }
        },

    }
});

const CategoriesPage = (props: Props) => {
    const [categoires, setCategories] = React.useState<Categories[]>([]);
    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const [itemPage] = React.useState<number>(3)

    const dispatch = useAppDispatch();
    const axioshook = useAxiosHook();
    const [loading, setLoading] = React.useState<boolean>(false);
    const loadingCategories = async (offset: number = 0, limit: number = 10) => {
        try {
            const { data: { payload, success } } = await axioshook.get<CategoriesRes>(AppSetting.GET_CATEGORIES)
            if (success) {
                setCategories(payload)
            }
        } catch (error) {
            dispatch<any>({
                type: "SHOW", payload: {
                    severity: "error",
                    errorStatus: true,
                    message: error instanceof AxiosError && error.response && error.response.data && error.response.data.message ? error.response.data.message : (error instanceof Error && error.message),
                }
            })
        }
    }
    useEffectHook(() => {
        loadingCategories();
        return () => {
            setLoading(false);
        }
    })
    const indexOfLastPage = currentPage * itemPage
    const indexOfFirstPage = indexOfLastPage - itemPage
    const currentOfPage = categoires?.slice(indexOfFirstPage, indexOfLastPage)
    return loading ? <Box display="flex" justifyContent={"center"}><CircularProgress /></Box> : (
        <ThemeProvider theme={theme}>
            <ProductPageLayout
                titleHeader='Product Catalog'
                mainMenu={"ecommerce"}
                subMenu={['Product Catalog']}>
                {categoires.length ? <CardCategoryComponent categories={currentOfPage} /> : <Box display={"flex"} justifyContent={"center"} marginBottom={"40px"}>No Product Categories</Box>}
                <Stack spacing={2} >
                    <PaginationComponent
                        itemPerPage={itemPage}
                        totalPage={categoires.length}
                        setCurrentPage={setCurrentPage} />
                </Stack>
            </ProductPageLayout>
        </ThemeProvider>
    )

}

export default CategoriesPage