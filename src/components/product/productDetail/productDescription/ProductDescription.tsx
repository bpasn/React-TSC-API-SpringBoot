import {
    Button, 
    FormControl, 
    InputBase, 
    List, 
    ListItem, 
    MenuItem, 
    Select, 
    SelectChangeEvent, 
    ThemeProvider, 
    Typography, 
    createTheme, 
    styled 
} from '@mui/material'
import React, {  useState } from 'react'
import { 
    TextSubtitle, 
    TextTitle, 
    TextTitleProduct, 
    Title } from './Styled';

interface Props {
    product?: IProductss
}


const theme = createTheme({
    typography: {
        fontFamily: "Poppins"
    }
})
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        height: "50px",
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));
const ProductDescription = ({ product }: Props) => {
    const [size, setSize] = useState<Size>();

    const handleChange = (e: SelectChangeEvent<string>, child: React.ReactNode) => {
        setSize(size => {
            return {
                size: e.target.value,
                stock: 1
            }
        })
    }
    return (
        <ThemeProvider theme={theme}>
            <TextTitleProduct variant='h2'>
                {product?.productTitle}
            </TextTitleProduct>
            <Title sx={{
                marginBottom: "25px"
            }}>
                <TextTitle sx={{ fontSize: "3rem" }}>
                    ${Number(product?.price).toFixed(2)}
                </TextTitle>
            </Title>
            <Title>
                <TextTitle>
                    description
                </TextTitle>
                <TextSubtitle>
                    {product?.description}
                </TextSubtitle>
            </Title>
            <Title>
                <TextTitle>
                    detail
                </TextTitle>
                <TextSubtitle>
                    <List>
                        {product?.detail.map((list: string, index: number) => {
                            return <ListItem key={index} sx={{
                                '&::before': {
                                    content: '"\u2022"',
                                    paddingRight: "10px"
                                }
                            }}>
                                {list}
                            </ListItem>
                        })}
                    </List>
                </TextSubtitle>
            </Title>
            <Title>
                <Typography sx={{
                    '&::after': {
                        content: '"\u003a"'
                    }
                }}>
                    Size
                </Typography>
                <Select
                    value={size?.size}
                    onChange={handleChange}
                    displayEmpty
                    fullWidth
                    sx={{
                        height: "80px",
                        marginBottom: '40px'
                    }}
                >
                    <MenuItem value="">
                        <em>Select Size</em>
                    </MenuItem>
                    {product?.sizes.map((size: Size, index: number) => {
                        return <MenuItem key={index} disabled={size.stock <= 0} value={size.size}>{size.size}</MenuItem>
                    })}
                </Select>


            </Title>

            <Title>
                <Typography sx={{
                    '&::after': {
                        content: '"\u003a"'
                    }
                }}>
                    Quatity
                </Typography>
                <FormControl sx={{ m: 1, marginBottom: '40px' }} variant="standard">
                    <BootstrapInput value={1} id="demo-customized-textbox" />
                </FormControl>
            </Title>
            <Button
                fullWidth
                sx={{
                    boxShadow: "none",
                    height: '80px',
                    color: 'var(--primaryButtonTextColor)',
                    backgroundColor: '#a8a6a1',
                    borderColor: 'var(--primaryButtonTextColor)',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    letterSpacing: '.02em',
                    lineHeight: '1.2em',
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                        transition: '.3s',
                        boxShadow: "none",
                        opacity: .9,
                        backgroundColor: '#a8a6a1'
                    },
                    '&:active': {
                        backgroundColor: "#a8a6a1",
                        transition: 'none',
                        transform: 'none'
                    },
                    '&:visited': {
                        backgroundColor: "#a8a6a1",
                        transition: 'none',
                        transform: 'none'
                    }
                }}
                variant="contained" color="success">
                Add To Cart
            </Button>
        </ThemeProvider >

    )
}

export default ProductDescription