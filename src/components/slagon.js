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
        <Grid xs={12}><CardMedia
    component="img"
    image={require('../images/co.png')}
    alt="home"
    />
    </Grid>
        <Grid xs={12}>
            <Grid container>
                <Grid item xs className="kim">
                    <Typography className="yazı2">
                    Yılların verdiği tecrübe ve kalite ile emin ellerdesiniz. Uzman ekibimiz ile geliştirdiğmiz projelerde her zaman en yeni sistemleri
                    kullanarak bu sektörde göz önünde olmayı başardık. TechSlot şirketi kurulduğundan bu yana müşterilerine çözüm odaklı olarak
                    yeni nesil yazılım ve danışmanlık hizmeti vermekte.
                    </Typography>
</Grid>
                <Grid item xs className="cozum">
                    <Typography className="yazı1">
                    Çözümler için oluşturulmuş kodlamalar
                    </Typography>
                </Grid>
                <Grid item xs className="kim">
                <Typography className="yazı2">
                Yılların verdiği tecrübe ve kalite ile emin ellerdesiniz. Uzman ekibimiz ile geliştirdiğmiz projelerde her zaman en yeni sistemleri
                    kullanarak bu sektörde göz önünde olmayı başardık. TechSlot şirketi kurulduğundan bu yana müşterilerine çözüm odaklı olarak
                    yeni nesil yazılım ve danışmanlık hizmeti vermekte.
                    </Typography>
                    </Grid>
            </Grid>
        </Grid>
        <Grid xs={12}>
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

