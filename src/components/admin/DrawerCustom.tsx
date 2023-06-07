import { styled } from "@mui/material";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import React from "react";

export interface DrawerProps extends MuiDrawerProps {
    open?: boolean;
    drawerwidth?: number;
}

export const DrawerCustom = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'className',
})<DrawerProps>(({ theme, open, drawerwidth }) => {
    return ({
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
        display: open ? "block" : "none",
    })
});