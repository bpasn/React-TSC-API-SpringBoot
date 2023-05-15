import { Card, CardContent, CardMedia, styled } from "@mui/material"

export const CardCustom = styled(Card)({
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "red"
    }
})
export const CardContentCustom = styled(CardContent)({
    cursor: "pointer",
    "&:hover": {
        transitionDelay: ['5']
    }
})
export const CardMediaCustom = styled(CardMedia)({
    cursor: "pointer",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "div > img": {
        objectFit: "cover",
        transition: "transform 1.8s",
    },
    "&:hover div > img": {
        transform: "scale(2.8) translateY(70px)",
        opacity: 0.6,

    },
    "&:hover div > div > a": {
        display: "block"
    },
    "div > a": {
        textDecoration:"none",
        padding: "15px",
        backgroundColor: "#1d1d1d",
        color: "white",
        fontSize: "14px",
        border: "none",
        display: "none",
        cursor:"pointer"
    },


})