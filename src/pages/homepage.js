import React from "react";
import {
    CardMedia,
    Grid,
} from '@mui/material'
import '../images/home.jpg'
import '../App.css';
import Slagon from '../components/slagon'

const home = () => {
    return (
        <Grid container direction={'column'} className="ana">
        <Grid>
            <CardMedia
            component="img"
            image={require('../images/home.jpg')}
            alt="home"
            />
        </Grid>
            <Slagon />
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            <Grid sx={{height: 300}}>asasaa</Grid>
            
        </Grid>
    )

}

export default home;