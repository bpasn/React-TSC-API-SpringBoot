import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { productAction } from '../action/product.action'
import useAxiosHook from '../axios-hook/axiosHook'
import { Box, } from '@mui/material'
import CardComponent from '../components/product/cardComponent/CardComponent'
import { ThemeProvider, createTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/styles'
import { Link } from 'react-router-dom'
import data from '../mock/data.json';
type Props = {}
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 767,
            lg: 1200,
            xl: 1536,
        }
    }, typography: {
        fontFamily: [
            "proxima-nova",
            "Helvetica Neue",
            "Helvetica",
            "Arial",
            "sans-serif",
            "acumin-pro"
        ].join(',')
    },
})


const TabList = styled('ul')({
    paddingBottom: '54px',
    paddingTop: '54px',
    paddingLeft: 0,
    marginBottom: '37px',
    marginTop: 0,
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    position: 'relative',

    "@media screen and (min-width:576px)": {
        justifyContent: "center",
        '&::after': {
            content: '""',
            opacity: .2,
            display: 'block',
            borderBottom: '1px solid',
            position: 'absolute',
            marginTop: -60,
            bottom: 0,
            left: 0,
            width: '100%',

        },
    },
})

const TabItem = styled("li")({
    display: "flex",
    '&:last-child span': {
        display: "none"
    },
})

const TabItemLink = styled(Link)({
    margin: "0 1.5vw",
    color: "var(--tweak-product-grid-text-below-list-category-nav-color)",
    textDecoration: "none"
})
const TabItemSpan = styled('span')({
    opacity: .2,

})

const ProductPage = (props: Props) => {
    const { userInfo } = useAppSelector(state => state.SignUser)
    const dispatch = useAppDispatch()
    const axiosHook = useAxiosHook()
    React.useEffect(() => {
        dispatch<any>(productAction(axiosHook))
    }, [axiosHook, dispatch, userInfo])
    return (
        <ThemeProvider theme={theme} >
            <Box component={"main"}>
                <Box component={"div"}>
                    <TabList>
                        <TabItem >
                            <TabItemLink to="/shop/tops">Tops</TabItemLink>
                            <TabItemSpan aria-hidden="true">|</TabItemSpan>
                        </TabItem>
                        <TabItem>
                            <TabItemLink to="/shop/bottoms" >Bottoms</TabItemLink>
                            <TabItemSpan >|</TabItemSpan>
                        </TabItem>

                        <TabItem >
                            <TabItemLink to="/shop/sale" >Sale</TabItemLink>
                            <TabItemSpan aria-hidden="true">|</TabItemSpan>
                        </TabItem>
                    </TabList>
                    <Grid container
                        rowSpacing={1}
                        columnSpacing={2}
                    >
                        {
                            data.map((product: IProductss, index: number) => {
                                return (
                                    <Grid xs={12} sm={12} md={3} key={product.id}>
                                        <CardComponent product={product} />
                                    </Grid>)
                            })
                        }
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default ProductPage