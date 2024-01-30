import React from 'react';
import { Button, CardMedia, Grid, Typography } from '@mui/material';
import '../App.css';

export default function homepagecard(props) {
  return (
    <Grid container
      sx={{
      maxWidth:'1600px',
      maxWidt:'700px',
      border: '2px solid black',
      borderRadius:'80px',
      margin:'40px',
      padding:'20px',
        '@media (max-width: 1000px)': {
          fontSize:'20px',
        },
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
            <Button sx={{
              background:'black',
              color:'white',
              fontSize:'18px',
              width:'250px',
              height:'70px',
              margin:'20px 0px 20px 0px'
            }}>
              DAHA FAZLA Bilgi İÇİn
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

