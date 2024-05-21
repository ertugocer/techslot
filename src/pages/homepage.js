import React from 'react';
import { Card, CardMedia, AppBar, Toolbar, Button, Box, Typography, Divider, Grid } from '@mui/material';
import videoSrc from '../images/deneme.mp4';
import Pageone from '../components/varyasyon';

function VideoCard() {
  return (
    <div>
      <Box sx={{ position: 'relative', height: 680 }}>
        <Card sx={{ height: '100%', borderRadius: '0px' }}>
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
        <AppBar
          position="absolute"
          sx={{
            top: 0,
            right: 0,
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <Button href='/' color="inherit">Anasayfa</Button>
            <Button href='/media' color="inherit">Çözümler</Button>
            <Button color="inherit">Kurumsal</Button>
            <Button color="inherit">İletişim</Button>
          </Toolbar>
          <Divider color="white" />
        </AppBar>
        <Typography
          variant="h3"
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            padding: '10px 20px', // İçerik dolgusu
            borderRadius: '10px', // Kenar yuvarlama
          }}
        >
          Dijital Dünyada <br /> En Güçlü Destekçiniz
        </Typography>
      </Box>

      <Box sx={{ marginTop: '-40px', zIndex: 1}}>
        <Grid
          container
          textAlign="center"
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ position: 'relative', zIndex: 1 }}
        >
          <Grid item md={2} sx={{ border: 'solid 1px black', borderRadius: '50px', backgroundColor: 'white' }}>
            <Typography sx={{ fontSize: '25px' }}>E-Ticaret</Typography>
          </Grid>
          <Grid item md={2.5} sx={{ border: 'solid 1px black', borderRadius: '50px', backgroundColor: 'white' }}>
            <Typography sx={{ fontSize: '18px', padding: '5px' }}>Sosyal Medya Yönetmeniliği</Typography>
          </Grid>
          <Grid item md={2} sx={{ border: 'solid 1px black', borderRadius: '50px', backgroundColor: 'white' }}>
            <Typography sx={{ fontSize: '25px' }}>Web Sitesi</Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            top: '50%',
            left: 0,
            width: '100%',
            backgroundColor: 'gray',
            textAlign: 'center',
            zIndex: 0,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center" textAlign='center'>
            <Grid item xs="8" >
              <Typography sx={{ fontSize: '65px', height: '400px', paddingTop: '200px' }}>
                Dijital Harmoni: Yazılımın Yeni Akoru
              </Typography>
            </Grid>
            <Grid item lg="6">
              <Button sx={{
                color: 'white',
                backgroundColor: 'black',
                padding: '12px 8px',
                borderRadius: '0px'
              }}>
                daha fazla bİlgİ İçİn
              </Button>
            </Grid>
            <Grid lg="6">
              <Grid container >
                <Grid item xs="6" width={'200px'} padding={'0px 40px 30px 0px'}>
                  <Typography fontSize={'14px'}>
                    <h3>SİZE NASIL YARDIMCI OLABİLİRİZ?</h3>

                    Sosyal medya danışmanlığı ve yazılım çözümlerimizle markanızın
                    dijital dünyada parlamasını sağlıyoruz. Stratejik
                    sosyal medya yönetimi ve işletmenize özel yazılım hizmetlerimizle
                    hedeflerinize ulaşmanıza yardımcı oluyoruz.
                  </Typography>

                </Grid>
                <Grid item xs="6">
                  <Typography fontSize={'14px'} padding={'0px 40px 30px 0px'}>
                    <h3>NEDİR BU DİJİTAL DÜNYA</h3>

                    Dijital dünya, internet ve teknolojinin
                    sunduğu sonsuz olanaklarla iş ve yaşam
                    tarzımızı dönüştüren bir evrendir.
                    Sosyal medya platformlarından
                    web tabanlı yazılımlara, dijital pazarlama
                    stratejilerinden online iletişime kadar geniş
                    bir yelpazeyi kapsar. Biz, sosyal medya
                    danışmanlığı ve yazılım çözümlerimizle bu dijital
                    dünyada var olmanızı ve başarılı olmanızı sağlıyoruz.
                  </Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography fontSize={'14px'} padding={'0px 40px 30px 0px'}>
                    <h3>NEDEN BİZ?</h3>
                    Uzman ekibimizle stratejik sosyal medya yönetimi ve yenilikçi
                    yazılım çözümleri sunuyoruz. Güvenilir, etkili ve sonuç
                    odaklı hizmet anlayışımızla markanızı dijital dünyada öne çıkarıyoruz.
                  </Typography>
                </Grid>
                <Grid item xs="6">
                  <Typography fontSize={'14px'} padding={'0px 40px 30px 0px'}>
                    <h3>BİZDEN SONRA NELER DEĞİŞECEK</h3>
                    Bizimle çalışmaya başladığınızda, markanızın dijital varlığı güçlenecek,
                    sosyal medya etkileşimleriniz artacak ve özelleştirilmiş yazılım çözümlerimizle
                    iş süreçleriniz daha verimli hale gelecek. Dijital dünyada daha görünür ve etkili olacaksınız.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        a
      </Box>








      {/* <Box sx={{ position: 'relative', height: 680 }}>
        <Card sx={{ height: '100%' }}>
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
        <AppBar
          position="absolute"
          sx={{
            top: 0,
            right: 0,
            background: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <Button color="inherit">Anasayfa</Button>
            <Button color="inherit">Çözümler</Button>
            <Button color="inherit">Kurumsal</Button>
            <Button color="inherit">İletişim</Button>
          </Toolbar>
          <Divider color="white" />
        </AppBar>
        <Typography
          variant="h3"
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            padding: '10px 20px', // İçerik dolgusu
            borderRadius: '10px', // Kenar yuvarlama
          }}
        >
          Dijital Dünyada <br /> En Güçlü Destekçiniz
        </Typography>
        <Box sx={{ position: 'relative', marginTop: '30px' }}>
          <Grid
            container
            textAlign="center"
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ position: 'relative', zIndex: 1 }}
          >
            <Grid item md={2} sx={{ border: 'solid 1px black', borderRadius: '50px', backgroundColor: 'white' }}>
              <Typography sx={{ fontSize: '25px' }}>E-Ticaret</Typography>
            </Grid>
            <Grid item md={2.5} sx={{ border: 'solid 1px black', borderRadius: '50px', backgroundColor: 'white' }}>
              <Typography sx={{ fontSize: '18px', padding: '5px' }}>Sosyal Medya Yönetmeniliği</Typography>
            </Grid>
            <Grid item md={2} sx={{ border: 'solid 1px black', borderRadius: '50px', backgroundColor: 'white' }}>
              <Typography sx={{ fontSize: '25px' }}>Web Sitesi</Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              backgroundColor: 'gray',
              textAlign: 'center',
              zIndex: 0,
              paddingTop: '10px', // İçerik dolgusu, isteğe bağlı
              paddingBottom: '10px', // İçerik dolgusu, isteğe bağlı
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center" textAlign='center'>
              <Grid item xs="8" >
                <Typography sx={{ fontSize: '65px', height: '400px', paddingTop: '200px' }}>
                  Dijital Harmoni: Yazılımın Yeni Akoru
                </Typography>
              </Grid>
              <Grid item lg="6">
                <Button sx={{
                  color: 'white',
                  backgroundColor: 'black',
                  padding: '12px 8px',
                  borderRadius: '0px'
                }}>
                  daha fazla bİlgİ İçİn
                </Button>
              </Grid>
              <Grid lg="6">
                <Grid container >
                  <Grid item xs="6" width={'200px'} padding={'0px 40px 30px 0px'}>
                    <Typography fontSize={'14px'}>
                      <h3>SİZE NASIL YARDIMCI OLABİLİRİZ?</h3>

                      Sosyal medya danışmanlığı ve yazılım çözümlerimizle markanızın
                      dijital dünyada parlamasını sağlıyoruz. Stratejik
                      sosyal medya yönetimi ve işletmenize özel yazılım hizmetlerimizle
                      hedeflerinize ulaşmanıza yardımcı oluyoruz.
                    </Typography>

                  </Grid>
                  <Grid item xs="6">
                    <Typography fontSize={'14px'} padding={'0px 40px 30px 0px'}>
                      <h3>NEDİR BU DİJİTAL DÜNYA</h3>

                      Dijital dünya, internet ve teknolojinin
                      sunduğu sonsuz olanaklarla iş ve yaşam
                      tarzımızı dönüştüren bir evrendir.
                      Sosyal medya platformlarından
                      web tabanlı yazılımlara, dijital pazarlama
                      stratejilerinden online iletişime kadar geniş
                      bir yelpazeyi kapsar. Biz, sosyal medya
                      danışmanlığı ve yazılım çözümlerimizle bu dijital
                      dünyada var olmanızı ve başarılı olmanızı sağlıyoruz.
                    </Typography>
                  </Grid>
                  <Grid item xs="6">
                    <Typography fontSize={'14px'} padding={'0px 40px 30px 0px'}>
                      <h3>NEDEN BİZ?</h3>
                      Uzman ekibimizle stratejik sosyal medya yönetimi ve yenilikçi
                      yazılım çözümleri sunuyoruz. Güvenilir, etkili ve sonuç
                      odaklı hizmet anlayışımızla markanızı dijital dünyada öne çıkarıyoruz.
                    </Typography>
                  </Grid>
                  <Grid item xs="6">
                    <Typography fontSize={'14px'} padding={'0px 40px 30px 0px'}>
                      <h3>BİZDEN SONRA NELER DEĞİŞECEK</h3>
                      Bizimle çalışmaya başladığınızda, markanızın dijital varlığı güçlenecek,
                      sosyal medya etkileşimleriniz artacak ve özelleştirilmiş yazılım çözümlerimizle
                      iş süreçleriniz daha verimli hale gelecek. Dijital dünyada daha görünür ve etkili olacaksınız.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box> */}

    </div>

  );
}

export default VideoCard;
