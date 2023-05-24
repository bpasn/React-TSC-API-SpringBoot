import { Box } from "@mui/material";
import styled from "@emotion/styled/macro";

export const LabelForm = styled("label")({
    display: "inline-block",
    marginBottom: "0.5rem"
})
export const InputField = styled("input")({
    display: "block",
    width: "100%",
    height: "calc(1.5em + 0.75rem +2px",
    padding: '0.375rem 0.75rem',
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: "1.5",
    color: "#495057",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",
    border: "1px solid #ced4da",
    borderRaduis: "0.25rem",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out"
})
export const BoxAuthBackground = styled(Box)({
    backgroundImage: "linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    display: "flex",
    alignItems: "center",
    fontFamily:'"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    paddingTop: "40px",
    paddingBottom: "40px",
    height: "100%",
    overflowX: 'hidden',
    overflowY: 'auto',
    [`${LabelForm}`]: {
        color: "#3b3f5c",
        textTransform: "uppercase",
        fontSize: "13px",
    },
    [`${InputField}`]: {
        position: "relative",
        boxSizing: "border-box",
        height: "auto",
        color: "#4f5163",
        padding: "5px",
        fontSize: "16px",
        border: "none",
        background: "transparent",
        borderBottom: "1px solid #e9ecef",
    },
    [`${InputField}:focus`]: {
        outline: "none"
    }
})

export const FormGroupCustom = styled("form")({
    maxWidth: "410px",
    padding: "35px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 10px 60px 0 rgba(29,29,31,.09)",
    width: "100%",
    margin: "auto",
    '& img': {
        verticalAlign: "middle",
        borderStyle: "none",
        textAlign: "center"
    }
})

export const SocialBox = styled(Box)({
    textAlign: "center",
    '& h5': {
        color: "#6156ce",
        marginBottom: "1.5rem",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.2,
        marginTop: 0,
    }
})
interface buttonProp {
    social?: string;
}
export const ButtonSocial = styled('button')<buttonProp>((prop) => ({
    padding: "6px",
    cursor: "pointer",
    border: `1px solid ${socialColor(prop.social as string)}`,
    borderRadius: "50%",
    width: "40px",
    height: "auto",
    color: socialColor(prop.social as string),
    backgroundColor: "transparent",
    boxShadow: "none",
    textShadow: "none",
    fontSize: "14px",
    fontWeight: 400,
    withSpace: "normal",
    touchAction: "manipulation",
    willChange: "opacity,transform",
    WebkitTransition: "all .3s ease-out",
    marginBottom: "1.5rem",
    marginRight: "0.5rem",
    ":hover": {
        color: "#fff",
        backgroundColor: socialColor(prop.social as string)
    },
    '& @media (prefers-reduced-motion: reduce)': {
        transition: "none",
    }
}))

export const IConSocial = styled("i")({
    fontFamily: "FontAwesome",
    speak: "mone",
    fontStyle: "normal",
    display: "inline-block",
    fontWeight: "normal",
    fontVariant: "normal",
    textTransform: "none",
    lineHeight: 1,
    WebkitFontSmoothing: "antialiased",
    fontSize: "16px",
    padding: '5px'
})

export const Line = styled(Box)<{ side: string }>((prop) => ({
    [`${prop.side}`]: "0",
    borderTop: '1px solid #07e0c4',
    position: "absolute",
    top: "10px",
    width: "34%"
}))
//[`${Line}`]: { border: "1px solid purple"} styled parent styled
export const Division = styled(Box)({
    float: "none",
    margin: "0 auto 18px",
    overflow: "hidden",
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    color: "#e95f2b",
    '& span': {
        fontSize: "13px"
    }

})

export const FormControlTextFied = styled(Box)({

})


const socialColor = (social: string) => {
    switch (social) {
        case "facebook":
            return "#1a73e9";
        case "twitter":
            return "#00b1f4";
        case "google":
            return "#e7515a"
    }
}

export const ButtonForm = styled('button')({
    color: '#fff!important',
    backgroundImage: 'linear-gradient(to right,#243949 0,#517fa4 100%)',
    backgroundColor: '#517fa4',
    padding: '7px 20px',
    textShadow: 'none',
    fontSize: '14px',
    fontWeight: 400,
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    touchAction: 'manipulation',
    cursor: 'pointer',
    boxShadow: '0 5px 20px 0 rgba(0,0,0,.1)',
    willChange: 'opacity,transform',
    transition: 'all .3s ease-out',
    webkitTransition: 'all .3s ease-out',
    textAlign:"center",
    width:"100%",
    borderRadius:"1.875rem",
    border:"none"

})