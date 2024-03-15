import { Grid, Typography,Button,CardMedia } from '@mui/material';
import React, { Component } from 'react';
import '../classes/OnePage.css'

class onepage extends Component {
    render() {
        return (
            
            <Grid container bgcolor={'black'} sx={{
                '@media (max-width:600px)': {
                    backgroundColor:'white'
                }
            }} color={'white'} direction={"row"}>
                    <Grid container>
                                <Grid item xs="12" lg="6" paddingLeft={'20px'}>
                                    <Typography className='OnePageText1'>Üretim entegrasyonları</Typography>
                                    <Grid xs="12" sx={{
                '@media (max-width:600px)': {
                    display:'none'
                }
            }}>
                                    <Typography className='OnePageText2'>Yazılım & Geliştirme</Typography>
                                </Grid>
                            <Grid item xs="12" sx={{
                '@media (max-width:600px)': {
                    display:'none'
                }
            }}>
                                <Button className='OnePageButton'>
                                   bilgi al
                                </Button>
                            </Grid>
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
                                <Grid xs="12" sx={{
                '@media (min-width:601px)': {
                    display:'none'
                }
            }}>
                                    <Typography className='OnePageText2'>Yazılım & Geliştirme</Typography>
                                </Grid>
                            <Grid item xs="12" sx={{
                '@media (min-width:601px)': {
                    display:'none'
                }
            }}>
                                <Button className='OnePageButton'>
                                    ücretsiz dene
                                </Button>
                            </Grid>
                        </Grid>
                </Grid>
            
        );
    }
}

export default onepage;