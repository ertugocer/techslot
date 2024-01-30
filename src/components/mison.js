import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import backgroundImage from '../images/15.png';


const CustomBackgroundGrid = () => {
  return (
    <Grid container  sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      color: 'black',
    }}>
         <Grid item lg="7">
          <Typography textAlign={'center'} fontSize={'50px'} padding={'40px'}>Neler Yapıyoruz?</Typography>
          <Typography fontSize={'27px'} sx={{
            wordSpacing:'10px',
            letterSpacing:'0px',
            padding:'40px',
            fontWeight:'600',
            wordBreak:'break-word',
            textAlign:'center'
          }}>ERP CRM WEB SİTESİ </Typography>
         </Grid>
         <Grid item lg="5">
         <CardMedia
            component="img"
            image={require('../images/14.png')}
            alt="home"
            sx={{
                '@media (max-width: 1000px)': {
                  width:'200px',
                },
              }}
            />
         </Grid>
    </Grid>
  );
};

export default CustomBackgroundGrid;
