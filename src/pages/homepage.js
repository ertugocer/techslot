import React from "react";
import {
    Grid
} from '@mui/material'
import '../App.css';
import HomeCard from '../components/homepagecard';
import Mison from '../components/mison';
import Slagon from '../components/slagon';
import Page from '../components/varyasyon'
import İnnovatin from '../components/innovation';
import Media from '../components/media';
import Company from '../components/company';
import Onepage from '../components/onepage';

const home = () => {
    return (
        <Grid container direction={'row'} className="ana">
        <Onepage />
        <HomeCard />
        <Mison />
        <Slagon />
        <Page />
        <İnnovatin />
        <Media />
        <Company />
        </Grid>







        
    )

}

export default home;