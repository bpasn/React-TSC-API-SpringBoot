import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';

type Props = {}
const Exception = (props: Props) => {
    const location = useLocation()
    console.log(location.state)
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h1">
                            {location.state?.status}
                        </Typography>
                        <Typography variant="h2">
                            {location.state?.message.toUpperCase()}
                        </Typography>
                        <Button sx={{mt:5}} variant="contained" >
                            <Link to={"/"}>
                                Back Home
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                            alt=""
                            width={500} height={250}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Exception