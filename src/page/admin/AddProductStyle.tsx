import { Box, styled } from "@mui/material";

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
    '& :not(:first-of-type)':{
        color:"green",
    }
    
})
