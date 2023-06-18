import { styled } from "@mui/material";

export const MainAppBar = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
    drawerwidth?:number;
}>(({ theme, open,drawerwidth }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    paddingRight:"0",
    marginLeft: `-${drawerwidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
    // [theme.breakpoints.down(769)]:{
    //     display: "none",
    //     ...(open && {
    //         display: "none",
    //         transition: theme.transitions.create('margin', {
    //             easing: theme.transitions.easing.easeOut,
    //             duration: theme.transitions.duration.enteringScreen,
    //         }),
    //         marginLeft: `-${drawerwidth}px`,
    //     }),
    // }
}));