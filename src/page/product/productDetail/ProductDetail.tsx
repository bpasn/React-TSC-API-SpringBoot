import { Box, Grid } from '@mui/material';
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import data from '../../../data.json';
import ProductDetailImage from '../../../components/product/productDetail/productDetailImage/ProductDetailImage';
import ProductDescription from '../../../components/product/productDetail/productDescription/ProductDescription';
interface Props {
  product?: IProducts
}

const ProductDetail: React.FC<Props> = ({ product }: Props) => {
  const params = useParams<{ id: string }>();

  const _product = data.find((product: IProducts) => product.id === Number(params.id))
  return (
    <Box component={'main'}>
      <Box sx={{
        pl: "17px", pr: "24px",
      }}>
        <Box component={"section"}>
          <Box component={'nav'} sx={{
            '@media screen and (min-width: 768px)': {
              paddingBottom: "60px"
            }
          }}>
            <Box component={'div'} sx={{
              '&::after span': {
                content: '"\u203A"',
              },
              fontSize: 'calc(1.7 * 1rem)',
              '& *:not(:first-of-type)': {
                marginLeft: "12px"
              }
            }}>
              <NavLink to="/">Shop</NavLink>
              <span>{'\u203A'}</span>
              <NavLink to="/shop/p/jacky-trousers" >{_product?.productTitle}</NavLink>
            </Box>
          </Box>
        </Box>
        <Box component={"div"} >
          <Grid spacing={7} container>
            <Grid item xs={12} sm={12} md={7}>
              <ProductDetailImage images={_product?.image} />
            </Grid>
            <Grid item xs={12} sm={12} md={5} display={"block"} alignSelf={'center'} >
              <ProductDescription product={_product}/>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Box>
  )
}

export default ProductDetail