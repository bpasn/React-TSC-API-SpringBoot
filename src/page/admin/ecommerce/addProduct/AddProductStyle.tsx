import { Grid, Theme, Typography, styled } from "@mui/material";
import { TypographyProps } from '@mui/material/Typography';

interface VariantProps {
    variant: 'danger' | 'primary' | 'warning' | 'secondary' | 'success' | 'info' | 'dark'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> , VariantProps {
    // variant: ButtonVariantProps
}
export const PageHeader = styled('div')({
    '& div > ::before': {
        display: "table",
        content: '" "',
        lineHeight: 0
    },
})

export const PageTitle = styled('div')({
    float: "left",
    marginBottom: "35px",
    marginTop: "35px"
})

export const PageTitleH3 = styled('h3')({
    margin: '0 0 10px',
    fontSize: '20px',
    color: '#1f212d',
    fontWeight: "600"
})

export const Crumbs = styled('div')({
    '& CroubsUl': {
        display: "inline-flex",
        padding: "8px",
        backgroundColor: "transparent",
    },
})

export const CrumbsUl = styled('ul')({
    display: "flex",
    fontSize: '1.2rem',
    FlexWrap: 'wrap',
    flexWrap: "wrap",
    // padding: "0.75rem 1rem",
    marginBottom: "1rem",
    listStyle: "none",
    backgroundColor: "#e9ecef",
    borderRadius: "0.25rem",
    // '& li > a:first-of-type': {
    //     color:"red"
    // },
    // '& i': {
    //     speak: 'none;',
    //     fontStyle: 'normal',
    //     display: 'inline-block',
    //     fontWeight: 'normal',
    //     fontVariant: 'normal',
    //     textTransform: 'none',
    //     lineHeight: 1,
    //     webkitFontSmoothing: 'antialiased'
    // },
    '& li > i': {
        padding: "0 5px"
    },
    '& li:not(:first-of-type):before': {
        // fontFamily: 'FontAwesome !improtant',
        fontWeight: '400',
        fontStyle: 'normal !improtant',
        webkitFontSmoothing: 'antialiased',
        content: '">"',
        display: 'inline-block',
        paddingRight: "0.5rem",
        paddingLeft: '0.5rem',
        vericalAlign: 'middle',
    },

    // '& li > a, i': {
    //     color: '#555',
    //     textDecoration: "none"
    // },

})
export const CrumbsLi = styled('li')({

})

export const CrumbsA = styled('a')({
    color: '#555',
    '& :not(:first-of-type)': {
        color: "green",
    }

})

export const SelectCuttom = styled('select')({
    margin: 0,
    fontFamily: 'inherit',
    display: "inline-block",
    width: "100%",
    height: "calc(2.25rem + 14px)",
    verticalAlign: "middle",
    background: 'url(https://designreset.com/preview-equation/default/assets/img/arrow-down.png) right 0.75rem center no-repeat #fff',
    backgroundSize: '13px 14px',
    WebkitAppearance: "none",
    appearance: 'none',
    padding: '.375rem .75rem',
    fontWeight: 400,
    lineHeight: '1.5',
    borderRadius: "2.25rem",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    color: "#495057",
    border: "1px solid #ced4da",
    '@media(prefers-reduced-motion: reduce)': {
        transition: "none"
    },
    '& option': {
        fontWeight: 'normal',
        display: 'block',
        whiteSpace: 'nowrap',
        minHeight: '1.2em',
        padding: '0px 2px 1px'
    },
    '&:hover': {
        backgroundColor: "#fff",
        color: '#3232b7',
        boxShadow: '0px 5px 20px 0 rgba(0, 0, 0, 0.2)',
        willChange: 'opacity, transform',
        transition: 'all 0.3s ease-out',

        border: '1px solid #ced4da !improtant',
        webkitTransition: 'all 0.3s ease-out',
    },
})

export const ButtonCustom = styled('button')({
    color: "#fff",
    backgroundColor: "#3232b7",
    borderColor: "#3232b7",
    borderRadius: "30px",
    boxShadow: "0px 5px 20px 0 rgba(0, 0, 0, 0.2)",
    willChange: "opacity transform",
    transition: "all 0.3s ease-out",
    WebkitTransition: "all .3s ease-out",
    padding: ".4375rem 1.25rem",
    textShadow: "none",
    fontSize: "14px",
    fontWeight: 400,
    whiteSpace: "normal",
    wordWrap: "break-word",
    touchAction: "manipulation",
    verticalAlign: "middle",
    userSelect: "none",
    lineHeight: 1.5,
    cursor:"pointer"

})

export const ButtonCustom2 = styled('button', {
})<ButtonProps>(({ theme,variant }) => ({
    color: "#fff",
    cursor:"pointer",
    backgroundColor: varianColor({variant}),
    borderColor: varianColor({variant}),
    borderRadius: "30px",
    boxShadow: "0px 5px 20px 0 rgba(0, 0, 0, 0.2)",
    willChange: "opacity transform",
    transition: "all 0.3s ease-out",
    WebkitTransition: "all .3s ease-out",
    padding: ".4375rem 1.25rem",
    textShadow: "none",
    fontSize: "14px",
    fontWeight: 400,
    whiteSpace: "normal",
    wordWrap: "break-word",
    touchAction: "manipulation",
    verticalAlign: "middle",
    userSelect: "none",
    lineHeight: 1.5
}))

export const TypographyCustom = styled(Typography, {
})<TypographyProps>(({ theme,variant }) => ({
    color: "#fff",
    
}))

export const FormGroup = styled('div')({
    display: 'block',
    width: '100%',
    height: 'calc(1.5em + .75rem + 10px)',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
})

export const InputCustom = styled('input')({
    display: 'block',
    width: '100%',
    height: 'calc(1.5em + .75rem + 10px)',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '30px',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    '&:hover': {
        backgroundColor: "#fff",
        color: '#3232b7',
        boxShadow: '0px 5px 20px 0 rgba(0, 0, 0, 0.2)',
        willChange: 'opacity, transform',
        transition: 'all 0.3s ease-out',

        border: '1px solid #ced4da !improtant',
        webkitTransition: 'all 0.3s ease-out',
    },
    '&::placeholder': {
        fontSize: "14px"
    }
})

export const TextAreaCustom = styled('textarea')({
    display: 'block',
    width: '100%',
    // height: 'calc(1.5em + .75rem + 10px)',
    padding: '10px .75rem',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '30px',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    '&:hover': {
        backgroundColor: "#fff",
        color: '#3232b7',
        boxShadow: '0px 5px 20px 0 rgba(0, 0, 0, 0.2)',
        willChange: 'opacity, transform',
        transition: 'all 0.3s ease-out',
        webkitTransition: 'all 0.3s ease-out',
    }

})

export const FromGroupGrid = styled(Grid)({
    marginBottom: "2rem"
})

export const BoxCheckBoxCustom = styled("div")({
    position: "relative",
    display: "block",
    minHeight: "1.5rem",
    paddingLeft: "1.5rem"
})
export const CheckBoxCustom = styled("input")({
    boxSizing: "border-box",
    padding: 0,
    cursor: "pointer",
    position: "absolute",
    // zIndex:-1,
    opacity: 0
})

export const CheckBoxLable = styled('label')({
    fontSize: "16px",
    color: "#3b3f5c",

    '&:before': {
        borderRadius: ".25rem",
        backgroundColor: "#dee2e6",
        border: "none",
        position: "absolute",
        top: "0.25rem",
        left: "-1.5rem",
        display: "block",
        width: '1rem',
        height: '1rem',
        pointerEvents: "none",
        content: '""',
    },
    '&:after': {
        position: "absolute",
        top: "0.25rem",
        left: "-1.5rem",
        display: "block",
        width: '1rem',
        height: '1rem',
        content: '""',
        background: "no-repeat 50%/50% 50%"
    },
    '@media (prefers-reduced-motion: reduce)::before': {
        transition: "none"
    }

})

export const InputFileCustom = styled('input')({
    '&::file-selector-button': {
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: "#ced4da",
        padding: '0.5em',
        border: '#ced4da',
        borderRadius: '3px',

    }

})

const varianColor = (variant:VariantProps):string => {
    switch (variant.variant) {
        case "primary":
            return "#3232b7";
        case "secondary":
            return "#ced4da";
        case "success":
            return "#00d1c1";
        case "danger":
            return "#f8538d";
        case "warning":
            return "#f58b22";
        case "dark":
            return "#000";
        default:
            return "#3232b7"
    }
}