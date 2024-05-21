import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';

function CustomContent() {
  return (
    <Box sx={{ margin: '30px', textAlign: 'center' }}>
      <Grid container spacing={4}>
        {/* Üstteki Metinler */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">İsteğinize Özel Yazılım</Typography>
          <Typography variant="body1">
            İstekleriniz doğrultusunda size özel tasarlanmış ve kodlanmış yazılımlar. Problemlerinizin çözümü artık bu kadar kolay.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">İsteğinize Özel Yazılım</Typography>
          <Typography variant="body1">
            İstekleriniz doğrultusunda size özel tasarlanmış ve kodlanmış yazılımlar. Problemlerinizin çözümü artık bu kadar kolay.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">İsteğinize Özel Yazılım</Typography>
          <Typography variant="body1">
            İstekleriniz doğrultusunda size özel tasarlanmış ve kodlanmış yazılımlar. Problemlerinizin çözümü artık bu kadar kolay.
          </Typography>
        </Grid>

        {/* Alt Metinler */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Web Sitesi Geliştirme</Typography>
          <Typography variant="body1">
            Son teknolojilerle tasarladığımız projelerimiz ve web sitelerimizle her zaman güncel ve hızlı bir deneyim yaşayın. Bizimle bir adım öne geçmek istemez misiniz?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Web Sitesi Geliştirme</Typography>
          <Typography variant="body1">
            Son teknolojilerle tasarladığımız projelerimiz ve web sitelerimizle her zaman güncel ve hızlı bir deneyim yaşayın. Bizimle bir adım öne geçmek istemez misiniz?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Üretim Takip Yazılımı</Typography>
          <Typography variant="body1">
            İşletmeniz için üretim, iş bölümü, depo & stok yönetimi ve daha fazlasının yönetimi artık tek panelde. Yönetim kolaylığı burada.
          </Typography>
        </Grid>
      </Grid>

      {/* Keşfet Butonu */}
      <Box sx={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary">
          Keşfet
        </Button>
      </Box>
    </Box>
  );
}

export default CustomContent;
