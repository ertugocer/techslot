import { Grid, CardMedia, Typography } from '@mui/material';
import React, { Component } from 'react';

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
                        sx={{
                            height:'600px',
                            '@media (max-width: 500px)': {
                            width:'200px',
                            },
                        }}
                    />
                </Grid>
                <Grid lg="6" color={'white'}>
                    <Typography>
                        Şirket Profili
                    </Typography>
                    <Typography>
                        Yılların birikimiyle edindiğimiz tecrübe ve yüksek kalitemizle, projelerinizi emin ellerde geliştiriyoruz. Uzman ekibimiz, en yeni teknolojileri kullanarak, sektörde daima öncü ve güvenilir bir isim olmamıza katkı sağlıyor. TechSlot olarak, şirketimiz kurulduğundan beri müşterilerimize çözüm odaklı yaklaşımlarımız ve yeni nesil yazılım ve danışmanlık hizmetlerimizle değer katmaktayız.
                    </Typography>
                </Grid>
                <Grid lg="12" color={'white'} textAlign={'center'} backgroundColor="#6B50D4" padding={'60px'}>
                    <Typography>
                        İletişim Bİlgileri
                    </Typography>
                    <Typography>
                        Balıkhisar Mahallesi Balıkhisar Köyiçi Küme Evleri NO:741 Akyurt/Ankara
                    </Typography>
                    <Typography>
                        Tel: 0507 790 3550
                    </Typography>
                    <Typography>Copyright © 2018 - TechSlot.tech Sitede Kullanılan Tüm Görseller techslot.tech'a aittir.İzinsiz Kullanılamaz.</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default company;