import React, { useEffect } from 'react'
import ProductPageLayout from '../ProductPageLayout'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";



import CardCategoryComponent from '../../components/category/CardCategoryComponent'
import { Box, CircularProgress, Tab, Tabs, Typography } from '@mui/material'
import { TabsCustom, TabCustom } from '../../components/Tabs/TabsCustom';
import { TabPanel } from './TapPanel';
import useEffectHook from '../../hook/useEffectHook';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import axios from 'axios';
import AppSetting from '../../constance/AppSetting';

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


function a11yProps(index: string) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
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
    const [value, setValue] = React.useState<string>('');
    const [categoires, setCategories] = React.useState<Categories[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const [itemPage] = React.useState<number>(9)
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const loadingCategories = async (offset: number = 0, limit: number = 10) => {
        const { data: { payload, success } } = await axios.get<CategoriesRes>(AppSetting.GET_CATEGORIES)
        if (success) {
            setCategories(payload)
            setValue(payload[0].categoryName)
        }
    }
    console.log(value)
    useEffectHook(() => {
        loadingCategories();
        
        return () => {
            setLoading(false);
        }
    })
    
    return loading && !categoires.length ? <Box display="flex" justifyContent={"center"}><CircularProgress/></Box>: (
        <ThemeProvider theme={theme}>
            <ProductPageLayout
                titleHeader='Product Catalog'
                mainMenu={"ecommerce"}
                subMenu={['Product Catalog']}>
                <Box sx={{ width: '100%' }} >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <TabsCustom value={categoires.length && categoires[0].categoryName} onChange={handleChange} aria-label="basic tabs example">
                            {categoires.map((item: Categories, index: number) => {
                                return <TabCustom key={item.id} label={item.categoryName} {...a11yProps(item.categoryName.replace(/\s/g,""))} />
                            })}
                        </TabsCustom>
                    </Box>

                    {categoires.map(item => {
                        return <TabPanel key={item.id} value={item.categoryName} index={item.categoryName}>
                                    <CardCategoryComponent categories={categoires} />
                                </TabPanel>
                    })}
                </Box>
                {/* <CardCategoryComponent /> */}
            </ProductPageLayout>
        </ThemeProvider>
    )

}

export default CategoriesPage