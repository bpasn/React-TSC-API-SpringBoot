import { Box } from '@mui/material'
import React from 'react'

type Props = {
    width?: string,
    height?: string
}

const SideBoxSpacing = ({
    width = "15px",
    height = "15px"
}: Props) => {
    return (
        <Box sx={{
            width,
            height
        }} />
    )
}

export default SideBoxSpacing