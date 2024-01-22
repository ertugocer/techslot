import React from "react";
import {
    CardMedia,
    Grid,
    Typography,
    Box
} from '@mui/material'
import '../images/home.jpg'
import '../App.css';
import Slagon from '../components/slagon'
import HomeCard from '../components/homepagecard'
import Varyasyon from '../components/varyasyon'

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
            <Slagon />
            </Grid>
            <HomeCard/>
            <div dir="rtl">
            <HomeCard/></div>
            <HomeCard/>
            <div dir="rtl">
            <HomeCard/></div>
            <Grid justifyContent={"center"}>
            <Box alignItems={"center"} justifyContent={"center"} textAlign={"center"} height={"500px"} sx={{paddingTop:"80px"}}>
            <Typography fontSize={"49px"} fontFamily={"Italiana"} fontStyle={"revert-layer"}>
                Neden bizi tercih etmelisiniz
            </Typography>
            </Box></Grid>
            <Varyasyon />
        </Grid>
        
    )

}

export default home;