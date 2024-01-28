import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import '../App.css';

export default function homepagecard(props) {
  return (
    <Grid container>
      <Grid item lg='0.5'></Grid>
        <Card sx={{ maxWidth: 530, background: 'none', boxShadow: 'none', marginTop: '50px'}}>
              <Grid 
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              >
      <CardMedia 
        component="img"
        image={props.image}
        alt="Sample Image"
      /></Grid>
      <CardContent>
        <Typography fontSize={'30px'} color={'rgba(255, 238, 238, 1)'} fontFamily='Josefin Sans' textAlign={'center'}>
       {props.title} 
        </Typography>
        <Typography variant="body2" color={'rgb(226, 221, 169)'} fontFamily='Josefin Sans' align="left" padding={'15px'} fontSize={'24px'}>
          {props.title2}
        </Typography>
        <Typography variant="body2" color={'rgba(255, 238, 238, 1)'} fontFamily='Josefin Sans' align="left" paddingLeft={'15px'} fontSize={'22px'}>
          {props.text}
        </Typography>
        <Typography variant="body2" color={'rgb(226, 221, 169)'} fontFamily='Josefin Sans' align="left" padding={'15px'} fontSize={'24px'}>
          {props.title3}
        </Typography>
        <Typography variant="body2" color={'rgba(255, 238, 238, 1)'} fontFamily='Josefin Sans' align="left" paddingLeft={'15px'} fontSize={'22px'}>
          {props.text1}
        </Typography>
        <Typography variant="body2" color={'rgb(226, 221, 169)'} fontFamily='Josefin Sans' align="left" padding={'15px'} fontSize={'24px'}>
          {props.title4}
        </Typography>
        <Typography variant="body2" color={'rgba(255, 238, 238, 1)'} fontFamily='Josefin Sans' align="left" paddingLeft={'15px'} fontSize={'22px'}>
          {props.text2}
        </Typography>
        <Typography variant="body2" color={'rgb(226, 221, 169)'} fontFamily='Josefin Sans' align="left" padding={'15px'} fontSize={'24px'}>
          {props.title5}
        </Typography>
        <Typography variant="body2" color={'rgba(255, 238, 238, 1)'} fontFamily='Josefin Sans' align="left" paddingLeft={'15px'} fontSize={'22px'}>
          {props.text3}
        </Typography>
        <Typography variant="body2" color={'rgb(226, 221, 169)'} fontFamily='Josefin Sans' align="left" padding={'15px'} fontSize={'24px'}>
          {props.title6}
        </Typography>
        <Typography variant="body2" color={'rgba(255, 238, 238, 1)'} fontFamily='Josefin Sans' align="left" paddingLeft={'15px'} fontSize={'22px'}>
          {props.text4}
        </Typography>
      </CardContent></Card>
      </Grid>
  );
};

