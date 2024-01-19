import React from "react";
import {
    CardMedia,
    Grid,
} from '@mui/material'
import '../images/home.jpg'
import '../App.css';
import Slagon from '../components/slagon'
import HomeCard from '../components/homepagecard'

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
        <Grid>
            <Slagon /></Grid>
            <HomeCard/>
            <div dir="rtl">
            <HomeCard/>></div>
            <HomeCard/>
            <div dir="rtl">
            <HomeCard/>></div>
        </Grid>
    )

}

export default home;