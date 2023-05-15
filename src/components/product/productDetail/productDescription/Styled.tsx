import { Box, Typography, styled } from "@mui/material"

export const TextTitleProduct = styled(Typography)({
    marginBottom: 25,
    fontFamily: "Poppins",
    fontWeight: 500,
    fontStyle: 'normal',
    letterSpacing: '0em',
    textTransform: 'none',
    lineHeight: '1.4em',
    '@media screen and (min-width: 1296px)': {
        fontSize: 'calc(2.8 * 1rem)'
    },
    '@media screen and (min-width: 768px), screen and (max-width: calc(1295px)) and (orientation: landscape)': {
        fontSize: 'calc((2.8 - 1) * 1.2vw + 1rem)'
    }
})

export const Title = styled(Box)({
    fontFamily: 'Poppins',
    fontSize: '3em',
    '@media screen and (min-width: 1296px)': {
        fontSize: 'calc(2 * 1rem)'
    },
    '@media screen and (min-width: 768px), screen and (max-width: calc(1295px)) and (orientation: landscape)': {
        fontSize: 'calc((1.4 - 1) * 1.2vw + 1rem)'
    },
    fontWeight: '300',
    fontStyle: 'normal',
    letterSpacing: '0em',
    textTransform: 'uppercase',
    lineHeight: '1.8em',
    marginBottom: 25
})

export const TextTitle = styled("p")({
    fontFamily: 'monospace,serif',
    fontSize: '2rem',
    marginBottom: 30,
})


export const TextSubtitle = styled("span")({
    marginBottom: 25,
})