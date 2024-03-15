import React, { Component } from 'react';
import { Grid, CardMedia, Typography, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import '../classes/Media.css';

class Media extends Component {
    render() {
        return (
            <Grid container alignItems='center' justifyContent='center' sx={{
                backgroundColor: 'black'
            }}>
                <Grid item xs={12} lg={5} color={'white'}>
                    <Grid container justifyContent='center' alignItems='center'>
                        <Grid item lg={12} letter="3" className='ImageGrid1'>
                            <CardMedia
                                component="img"
                                src={require('../images/21.png')}
                                alt="home"
                                className='MediaImage'
                            />
                        </Grid>
                        <Grid container className='MediaGridOne' >
                            <Grid item xs="12">
                        <CardMedia
                        component="img"
                        src={require('../images/22.png')} 
                        alt="home"
                        className='PhoneImage'
                    />
                    </Grid>
                            <Grid item xs="12" lg={12}>
                                <Typography className='MediaHead'>
                                    Bizimle yenilik yapın
                                </Typography>
                            </Grid>
                            <Typography className='MediaText'>
                                Kolay ve güvenli çözümlerle iş operasyonlarınızı otomatikleştirin ve basitleştirin
                            </Typography>
                            <Grid item xs={12} lg={12} className='ButtonGridMedia'>
                                <Button sx={{
                                    color: '#E0E111',
                                    border: '1.5px solid #E0E111',
                                    borderRadius: '0px',
                                    width: '260px',
                                    fontSize: '21px',
                                    fontWeight: '600',
                                    padding: '15px 23px 15px 23px'
                                }}>
                                    KEŞFET
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={7}>
                    <CardMedia
                        component="img"
                        src={require('../images/22.png')} 
                        alt="home"
                        sx={{
                            '@media (max-width: 500px)': {
                                display:'none',
                            },
                        }}
                    />
                    <Grid container  margin={'40px 20px 40px 0px'} textAlign={'center'} justifyContent={'center'}>
                        <Grid item xs="12" lg="4" color={'white'}>
                            <Typography className='IconText'>
                                Sosyal Media
                            </Typography>
                        </Grid>
                        <Grid item xs="3" lg="1">
                            <Link href="tel:05077903550" sx={{
                                color: 'white'
                            }}>
                                <WhatsAppIcon
                                    fontSize="large"
                                />
                            </Link>
                        </Grid>
                        <Grid item  xs="3" lg="1">
                            <Link href="#" sx={{
                                color: 'white'
                            }}>
                                <InstagramIcon fontSize="large" />
                            </Link>
                        </Grid>
                        <Grid item xs="3" lg="1">
                            <Link href="#" sx={{
                                color: 'white'
                            }}>
                                <LinkedInIcon fontSize="large" />
                            </Link>
                        </Grid>
                        <Grid item xs="3" lg="1">
                            <Link href="#" sx={{
                                color: 'white'
                            }}>
                                <MapsHomeWorkIcon fontSize="large" />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Media;
