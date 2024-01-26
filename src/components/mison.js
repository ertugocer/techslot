import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import backgroundImage from '../images/imagebackground.png';

const CustomBackgroundGrid = () => {
  return (
    <Grid  container className='bg-image'
      direction="row"
      justifyContent="center"
      alignItems="center" 
      component="div"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          height: '800px',
          color: 'black'
        }}>
          <Grid item lg='5' textAlign={'center'} 
            sx={{
              backdropFilter:'blur(37px)',
              borderRadius:'20px',
              padding:'20px',
              paddingBottom:'30px'
            }}>
          <Typography className='mission-text'>
           <h4>Misyonumuz</h4>
              "Misyonumuz, dünyayı daha iyi bir yer haline getirmek ve müşterilerimizin başarılarını en üst düzeye çıkarmak için yenilikçi, güvenilir ve etkili yazılım çözümleri sunmaktır. Müşteri memnuniyetini ön planda tutarak, karmaşık problemleri çözmek ve dijital dönüşüm süreçlerini kolaylaştırmak amacıyla ekip olarak çalışıyoruz. Değerlerimize sadık kalarak, kaliteli yazılım geliştirme süreçleri ve sürdürülebilir teknoloji çözümleriyle, müşterilerimizin iş hedeflerine ulaşmalarına katkı sağlamayı amaçlıyoruz. İnovasyon, şeffaflık ve müşteri odaklılık ilkelerimizle, müşterilerimizin güvenini kazanarak sektörde lider bir yazılım şirketi olmayı hedefliyoruz." 
          </Typography>
      </Grid>
        <Grid item lg='1'></Grid>
          <Grid item lg='5' 
            sx={{
              backdropFilter:'blur(37px)',
              borderRadius:'20px',
              padding:'20px',
              paddingBottom:'30px',
              textAlign: 'center'
            }}>
              <Typography className='mission-text'>
                <h4>Vizyonumuz</h4>
                  "Vizyonumuz, teknolojinin gücünü kullanarak dünya çapında etkiler yaratmak ve geleceği şekillendirmektir. Yenilikçi çözümler ve ileri teknolojiyi kullanarak, endüstriler arası dönüşümü liderlik eden bir şirket olmayı hedefliyoruz. Müşterilerimizin ve toplumun ihtiyaçlarına uygun, sürdürülebilir ve güvenilir yazılım ürünleri geliştirerek, dijital dünyada öncü bir rol oynamak istiyoruz. Yaratıcılık, sürekli öğrenme ve müşteri memnuniyetini esas alarak, teknoloji alanındaki sınırları aşmak ve geleceğin dijital çağını şekillendirmek amacımızdır.
              </Typography>
          </Grid> 

                                {/* Misyon ve Vizyon yazılarının alt kısmı */}

        <Grid item lg='2' textAlign={'center'}>
            <Box className='mission-under-text2'>
           En güncel teknolojileri kullanarak problerinize çözüm sunuyoruz
          </Box>
        </Grid>
            <Grid padding={'20px'}  color={'black'} item lg='4'  className='mission-under-text1'>
              <Box className='mission-tech'
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                <Typography fontWeight={'bold'}>MsSQL</Typography>
              </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Typography fontWeight={'bold'}>MongooDB</Typography>
            </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start'
            }}
          >
            <Typography fontWeight={'bold'}>React</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography></Typography>
            <Typography></Typography>
            <Typography fontWeight={'bold'}>NodeJs</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly'
            }}
          >
            <Typography></Typography>
            <Typography fontWeight={'bold'}>JS</Typography>
            <Typography></Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly'
            }}
          >
            <Typography fontWeight={'bold'}>Typescript</Typography>
            <Typography></Typography>
            <Typography fontWeight={'bold'}>Html5</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly'
            }}
          >
            <Typography></Typography>
            <Typography fontWeight={'bold'}>MySQL</Typography>
            <Typography></Typography>
          </Box>
        </Grid>
        <Grid fontSize='18px' className='mission-under-text1' item lg='4'>
          Özel Yazılım Geliştirme , Mobil Uygulama Geliştirme, Yazılım Entegrasyonları, Özel Tasarlanmış Web Sitesi, E-ticaret Sitesi
        </Grid>
    </Grid>
  );
};

export default CustomBackgroundGrid;
