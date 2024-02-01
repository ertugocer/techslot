import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import backgroundImage from '../images/15.png';


const CustomBackgroundGrid = () => {
  return (
    <Grid container  sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      justifyContent:'center',
      alignItems:'center',
      color: 'black',
      '@media (max-width: 500px)': {
        width:'700px',
      },
    }}>
         <Grid item lg="7">
          <Typography textAlign={'center'} fontSize={'50px'} padding={'40px'}>Neler Yapıyoruz?</Typography>
          <Grid container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={6}
  sx={{
    wordSpacing:'1px',
    letterSpacing:'0px',
    padding:'20px',
    paddingTop:'10px',
    textAlign:'center',
    width:'786px'
  }}
  >
    <Grid item>
          <Typography fontSize={'36px'}>ERP   </Typography>
</Grid>
<Grid item>
  <Typography fontSize={'36px'}>
    CRM
  </Typography>
</Grid>
<Grid item>
  <Typography fontSize={'36px'}>
    Web Sitesi
  </Typography>
</Grid>
          </Grid><Grid container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={8}
  sx={{
    wordSpacing:'1px',
    letterSpacing:'0px',
    padding:'20px',
    paddingTop:'10px',
    textAlign:'center',
    width:'1050px'
  }}
  >
    <Grid item>
          <Typography fontSize={'35px'} >E-Ticaret Sitesi  </Typography>
</Grid>
<Grid item>
  <Typography fontSize={'35px'}>
  Özel Yazılım Geliştirme 
  </Typography>
</Grid>
          </Grid>
          <Grid item lg="12">
            <Typography fontSize={'27px'} fontWeight={'bolder'} sx={{
            textAlign:'left',
            padding:'50px',
            width:'580px'
          }}>
              Şirket olarak, müşterilerimize çözüm odaklı yaklaşımla hizmet veriyoruz.
            </Typography>
            </Grid>
         </Grid>
         <Grid item lg="5">
         <CardMedia
            component="img"
            image={require('../images/14.png')}
            alt="home"
            height={'420px'}
            margin='40px'
            sx={{
                '@media (max-width: 500px)': {
                  width:'200px',
                },
              }}
            />
            
         </Grid>
       
         <Grid item lg="12" sx={{
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
