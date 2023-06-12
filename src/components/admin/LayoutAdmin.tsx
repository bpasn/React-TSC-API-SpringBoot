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
import { AppBar } from './AppBar';
import { DrawerHeader } from './DrawerHeader';
import { MainAppBar } from './Main';
import { DrawerCustom } from './DrawerCustom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { userInfo } from 'os';
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
                    [`${AppBar}`]: {
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
        }
    }
})


export default function PersistentDrawerLeft() {

    const [open, setOpen] = React.useState(true);
    const [_open, set_Open] = React.useState(0);
    const [openSub, setOpenSub] = React.useState(-1);
    const { userInfo } = useAppSelector(state => state.SignUser)
    const dispatch = useAppDispatch()
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
        dataMock.menu.forEach(item => {
            let role = item.sub.filter(item => {
                return item.roles.filter(arr => userInfo?.roles.includes(arr)).length > 0
            })
            console.log(role)
        })
        }, [])
        return (
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', backgroundColor: "#e9ecef" }}>
                    <AppBar drawerwidth={drawerwidth} position="fixed" open={open}>
                        <Toolbar sx={{
                            paddingRight: "0px",
                            backgroundColor: "#fff",
                            '& .css-jzk4qw-MuiPaper-root-MuiAppBar-root': {
                                boxShadow: "none !improtant",
                            }

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
                                id="basic-button"
                                aria-controls={openMenu ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openMenu ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <img src="https://designreset.com/preview-equation/default/assets/img/ca.svg" alt="" />
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

                            {/* email */}
                            <DraftsIcon color="primary"></DraftsIcon>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerwidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerwidth,
                                boxSizing: 'border-box',
                                backgroundColor: "#181722",
                                color: "#beb3b6",
                                verticalAlign: 'middle',
                                padding: '7px',
                                '& svg': {
                                    width: "21px",
                                    height: "21px",
                                    color: "#beb3b6"
                                },
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader />
                        <Divider /> {/* Divider -> is tag hr */}

                        <List>
                            {dataMock.menu.filter(fil => fil.roles?.filter(role => userInfo?.roles.includes(role)).length > 0).map((text, index) => (
                                <Box key={text.main.replace(/S/, "") + index} id={"menuItem" + (index + 1)}>
                                    <List
                                        sx={{
                                            color: `${_open === index ? "#fff" : '#beb3b6'}`,
                                            cursor: "pointer", '&:hover': { color: "#fff" }, fontSize: "21px"
                                        }}
                                        onClick={() => {
                                            set_Open(_open === index ? -1 : index);

                                        }}>
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
                                            {text.sub.filter(item => item.roles.filter(role => userInfo?.roles.includes(role)).length > 0 ).map((sub, index: number) => (
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
                                                            display: "flex",
                                                            alignItems: "baseline",
                                                            fontSize: 20,
                                                            padding: '17px 12px 17px 48px',
                                                            paddingLeft: "14px",
                                                            marginLeft: "16px",
                                                            color: `${(openSub === index && textSubMenu === sub.name || location.pathname.includes(sub.url)) ? '#fff' : '#888ea8'}`,
                                                            '&:hover': {
                                                                color: "#fff",
                                                            },
                                                            '&:before': {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                padding: '0 5px 0 0',
                                                                content: '"- "'
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
                    </Drawer>
                    <MainAppBar drawerwidth={drawerwidth} open={open}>
                        {/* <DrawerHeader /> */}
                        {<Outlet />}
                    </MainAppBar>
                </Box>
            </ThemeProvider>
        );
    }