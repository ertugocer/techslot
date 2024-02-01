import { Grid,CardMedia, Typography, Button,Stack,Link } from '@mui/material';
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
                        <Grid item letter="3">
                <CardMedia
            component="img"
            image={require('../images/21.png')}
            alt="home"
            sx={{
                height:'300px',
                '@media (max-width: 500px)': {
                  width:'200px',
                },
              }}
            />
            </Grid>
            <Grid>
            <Typography fontSize={'29px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            padding:'15px'
          }}>
                Bizimle yenilik yapın
            </Typography>
            </Grid>
            <Typography fontSize={'20px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
            textAlign:'center',
            padding:'15px'
          }}>
                Kolay ve güvenli çözümlerle iş operasyonlarınızı otomatikleştirin ve basitleştirin
            </Typography>
            <Button x={{
                    color:'#E0E111',
                    border:'1.5px solid #E0E111',
                    borderRadius:'0px',
                    width:'260px',
                    fontSize:'21px',
                    fontWeight:'600',
                    padding:'15px 23px 15px 23px'
                }}>
              Hemen Başla
            </Button>
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
            <Stack direction="row" spacing={3}>
                <Link href="05077903550">
                    <WhatsAppIcon />
                </Link>
                <Link href="">
                    <InstagramIcon />
                </Link>
                <Button>
                    <LinkedInIcon />
                </Button>
                <Button>
                    <MapsHomeWorkIcon />
                </Button>
            </Stack>
                </Grid>
            </Grid>
        );
    }
}

export default media;