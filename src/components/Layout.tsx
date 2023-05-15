import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponent from './header/HeaderComponent'
import { Box, Typography } from '@mui/material'

type Props = {}

const Layout = (props: Props) => {
    return (
        <div className='grid-container' 
        // sx={{
        //     gridTemplateRows: { sm: "15rem 1fr 5rem", xs: "8rem 1fr 5rem" }
        // }}
        >
            <HeaderComponent />
            <Outlet />
            {/* <Box component={"main"} sx={{
                padding: "4vw"
            }}>
                
            </Box> */}
            <footer>
                <Box >
                    <Typography variant='h2'>
                        SS — 22 Lookbook
                    </Typography>
                </Box>
            </footer>
        </div>
    )
}

export default Layout