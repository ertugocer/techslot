import { Grid, CardMedia, Typography, Link } from '@mui/material';
import React, { Component } from 'react';
import '../classes/Company.css'

class company extends Component {
    render() {
        return (
            <Grid container justifyContent="center"
            alignItems="center" sx={{
                backgroundColor:'black'
            }}>
                <Grid lg="6">
                    <CardMedia
                        component="img"
                        image={require('../images/23.png')}
                        alt="home"
                        className='CompanyImage'
                        />
                </Grid>
                <Grid xs="10" lg="6" color={'white'}>
                    <Typography className='CompanyHead'>
                        Şirket Profili
                    </Typography>
                    <Typography className='CompanyText'>
                        Yılların birikimiyle edindiğimiz tecrübe ve yüksek kalitemizle, projelerinizi emin ellerde geliştiriyoruz. Uzman ekibimiz, en yeni teknolojileri kullanarak, sektörde daima öncü ve güvenilir bir isim olmamıza katkı sağlıyor. TechSlot olarak, şirketimiz kurulduğundan bu yana müşterilerimize çözüm odaklı yaklaşımlarımız ve yeni nesil yazılım ve danışmanlık hizmetlerimizle değer katmaktayız.
                    </Typography>
                </Grid>
                <Grid lg="12" color={'white'} textAlign={'center'} backgroundColor="#1976d2" padding={'60px'}>
                    <Typography paddingBottom={'12px'}>
                        İletişim Bilgileri
                    </Typography>
                    <Link href="tel:05077903550" sx={{
                        textDecoration:'none',
                        color:'inherit',
                    }}>
                         0507 790 3550
                    </Link>
                    <Typography paddingTop={'10px'}>Copyright © 2018 - TechSlot.tech Sitede Kullanılan Tüm Yazılar techslot.tech'a aittir.İzinsiz Kullanılamaz.</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default company;