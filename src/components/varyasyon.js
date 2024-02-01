import { Button, Grid, Typography } from '@mui/material';
import React, { Component } from 'react';
import CardMedia from '@mui/material/CardMedia';

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
          sx={{
              marginTop:'135px',
              marginLeft:'15px',
              marginBottom:'15px',
              height:'160px',
              '@media (max-width: 1000px)': {
                display: 'none',
              },
            }}
        />
       <Typography fontSize={'48px'} sx={{
            letterSpacing:'0px',
            lineHeight:'50px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
          }}>Üretim Takip Yazılımı</Typography>
       <Typography fontSize={'24px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            padding:'15px'
          }}>İşletmeniz İçin üretim, iş bölümü, depo & stok yönetimi ve daha fazlasının yönetimi artık tek panelde</Typography>
           </Grid>
           <Grid item lg="3.3" color="white" margin={'25px'}>
        <CardMedia
          component="img"
          image={require('../images/18.png')}
          alt="home"
          sx={{
              marginTop:'135px',
              marginLeft:'15px',
              marginBottom:'18px',
              height:'160px',
              '@media (max-width: 1000px)': {
                display: 'none',
              },
            }}
        />
       <Typography fontSize={'48px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            lineHeight:'50px'
          }}>İsteğinize Göre Yazılım</Typography>
       <Typography fontSize={'24px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            padding:'15px'
          }}>İşletmeniz İçin üretim, iş bölümü, depo & stok yönetimi ve daha fazlasının yönetimi artık tek panelde</Typography>
           </Grid>
           <Grid item lg="3.3" color="white" margin={'25px'}>
        <CardMedia
          component="img"
          image={require('../images/19.png')}
          alt="home"
          sx={{
              marginTop:'135px',
              marginLeft:'15px',
              marginBottom:'18px',
              height:'160px',
              '@media (max-width: 1000px)': {
                display: 'none',
              },
            }}
        />
       <Typography fontSize={'48px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            lineHeight:'50px'
          }}>Web Sitesi Geliştirme</Typography>
       <Typography fontSize={'24px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            padding:'15px'
          }}>İşletmeniz İçin üretim, iş bölümü, depo & stok yönetimi ve daha fazlasının yönetimi artık tek panelde</Typography>
           </Grid>
            <Grid item lg="2" margin={'20px'} marginBottom={'120px'}>
                <Button sx={{
                    color:'#E0E111',
                    border:'1.5px solid #E0E111',
                    borderRadius:'0px',
                    width:'260px',
                    fontSize:'21px',
                    fontWeight:'600',
                    padding:'15px 23px 15px 23px'
                }}>
                    KEŞFET
                </Button>
            </Grid>
          </Grid>
        );
    }
}

export default varyasyon;
