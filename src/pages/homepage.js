import React from "react";
import {
    CardMedia,
    Grid,
    Typography
} from '@mui/material'
import '../images/home.jpg'
import '../App.css';
import Slagon from '../components/slagon'
import HomeCard from '../components/homepagecard'
import Varyasyon from '../components/varyasyon'
import Mison from '../components/mison'

const home = () => {
    return (
        <Grid container direction={'column'} className="ana">
        <Grid>
            <CardMedia
            component="img"
            image={require('../images/home.jpg')}
            alt="home"
            sx={{
                '@media (max-width: 1000px)': {
                  display: 'none',
                },
              }}
            />
        </Grid>
        <Grid>
            <Slagon />
            </Grid>
            <HomeCard/>
            <div dir="rtl">
            <HomeCard/></div>
            <HomeCard/>
            <div dir="rtl">
            <HomeCard/></div>
            <Grid container direction={'column'}alignItems={"center"} justifyContent={"center"} sx={{paddingTop:"250px"}}>
            <Grid item  textAlign={"center"} height={"500px"} >
            <Typography fontSize={"49px"} fontFamily={'cursive'} fontStyle={"revert-layer"}>
                Neden bizi tercih etmelisiniz
            </Typography>
            </Grid></Grid>
            <Varyasyon />
            <Mison />
        </Grid>
        
    )

}

export default home;