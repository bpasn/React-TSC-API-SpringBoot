import { Box, ThemeProvider, createTheme } from '@mui/material';
import React from 'react'
import { Crumbs, CrumbsA, CrumbsLi, CrumbsUl, PageHeader, PageTitle, PageTitleH3 } from './ecommerce/addProduct/AddProductStyle';

type Props = {
    titleHeader?: string;
    mainMenu?: string;
    subMenu?: string[];
    children?: string | JSX.Element | JSX.Element[] | React.ReactNode;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const theme = createTheme({
    components: {
        MuiOutlinedInput: {

            styleOverrides: {
                root: {
                    fontSize: "14px",
                    border: '1px solid #ced4da',
                    '&:hover': {
                        backgroundColor: "#fff",
                        color: '#3232b7',
                        boxShadow: '0px 5px 20px 0 rgba(0, 0, 0, 0.2)',
                        willChange: 'opacity, transform',
                        transition: 'all 0.3s ease-out',

                        border: '1px solid #ced4da !improtant',
                        webkitTransition: 'all 0.3s ease-out',
                    },
                    "& $notchedOutline": {
                        borderColor: "purple"
                    },
                    "&:hover $notchedOutline": {
                        borderColor: "red"
                    },
                    "& $focused $notchedOutline": {
                        borderColor: "purple"
                    }
                },
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-root': {
                        height: "calc(1.5em + .75rem + 10px)",
                        borderRadius: "30px"
                    },
                }
            },
        },
    }
})
const ProductPageLayout: React.FC<Props> = (props: Props) => {
    return (
        <ThemeProvider theme={theme} >
            <Box sx={{
                padding: "0 30px",
                maxWidth: "none !improtant"
            }}>
                <PageHeader>
                    <PageTitle>
                        <PageTitleH3>
                            {props.titleHeader}
                        </PageTitleH3>
                        <Crumbs>
                            <CrumbsUl>
                                <CrumbsLi>
                                    <CrumbsA>
                                        <i className="fa fa-home"></i>
                                    </CrumbsA>
                                </CrumbsLi>
                                <CrumbsLi>
                                    <CrumbsA>
                                        {props.mainMenu}
                                    </CrumbsA>
                                </CrumbsLi>
                                {props.subMenu?.map((sub: string, index: number) => {
                                    return <CrumbsLi key={sub + index}>
                                        <CrumbsA sx={{
                                            fontWeight: `${props.subMenu?.length === index + 1 ? 700 : 'normal'} `
                                        }}>
                                            {sub}
                                        </CrumbsA>
                                    </CrumbsLi>
                                })}

                            </CrumbsUl>
                        </Crumbs>
                    </PageTitle>
                </PageHeader>

                {/* content */}
                {props.children}
            </Box>
        </ThemeProvider>
    )
}

export default ProductPageLayout