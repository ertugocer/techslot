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
                       <h4>"Yazılım Gücüyle Geleceği Yeniden Tanımlayın."</h4>
                        Yılların birikimiyle edindiğimiz tecrübe ve yüksek kalitemizle, projelerinizi emin ellerde geliştiriyoruz. Uzman ekibimiz, en yeni teknolojileri kullanarak, sektörde daima öncü ve güvenilir bir isim olmamıza katkı sağlıyor. TechSlot olarak, şirketimiz kurulduğundan beri müşterilerimize çözüm odaklı yaklaşımlarımız ve yeni nesil yazılım ve danışmanlık hizmetlerimizle değer katmaktayız.
                        </Typography>
                    </Grid>
                        <Grid item lg='4' textAlign={'center'} className="slogan-center-box">
                            <Typography className="slogan-center-text">
                            Dijital Harmoni: Yazılımın Yeni Akoru
                            </Typography>
                        </Grid>
                    <Grid  item lg='4'>
                        <Typography className="slagon-text" paddingLeft={'26px'}>
                        <h4>"Teknolojide Öncü: Müşteri Memnuniyeti ve İnovasyonu Bir Arada Sunuyoruz!"</h4>
                        Her bir projemizde, müşteri memnuniyetini ön planda tutuyor ve ihtiyaçlarınıza özel çözümler üretiyoruz. Sektördeki gelişmeleri yakından takip ederek, projelerimizi her zaman en son teknolojilerle buluşturuyor ve müşterilerimize rekabet avantajı sağlıyoruz.

Bizimle çalıştığınızda, deneyimli bir ekibin sağlamış olduğu güven ve kalite ile projelerinizi geliştirmenin ayrıcalığını yaşayacaksınız. TechSlot, geleceğin teknolojilerini bugünden keşfetmeniz için burada."
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

