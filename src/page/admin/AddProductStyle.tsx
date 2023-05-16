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
    }
})

export const CrumbsUl = styled('ul')({
    display:"flex",
    ':-ms-flex-wrap':'wrap',
    flexWrap:"wrap",
    padding:"0.75rem 1rem",
    marginBottom:"1rem",
    listStyle:"none",
    backgroundColor:"#e9ecef",
    borderRadius:"0.25rem",
    '& li':{
        fontSixe:"12px"
    },
    '& li > a':{
        color:'#555'
    }
})