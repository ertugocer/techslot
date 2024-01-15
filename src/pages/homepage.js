import React from "react";
import {
    CardMedia,
    Container,
    Grid,
    Link
} from '@mui/material'
import '../images/home.jpg'
//import Villagehomes from '../Component/Common/Villagehomes';

const home = () => {
    return (
        <a>
        <Grid>
            <CardMedia
            component="img"
            image={require('../images/home.jpg')}
            alt="home"
            />
        </Grid>
        <Container>
            <Grid container >
                <Grid xs={12}>aaa</Grid>
                <Grid xs={12}>aaa
                    <Grid container>
                        <Grid xs>3</Grid>
                        <Grid xs>3</Grid>
                        <Grid xs>3</Grid>
                    </Grid>
                </Grid>
                <Grid xs={12}>aaa</Grid>
            </Grid>
        </Container>
        </a>
    )

}

export default home;