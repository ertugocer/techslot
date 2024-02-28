import { Grid, Typography,Button,CardMedia } from '@mui/material';
import React, { Component } from 'react';
import '../classes/OnePage.css'
import { Container } from '@mui/system';
class onepage extends Component {
    render() {
        return (
            
            <Grid container bgcolor={'black'} sx={{
                '@media (max-width:600px)': {
                    backgroundColor:'white'
                }
            }} color={'white'} direction={"row"}>
                    <Grid container>
                                <Grid item xs="12" lg="6">
                                    <Typography className='OnePageText1'>Üretim entegrasyonları</Typography>
                                </Grid>
                                <Grid item xs="12" lg="6">
                <CardMedia
            component="img"
            image={require('../images/24.png')}
            alt="home"
            sx={{
                height:'630px',
                '@media (max-width: 600px)': {
                    maxWidth:'90%',
                    height:'90%',
                    marginTop:'50px',
                    marginBottom:'70px',
                    paddingLeft:'20px'
                },
              }}
            />
                </Grid>
                                <Grid xs="12">
                                    <Typography className='OnePageText2'>Yazılım & Geliştirme</Typography>
                                </Grid>
                            <Grid item xs="12">
                                <Button className='OnePageButton'>
                                    ücretsiz dene
                                </Button>
                            </Grid>
                        </Grid>
                </Grid>
            /* Mobile Kısmı
            <Grid container className='OnePageMobileGrid1' bgcolor={'black'} color={'white'}>
            <Grid item xs="4" lg="6" >
                <Typography className='OnePageMobileText1'>Üretim entegrasyonları</Typography>
                </Grid>
                <Grid xs="8" item lg="6" className='OnePageMobile'>
            <CardMedia
        component="img"
        image={require('../images/24.png')}
        alt="home"
        sx={{
            height:'630px',

            '@media (min-width:501px)': {
                display:'none'
            },
            
            '@media (max-width: 500px)': {
                marginLeft:'23px',
                height: 'auto',
            },
          }}
        />
            </Grid>
            <Grid className='OnePageMobileText2' lg="12">
                <Typography >Yazılım & Geliştirme</Typography>
                </Grid>
                <Grid lg="12">
                <Button className='OnePageMobileButton'>
                ücretsiz dene
            </Button>
            </Grid>
        </Grid>*/
        );
    }
}

export default onepage;