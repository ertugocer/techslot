import React from 'react';
import { Button, CardMedia, Grid, Typography } from '@mui/material';
import '../classes/HomePageCard.css';

export default function homepagecard(props) {
  return (
    <Grid container className='OneGrid'
      sx={{
      
    }}  >
      <Grid item lg={'6'}>
        <Typography fontSize={'90px'} fontFamily={'inherit'} letterSpacing={'0px'} fontWeight={'500'}
        sx={{
          '@media (max-width: 1000px)': {
            fontSize:'38px',
            textAlign:'center'
          },
        }}
        >
          Dijital Harmoni: Yazılımın Yeni Akoru
        </Typography>
      </Grid>
      <Grid lg={'6'}>
        <Grid container>
          <Grid item lg="12">
            <Grid item>
              <CardMedia
              component="img"
              image={require('../images/13.png')}
              alt="home"
              sx={{
                '@media (max-width: 1000px)': {
                  display:'none',
                },
              }}
              />
            </Grid>
          </Grid>
          <Grid item lg="10">
            <Typography fontSize={'20px'} fontWeight={'bolder'}>
            ERP CRM yazlımları ile işletmenize, işinizi kolaylaştıracak, 
            hayattan daha fazla keyif almanızı sağlayacak çözümler sunmak için geliştirdik.
            </Typography>
          </Grid>
          <Grid item lg="12">
            <Button className='Button'>DAHA FAZLA Bilgi İÇİn
              <span style={{
                fontSize:'40px',
                bottom:'40px'
              }}>
              
              </span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

