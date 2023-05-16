import {
    Box,
    Drawer,
    IconButton,
    createTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
    HeaderIcon,
    HeaderIconBox,
    HeaderIconBoxCart,
    HeaderIconBoxSocial,
    HeaderSite,
    HeaderSiteTitle,
    ListItemDesktop,
    NavMobile,
    TabLinkHeader,
    TabLinkHeaderList,
    ToolBarBox,
    ToolbarCustom,
    drawer
} from './styledComponent';
import { ThemeProvider } from '@mui/styles';

interface Props {
    window?: () => Window;
}
const navItem: string[] = [
    "Shop", "LookBook", "About", "Contact"
]


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1024,
            xl: 1536,
        }
    }

});


const HeaderComponent = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("shop")

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
    const changeActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setActive(e.currentTarget.text.toLowerCase())
    }

    return (
        <ThemeProvider theme={theme}>
            <Box component={"header"} sx={{
                padding: { sm: "2vw" }
            }}>
                <ToolbarCustom>
                    <ToolBarBox>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <ListItemDesktop sx={{
                            display: { xs: 'none', sm: "block" },
                            flex: {
                                sm: "1 1 33%"
                            },
                            width: { sm: '33%' }
                        }}>
                            <TabLinkHeader>
                                {navItem.map((item) => (
                                    <TabLinkHeaderList to={"/"} onClick={changeActive} item={item} active={active} key={item} >
                                        {item}
                                    </TabLinkHeaderList>
                                ))}
                            </TabLinkHeader>
                        </ListItemDesktop>
                        <HeaderSite>
                            <HeaderSiteTitle>You Site Title</HeaderSiteTitle>
                        </HeaderSite>
                    </ToolBarBox>
                    <HeaderIcon sx={{
                        width: { sm: "16%", md: "33%" },
                    }}>
                        <HeaderIconBox>
                            <HeaderIconBoxSocial sx={{
                                display: { xs: "none", lg: "flex" },
                            }}>
                                <InstagramIcon fontSize="large" sx={{
                                    marginLeft: "15px"
                                }} />
                                <TwitterIcon fontSize="large" sx={{
                                    marginLeft: "15px"
                                }} />
                            </HeaderIconBoxSocial>
                            <HeaderIconBoxCart >
                                <ShoppingCartCheckoutIcon fontSize="large" />
                            </HeaderIconBoxCart>
                        </HeaderIconBox>

                    </HeaderIcon>
                </ToolbarCustom>

                <NavMobile>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' },
                        }}
                    >
                        {drawer(navItem)}
                    </Drawer>
                </NavMobile>
            </Box>
        </ThemeProvider>
    )
}

export default HeaderComponent