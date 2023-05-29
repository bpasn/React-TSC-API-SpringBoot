import { CircularProgress } from '@mui/material'
import { styled } from '@mui/styles'
import React from 'react'

type Props = {}
const Loading = styled("div")({
    position: "fixed",
    zIndex: '1201',
    height: "2em",
    width: "2em",
    overflow: "show",
    margin: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    '&:before': {
        content: '""',
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(rgba(20,20,20,.8),rgba(0,0,0,.8));',
    },


})
const LoadingPage = (props: Props) => {
    return <Loading><CircularProgress /></Loading>
}

export default LoadingPage