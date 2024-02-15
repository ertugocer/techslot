import { Grid, Typography,Button,CardMedia } from '@mui/material';
import React, { Component } from 'react';
import '../classes/OnePage.css'
class onepage extends Component {
    render() {
        return (
            <Grid container bgcolor={'black'} color={'white'}>
                <Grid item lg="6" className='OnePageGrid1'>
                    <Typography className='OnePageText1'>Üretim entegrasyonları</Typography>
                    <Typography className='OnePageText2'>Yazılım & Geliştirme</Typography>
                    <Button className='OnePageButton'>
                    ücretsiz dene
                </Button>
                </Grid>
                <Grid item lg="6" padding={'20px'}>
                <CardMedia
            component="img"
            image={require('../images/24.png')}
            alt="home"
            sx={{
                height:'630px',
                '@media (max-width: 500px)': {
                  width:'200px',
                },
              }}
            />
                </Grid>
            </Grid>
        );
    }
}

export default onepage;