import { Box, styled } from "@mui/material";

export const ImageTab = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "180px",
    gap: '10px 0',
    '& img': {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
})