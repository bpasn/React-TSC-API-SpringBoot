import { Box , Typography } from '@mui/material'
import { CardContentCustom, CardCustom, CardMediaCustom } from './styledComponents'
import { Link, NavLink } from 'react-router-dom'

type Props = {
    product:IProducts,
}


const CardComponent = ({product}: Props) => {
    return (
        <CardCustom sx={{ width: "100%", backgroundColor: "transparent !important", boxShadow: "none !important" }}>
            <CardMediaCustom
                className='zoom-wrapper'
                children={
                    <Box sx={{ position: "relative" }}>
                        <img
                            height="100%"
                            width={"100%"}
                            src={product.image[0]}
                            alt={"item.title"}
                            loading="lazy"
                        />
                        <Box sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)"
                        }}>
                            <NavLink to={`/product/detail/${product.id}`}>QUICK VIEW</NavLink>
                        </Box>
                    </Box>
                }

            />
            <CardContentCustom sx={{
                marginTop: '10px',
                display: 'flex',
                width: '100%',
                justifyContent: "space-between",
                flexDirection: "column",
            }}>
                <Typography component="div" sx={{
                    fontWeight: 500,
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    textTransform: 'none',
                    lineHeight: '1.4em',
                    fontSize: '1.6rem',
                }}>
                    {product.productTitle}
                </Typography>
                <Typography component={"p"} color="text.secondary" sx={{
                    fontWeight: 500,
                    fontStyle: 'normal',
                    letterSpacing: '0em',
                    textTransform: 'none',
                    lineHeight: '1.4em',
                    fontSize: '1rem',
                }}>
                    ${product.price}
                </Typography>
            </CardContentCustom>
        </CardCustom >
    )
}

export default CardComponent