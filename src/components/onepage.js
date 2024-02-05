import { Grid, Typography,Button,CardMedia } from '@mui/material';
import React, { Component } from 'react';

class onepage extends Component {
    render() {
        return (
            <Grid container bgcolor={'black'} color={'white'}>
                <Grid item lg="6">
                    <Typography>Üretim entegrasyonları</Typography>
                    <Typography>Yazılım & Geliştirme</Typography>
                    <Button sx={{
                    color:'#E0E111',
                    border:'1.5px solid #E0E111',
                    borderRadius:'0px',
                    width:'260px',
                    fontSize:'21px',
                    fontWeight:'600',
                    padding:'15px 23px 15px 23px'
                }}>
                    ücretsiz dene
                </Button>
                </Grid>
                <Grid item lg="6">
                <CardMedia
            component="img"
            image={require('../images/24.png')}
            alt="home"
            sx={{
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