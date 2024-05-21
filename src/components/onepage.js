import React from 'react';
import { Card, CardMedia } from '@mui/material';
import videoSrc from '../images/deneme.mp4'; // Videoyu bu şekilde import edebilirsiniz

function VideoCard() {
  return (
    <Card sx={{ height: 700 }}>
      <CardMedia
        component="video"
        src={videoSrc}
        autoPlay
        loop
        muted
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </Card>
  );
}

export default VideoCard;
