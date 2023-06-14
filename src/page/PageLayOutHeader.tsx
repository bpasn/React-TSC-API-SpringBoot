import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

type Props = {
    title:string;
    children?: string | JSX.Element | JSX.Element[] | React.ReactNode;

}

const PageLayOutHeader = (props: Props) => {
  return (
    <Grid container sx={{
        backgroundColor: "#fff",
        borderRadius: '5px',
        marginBottom: "40px"
      }}>
        <Grid item sm={12} xs={12} md={12} >
          <Box className="statbox widget box box-shadow"
            component={'div'}>
            <Box className="widget-header">
              <Grid container>
                <Grid item sm={12} md={12} xs={12} >
                  <Box sx={{
                    padding: "25px 15px",
                  }}>
                    <Typography sx={{
                      fontFamily: 'Open Sans,"Helvetica Neue",Helvetica,Arial,sans-serif',
                      fontSize: "16px",
                      color: "#000",
                      fontWeight: 600,
                      margin: 0,
                    }} variant="h4" color="initial">{props.title}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {props.children}
          </Box>
        </Grid>
      </Grid>
  )
}

export default PageLayOutHeader