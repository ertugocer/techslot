import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Resmi projenizin içinden yükleyin
import backgroundImage from '../images/imagebackground.png';

const CustomBackgroundGrid = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          component="div"
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            height: '800px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h4">Metin 1</Typography>
          <Typography variant="h5">Metin 2</Typography>
          <Typography variant="subtitle1">Metin 3</Typography>
          <Typography variant="caption">Metin 4</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CustomBackgroundGrid;
