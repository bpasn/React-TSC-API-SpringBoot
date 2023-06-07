import * as React from 'react';
import dataMock from '../../mock/datamock.json';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import DraftsIcon from '@mui/icons-material/Drafts';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Collapse, ListItem, Menu, MenuItem } from '@mui/material';
import { TiShoppingCart } from 'react-icons/ti'
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'
import '../../assets/css/admin.css'
import { AppBarCustom } from './AppBar';
import { DrawerHeader } from './DrawerHeader';
import { MainAppBar } from './Main';
import { DrawerCustom } from './DrawerCustom';
const drawerwidth = 255;



const theme = createTheme({
    components: {
        MuiListItemText: {
            styleOverrides: {
                root: {
                    backgroundColor: "none",
                }
            }
        },

        MuiCollapse: {
            styleOverrides: {
                root: {
                    '& .MuiListItemText-root .MuiTypography-root span': {
                        fontSize: "13.32px !improtant",
                    },
                    padding: "17px 12px 17px 48px",
                    fontWeight: 200,
                    color: "#888ea8"
                }
            }
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    [`${AppBarCustom}`]: {
                        backgroundColor: "tranparent"
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    paddingRight: "0px !improtant"
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: "24px"
                }
            }
        },
        // MuiList:{
        //     styleOverrides:{
        //         root:{
        //             paddingLeft:"0",
        //             display:"flex",
        //             flexDirection:"row",
        //             marginBottom:"0",
        //             listStyle:"none",
        //             marginLeft:"auto",
        //             marginRight
        //         }
        //     }
        // }
    }
})


export default function PersistentDrawerLeft() {

    const [open, setOpen] = React.useState(true);
    const [_open, set_Open] = React.useState(0);
    const [openSub, setOpenSub] = React.useState(-1);
    const [textSubMenu, setTextSubMenu] = React.useState("");
    let location = useLocation();
    
    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    React.useEffect(() => {
        console.log(window.innerWidth)
    },[])
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', backgroundColor: "#e9ecef" }}>
                <AppBarCustom drawerwidth={drawerwidth} position="fixed" open={open}>
                    <Toolbar sx={{
                        paddingRight: "0px",
                        backgroundColor: "#fff",
                        '& .css-jzk4qw-MuiPaper-root-MuiAppBar-root': {
                            boxShadow: "none !improtant",
                        },

                    }}>
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, color: "#beb3b6" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Select country */}
                        <Button
                            disableTouchRipple
                            id="basic-button"
                            aria-controls={openMenu ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                        // onClick={handleClick}
                        >
                            <img style={{ width: "24px", borderRadius: "4px" }} src="https://designreset.com/preview-equation/default/assets/img/ca.svg" alt="" />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        {/** Left */}
                        <List sx={{
                            display:"flex",
                            flexDirection:"row",
                            marginRight:"auto",
                            marginLeft:"0"
                        }}>
                            {/* email */}
                            <ListItem>
                                <ListItemIcon>
                                    <DraftsIcon color="primary"></DraftsIcon></ListItemIcon>
                            </ListItem>
                            {/* email */}
                            <ListItem>
                                <ListItemIcon>
                                    <DraftsIcon color="primary"></DraftsIcon></ListItemIcon>
                            </ListItem>
                        </List>

                        {/** Right */}
                        <List  sx={{
                            display:"flex",
                            flexDirection:"row",
                            // marginRight:"auto",
                            marginLeft:"auto"
                        }}>
                            {/* email */}
                            <ListItem>
                                <ListItemIcon>
                                    <DraftsIcon color="primary"></DraftsIcon></ListItemIcon>
                            </ListItem>
                            {/* email */}
                            <ListItem>
                                <ListItemIcon>
                                    <DraftsIcon color="primary"></DraftsIcon></ListItemIcon>
                            </ListItem>
                        </List>
                    </Toolbar>
                </AppBarCustom>
                <DrawerCustom
                    sx={{
                        
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader />
                    <Divider /> {/* Divider -> is tag hr */}

                    <List>
                        {dataMock.menu.map((text, index) => (
                            <Box key={text.main.replace(/S/, "") + index} id={"menuItem" + (index + 1)}>
                                <List
                                    sx={{
                                        color: `${_open === index ? "#fff" : '#beb3b6'}`,
                                        cursor: "pointer", '&:hover': { color: "#fff" }, fontSize: "21px"
                                    }}
                                    onClick={() => set_Open(_open === index ? -1 : index)}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <TiShoppingCart />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                '& span': {
                                                    fontSize: "16px"
                                                }
                                            }}
                                            primary={text.main}
                                        />
                                        {_open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
                                    </ListItem>
                                </List>
                                <Collapse className='collapse' in={_open === index} sx={{
                                    paddingTop: 0,
                                    paddingBottom: 0
                                }}>
                                    <List component={"div"} >
                                        {text.sub.map((sub, index: number) => (
                                            <ListItem
                                                onClick={() => {
                                                    setOpenSub(openSub === index ? -1 : index)
                                                    setTextSubMenu(sub.name);
                                                }}
                                                key={sub.name}
                                                component={Link}
                                                to={sub.url}
                                                sx={{
                                                    margin: 0,
                                                    padding: 0,
                                                    '&:hover': {
                                                        cursor: "pointer",
                                                    },
                                                    '& span': {
                                                        fontSize: "13.35px"
                                                    }
                                                }}>
                                                <ListItemText
                                                    sx={{
                                                        display:"flex",
                                                        alignItems:"baseline",
                                                        fontSize: 20,
                                                        padding: '17px 12px 17px 48px',
                                                        paddingLeft: "14px",
                                                        marginLeft: "16px",
                                                        color: `${(openSub === index && textSubMenu === sub.name || location.pathname.includes(sub.url)) ? '#fff' : '#888ea8'}`,
                                                        '&:hover': {
                                                            color: "#fff",
                                                        },
                                                        '&:before':{
                                                            display:"flex",
                                                            alignItems:"center",
                                                            padding: '0 5px 0 0',
                                                            content:'"- "'
                                                        }
                                                    }}
                                                    primary={sub.name}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </DrawerCustom>
                <MainAppBar drawerwidth={drawerwidth} open={open}>
                    {/* <DrawerHeader /> */}
                    {<Outlet />}
                </MainAppBar>
            </Box>
        </ThemeProvider>
    );
}