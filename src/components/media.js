import { Grid,CardMedia, Typography, Button,Link } from '@mui/material';
import React, { Component } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';


class media extends Component {
    render() {
        return (
            <Grid container alignItems='center' justifyContent='center' sx={{
                backgroundColor:'black'
            }}>
                <Grid item lg="5" color={'white'}>
                    <Grid container justifyContent='center' alignItems='center'>
                        <Grid item lg="12" letter="3" padding={'60px'} paddingLeft={'30px'}>
                <CardMedia
            component="img"
            image={require('../images/21.png')}
            alt="home"
            sx={{
                height:'230px',
                width:'420px',
                '@media (max-width: 500px)': {
                  width:'200px',
                },
              }}
            />
            </Grid>
            <Grid container sx={{
                marginLeft:'70px'
            }}>
            <Grid item lg="12" >
            <Typography fontSize={'48px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'start',
            padding:'15px'
          }}>
                Bizimle yenilik yapın
            </Typography>
            </Grid>
            <Typography fontSize={'24px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'start',
            padding:'15px'
          }}>
                Kolay ve güvenli çözümlerle iş operasyonlarınızı otomatikleştirin ve basitleştirin
            </Typography>
            <Grid item lg="12" margin={'20px'} marginBottom={'120px'} >
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
            </Grid>
                </Grid>
                <Grid item lg="7">
                <CardMedia
            component="img"
            image={require('../images/22.png')}
            alt="home"
            sx={{
                '@media (max-width: 500px)': {
                  width:'200px',
                },
              }}
            />
            <Grid container justifyContent={'center'} spacing={3}>
                <Grid item lg="4" color={'white'}> 
                    <Typography textAlign={'start'} fontSize={'32px'}>
                    Sosyal Media
                    </Typography>
                </Grid>
                <Grid item>
                <Link href="05077903550" sx={{
                    color:'white'
                }}>
                    <WhatsAppIcon 
                        fontSize="large"
                        
                    />
                </Link>
                </Grid>
                <Grid item>
                <Link href="" sx={{
                    color:'white'
                }}>
                    <InstagramIcon fontSize="large" />
                </Link>
                </Grid>
                <Grid item>
                <Link href="" sx={{
                    color:'white'
                }}>
                    <LinkedInIcon fontSize="large" />
                </Link>
                </Grid>
                <Grid item>
                <Link href="" sx={{
                    color:'white'
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

export default media;