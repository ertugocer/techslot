import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import '../classes/mission.css'

const CustomBackgroundGrid = () => {
  return (
    <Grid container className='FirstGrid'>
         <Grid item lg="7">
          <Typography className='HeadText' >Neler Yapıyoruz?</Typography>
            <Grid container
              justifyContent="center"
              alignItems="center"
              spacing={6}
              className='TextGrid'
              width='640px'
            >
            <Grid item>
               <Typography className='TextOne'>ERP</Typography>
            </Grid>
            <Grid item>
              <Typography className='TextOne'>
                CRM
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='TextOne'>
                Web Sitesi
              </Typography>
            </Grid>
          </Grid>
            <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={8}
              className='TextGrid'
            >
              <Grid item>
                    <Typography paddingLeft={'20px'} className='TextFirst' >E-Ticaret Sitesi  </Typography>
              </Grid>
                <Grid item className='GridTwo'>
                        <Typography className='TextFirst'>
                        Özel Yazılım Geliştirme </Typography>
                </Grid>
          </Grid>
          
         </Grid>
         <Grid item lg="5" className='HeadGrid'>
         {/* Resim için pozisyon ve z-index ekleniyor */}
         <CardMedia
            component="img"
            image={require('../images/14.png')}
            alt="home"
            height={'420px'}
            margin='40px'
            sx={{
              '@media (max-width: 500px)': {
                width:'390px',
              },
              '@media (min-width: 600px)': {
                position: 'initial', // veya position: initial
              },
            }}
          />
            
         </Grid>
         <Grid container>
          <Grid item xs="12" lg="6">
            <Typography className='TextThree'>
              Şirket olarak, müşterilerimize çözüm odaklı yaklaşımla hizmet veriyoruz.
            </Typography>
            </Grid>
            </Grid>
         <Grid lg="12" sx={{
          backgroundColor:'black',
          color:'white'
         }}> 
              <Typography fontSize={'34px'} sx={{
            wordSpacing:'10px',
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            padding:'50px',
            paddingBottom:'20px',
          }}>
                Kullandığımız Teknolojiler
              </Typography>
              <Typography fontSize={'30px'} sx={{
            wordSpacing:'70px',
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            padding:'10px'
          }}>
                React JavaScript NodeJs TyScript
              </Typography>
              <Typography fontSize={'30px'} sx={{
            wordSpacing:'70px',
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            padding:'10px',
            paddingBottom:'50px'
          }}>
                MongooDB MySQL MsSQL
              </Typography>
         </Grid>
    </Grid>
  );
};

export default CustomBackgroundGrid;
