import { Box, Divider,  List, ListItem, ListItemButton, ListItemText, Theme, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

interface ToolbarHeaderProps {
    theme?: Theme,
    active:string,
    item:string
}
export const drawer = (navItem: string[]) => (
    <Box onClick={() => { }} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            MUI
        </Typography>
        <Divider />
        <List>
            {navItem.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
);

export const ToolbarCustom = styled(Toolbar)({
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    boxSizing: "border-box"
})

export const ToolBarBox = styled(Box)({
    display: "flex",
    flexWrap: "nowrap",
    flex: "1 0 67%",
    alignItems: "center"
})

export const TabLinkHeader = styled(Box)({
    display: "inline-flex", 
    flexWrap: "wrap",
    padding: '0.1em 0',
})
export const TabLinkHeaderList = styled(Link)<ToolbarHeaderProps>(({
    active,
    item
}) => {
    return ({
        backgroundImage: active.toLowerCase() === item.toLowerCase() ? 'linear-gradient(currentColor,currentColor)' :'',
        backgroundRepeat: active.toLowerCase() === item.toLowerCase() ? 'repeat-x' : '',
        backgroundSize: active.toLowerCase() === item.toLowerCase() ? '1px 1px' : '',
        backgroundPosition: active.toLowerCase() === item.toLowerCase() ? '0 calc(100% - 0.1em)' :'',
        textDecoration:'none',
        marginLeft: "1.4vw",
        cursor: "pointer",
        color: "hsl(0deg 0.61% 3.63%)",
    })
})
export const ListItemDesktop = styled(Box)({})



export const HeaderSite = styled(Box)({
    width: "34%",
    textAlign: "center",
    flex: "1 1 34% ",
    
})

export const HeaderSiteTitle = styled(Box)({
    fontWeight: 500,
        fontStyle: 'normal',
        letterSpacing: '0em',
        textTransform: 'none',
        lineHeight: '1.4em',
        fontSize: "calc(1.2vw + 1rem);",
})

export const HeaderIcon = styled(Box)(({ theme }) => {
    return ({
        display: "flex",
        justifyContent: "flex-end"
    })
})

export const HeaderIconBox = styled(Box)({
    flexGrow: 0,
    flexShrink: 1,
    display: "inline-flex",
    alignItems: 'center',
})
export const HeaderIconBoxSocial = styled(Box)({
    justifyContent: "flex-end",
})
export const HeaderIconBoxCart = styled(Box)({
    margin: "0 0 0 3vw"
})


export const NavMobile = styled('nav')({

})

// (({theme}) => {
//     const theme = useTheme();
//     const matches = useMediaQuery(theme.breakpoints.up('sm'));
//     console.log(matches)
//     return ({
//         width: { sm: "16%", md: "33%" },
//         display: "flex",
//         justifyContent: "flex-end"
//     })
// })