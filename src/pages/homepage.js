import React from "react";
import {
    CardMedia,
    Grid,
    Typography
} from '@mui/material'
import '../App.css';
import HomeCard from '../components/homepagecard';
import Mison from '../components/mison';
import Slagon from '../components/slagon';
import Page from '../components/varyasyon'
import İnnovatin from '../components/innovation';
import Media from '../components/media';

const home = () => {
    return (
        <Grid container direction={'row'} className="ana">
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
        <Slagon />
        <Page />
        <İnnovatin />
        <Media />
        </Grid>







        
    )

}

export default home;