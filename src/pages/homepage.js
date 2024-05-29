

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, CardMedia, Grid } from '@mui/material';
import videoSrc from '../images/deneme.mp4';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded'
import Company from '../components/company';
import Media from '../components/media';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background:'white' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar backgroundColor="white" component="nav">
        <Toolbar backgroundColor='white'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <div>
      <Box sx={{ position: 'relative', height: 770 }}>
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
            padding: '10px 20px', 
            borderRadius: '10px', 
          }}
        >
          Dijital Dünyada <br /> En Güçlü Destekçiniz
        </Typography>
      </Box>
        <Box
          sx={{
            top: '50%',
            left: 0,
            width: '100%',
            background: "linear-gradient(rgba(102, 102, 102, 0.4), white)",
            textAlign: 'center',
            zIndex: 0,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center" textAlign='center'>
            <Grid item xs="8">
              <Typography sx={{ fontSize: '65px', height: '400px', paddingTop: '160px' }}>
                Dijital Harmoni: Yazılımın Yeni Akoru
              </Typography>
            </Grid>
            <Grid item lg="6">
              <Button sx={{
                color: 'white',
                padding: '12px 8px',
                borderRadius: '0px',
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'black',
                },
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
      
      <Box sx={{
        backgroundColor:'black'
      }}> 
        <Grid 
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center" textAlign='center'
        color={'white'}
        paddingTop='40px'
        >
        <Grid item md="2.5" padding={'30px 0px'}>
          <h2>WEB SİTESİ</h2>
          <Typography>
          Son teknolojilerle tasarladığımız projelerimiz ve web sitelerimizle her zaman güncel ve hızlı bir deneyim yaşayın. Bizimle bir adım öne geçmek istemez misiniz? 
          </Typography>
        </Grid>
        <Grid item md="2.5">
        <h2>E-TİCARET</h2>
          <Typography>
          E-ticaret, ürün ve hizmetlerin internet üzerinden alınıp satılmasıdır ve bu sayede işletmeler dünya genelinde geniş bir müşteri kitlesine ulaşabilir. 7/24 alışveriş imkanı sunan e-ticaret, kişiselleştirilmiş pazarlama stratejileri ile de müşteri deneyimini iyileştirir. 
          </Typography>
        </Grid>
        <Grid item md="2.5">
        <h2>SOSYAL MEDYA YÖNETMELİĞİ</h2>
          <Typography>
Sosyal medya danışmanlığı, işletmelere dijital dünyada güçlü bir varlık kazandırır. Uzman desteğiyle stratejik planlama, içerik yönetimi ve reklam kampanyaları sunarak markaların hedef kitlelerine etkili şekilde ulaşmasını sağlar. Bu sayede, marka bilinirliği artar ve müşteri sadakati güçlenir. 
          </Typography>
        </Grid>
        <Grid 
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center" textAlign='center'
        color={'white'}
        >
        <Grid item md="2.5" padding={'30px 0px'}>
          <h2>SEO ÇALIŞMASI</h2>
          <Typography>
          SEO çalışması, web sitelerinin arama motorlarında üst sıralarda yer almasını sağlamak için yapılan optimizasyonlardır. Anahtar kelime analizi, içerik optimizasyonu ve teknik iyileştirmelerle sitenizin görünürlüğü artırılır. Böylece, daha fazla organik trafik çekerek işletmenizin online başarısını ve müşteri kitlesini genişletir.  
          </Typography>
        </Grid>
        <Grid item md="2.5">
        <h2>KURUMSAL E-POSTA</h2>
          <Typography>
          Kurumsal e-posta, işletmelerin profesyonel ve güvenilir bir iletişim kurmalarını sağlar. İşletme adına özel e-posta adresleri kullanmak, markanın ciddiyetini artırır ve müşterilerde güven oluşturur. Ayrıca, kurumsal e-posta çözümleri, gelişmiş güvenlik ve yedekleme özellikleri sunarak verilerinizi korur ve iş verimliliğinizi artırır.
          </Typography>
        </Grid>
        <Grid item md="2.5">
        <h2>META VE GOOGLE ADS REKLAMI</h2>
          <Typography>
          Meta ve Google Ads reklamları, dijital pazarlamada işletmelerin hedef kitlelerine ulaşmasını sağlayan güçlü araçlardır. Meta Ads, Facebook, Instagram ve diğer platformlarda demografik ve ilgi alanlarına göre hedefleme yaparken, Google Ads, arama sonuçları ve partner sitelerde anahtar kelime bazlı reklam gösterimleri sunar.
          </Typography>
        </Grid>
        </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', marginTop: '40px',paddingBottom:'40px' }}>
        <Button 
          sx={{
            border: '1px solid #E0E111',
            color: '#E0E111',
            padding: '13px 56px',
            borderRadius: '0px',
            fontSize:'16px',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: '#E0E111',
              color: 'black',
            },
          }}
        >
          Özel Buton
        </Button>
      </Box>
      </Box>
      
      <Grid 
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center" 
        color={'#311476'}
        ><TravelExploreRoundedIcon fontSize='large' />
        <Grid item md="3" padding={'30px 0px'}>
          <h2>Tanıtım Web Sitesi</h2>
          <Typography>
          Tartışmak istediklerinizi kısaca detaylandırın.
          </Typography>
        </Grid>
        <TravelExploreRoundedIcon fontSize='large' />
        <Grid item md="3" padding={'30px 0px'}>
          <h2>Tanıtım Web Sitesi</h2>
          <Typography>
          Tartışmak istediklerinizi kısaca detaylandırın.
          </Typography>
        </Grid>
        <TravelExploreRoundedIcon fontSize='large' />
        <Grid item md="3" padding={'30px 0px'}>
          <h2>Tanıtım Web Sitesi</h2>
          <Typography>
          Tartışmak istediklerinizi kısaca detaylandırın.
          </Typography>
        </Grid>
        <TravelExploreRoundedIcon fontSize='large' />
        <Grid item md="3" padding={'30px 0px'}>
          <h2>Tanıtım Web Sitesi</h2>
          <Typography>
          Tartışmak istediklerinizi kısaca detaylandırın.
          </Typography>
        </Grid>
        <TravelExploreRoundedIcon fontSize='large' />
        <Grid item md="3" padding={'30px 0px'}>
          <h2>Tanıtım Web Sitesi</h2>
          <Typography>
          Tartışmak istediklerinizi kısaca detaylandırın.
          </Typography>
        </Grid>
        <TravelExploreRoundedIcon fontSize='large' />
        <Grid item md="3" padding={'30px 0px'}>
          <h2>Tanıtım Web Sitesi</h2>
          <Typography>
          Tartışmak istediklerinizi kısaca detaylandırın.
          </Typography>
        </Grid>
        <TravelExploreRoundedIcon fontSize='large' />
        <Grid item md="3" padding={'30px 0px'}>
          <h2>Tanıtım Web Sitesi</h2>
          <Typography>
          Tartışmak istediklerinizi kısaca detaylandırın.
          </Typography>
        </Grid>
        </Grid>
        <Media />
        <Company />
        

    </div>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;


