import React from "react";
import {
    CardMedia,
    Grid,
    Typography
} from '@mui/material'
import '../App.css';
import HomeCard from '../components/homepagecard';
import Mison from '../components/mison';

const home = () => {
    return (
        <Grid container direction={'row'} className="ana">
        <Grid item>
            <CardMedia
            component="img"
            image={require('../images/1.jpg')}
            alt="home"
            />
        </Grid>
        <Grid item>
            <CardMedia
            component="img"
            image={require('../images/4.jpg')}
            alt="home"
            sx={{
                '@media (max-width: 1000px)': {
                  width: '200px',
                },
              }}
            />
        </Grid>
        <Grid item>
            <CardMedia
            component="img"
            image={require('../images/8.jpg')}
            alt="home"
            sx={{
                '@media (max-width: 1000px)': {
                  width:'200px',
                },
              }}
            />
        </Grid>
        <Grid item>
            <CardMedia
            component="img"
            image={require('../images/11.jpg')}
            alt="home"
            />
        </Grid>
        <Grid item>
            <CardMedia
            component="img"
            image={require('../images/5.jpg')}
            alt="home"
            />
        </Grid>
        <Grid item>
            <CardMedia
            component="img"
            image={require('../images/6.jpg')}
            alt="home"
            />
        </Grid>
        <Grid item>
            <CardMedia
            component="img"
            image={require('../images/9.jpg')}
            alt="home"
            />
        </Grid>
        <Grid item>
            <CardMedia
            component="img"
            image={require('../images/12.jpg')}
            alt="home"
            sx={{
                '@media (max-width: 1000px)': {
                  display: 'none',
                },
              }}
            />
        </Grid>
        <HomeCard />
        <Mison />
        </Grid>







        
    )

}

export default home;