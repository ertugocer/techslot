import { Button, Divider, Grid, Typography } from '@mui/material';
import React, { Component } from 'react';
import CardMedia from '@mui/material/CardMedia'
import '../classes/Varyasyon.css'

class varyasyon extends Component {
    render() {
        return (
          <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor:'black'
          }}
        >
           <Grid item lg="3.3" color="white" margin={'25px'}>
        <CardMedia
          component="img"
          image={require('../images/17.png')}
          alt="home"
          className='ImageSetting'
        />
       <Typography className='VaryasyonHead' >Üretim Takip Yazılımı</Typography>
       <Typography className='VaryasyonText'>İşletmeniz İçin üretim, iş bölümü, depo & stok yönetimi ve daha fazlasının yönetimi artık tek panelde</Typography>
           </Grid>
           <Grid item lg="3.3" color="white" margin={'25px'}>
        <CardMedia
          component="img"
          image={require('../images/18.png')}
          alt="home"
          className='ImageSetting'
        />
       <Typography className='VaryasyonHead'>İşletmeniz İçin Özel Yazılım</Typography>
       <Typography className='VaryasyonText'>İşletmenizin gereksinimlerini tam olarak karşılamak üzere tasarlanacak olan yazılımlar ile çözüm sunuyoruz</Typography>
           </Grid>
           <Grid item lg="3.3" color="white" margin={'25px'}>
        <CardMedia
          component="img"
          image={require('../images/19.png')}
          alt="home"
          className='ImageSetting'
        />
       <Typography className='VaryasyonHead'>Web Sitesi Geliştirme</Typography>
       <Typography className='VaryasyonText'> İşletmenizin potansiyelini yükseltmek ve rekabette öne geçmek için  web sitesi çözümleri artık sizinle.</Typography>
           </Grid>
            <Grid item lg="2" margin={'20px'} marginBottom={'120px'}>
                <Button className='ButtonSettings'>
                    KEŞFET
                </Button>
            </Grid>
          </Grid>
        );
    }
}

export default varyasyon;
