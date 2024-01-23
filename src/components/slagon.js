import React from "react";
import {
    CardMedia,
    Grid,
    Typography,
} from '@mui/material'
import Box from '@mui/material/Box';
import '../images/home.jpg'
import '../App.css';

const slagon = () => {
    return (
        <Grid container>
            <Grid xs={12} lg='12'>
                <CardMedia
        component="img"
        image={require('../images/co.png')}
        alt="home"
        />
            </Grid>
            <Grid lg='12'>
                <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center" padding={'20px'} >
                    <Grid item lg='4'>
                        <Typography className="slagon-text">
                        Yılların verdiği tecrübe ve kalite ile emin ellerdesiniz. Uzman ekibimiz ile geliştirdiğmiz projelerde her zaman en yeni sistemleri
                        kullanarak bu sektörde göz önünde olmayı başardık. TechSlot şirketi kurulduğundan bu yana müşterilerine çözüm odaklı olarak
                        yeni nesil yazılım ve danışmanlık hizmeti vermekte.
                        </Typography>
                    </Grid>
                        <Grid item lg='4' textAlign={'center'} className="slogan-center-box">
                            <Typography className="slogan-center-text">
                            Çözümler için oluşturulmuş kodlamalar
                            </Typography>
                        </Grid>
                    <Grid  item lg='4'>
                        <Typography className="slagon-text" paddingLeft={'26px'}>
                            Yılların verdiği tecrübe ve kalite ile emin ellerdesiniz. Uzman ekibimiz ile geliştirdiğmiz projelerde her zaman en yeni sistemleri
                            kullanarak bu sektörde göz önünde olmayı başardık. TechSlot şirketi kurulduğundan bu yana müşterilerine çözüm odaklı olarak
                            yeni nesil yazılım ve danışmanlık hizmeti vermekte.
                            </Typography>
                    </Grid>
                </Grid>
                </Grid>
                        <Grid xs={12} lg='12'>
                            <CardMedia
                                component="img"
                                image={require('../images/co.png')}
                                alt="home"
                            />
                    </Grid>
    </Grid>
    
    )

}

export default slagon;

