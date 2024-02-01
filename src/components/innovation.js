import { Grid, CardMedia, Typography, Divider} from '@mui/material';
import React, { Component } from 'react';

class innovation extends Component {
    render() {
        return (
           <Grid container>
               <Grid item lg="6">
               <CardMedia
            component="img"
            image={require('../images/20.png')}
            alt="home"
            height={'718px'}
            sx={{
                padding:'60px',
                paddingLeft:'25px',
                paddingTop:'5px',
                '@media (max-width: 500px)': {
                  width:'200px',
                },
              }}
            /></Grid> 
               <Grid item lg="6" marginTop={'15px'}>
               <Typography fontSize={'55px'} sx={{
            letterSpacing:'-3px',
            fontWeight:'500',
            wordBreak:'break-word',
          }}>Sıkılmadınız mı ?</Typography>
                    <Typography width={'600px'}fontSize={'18px'} fontWeight={'500'}>
                    Eskimiş ve geç yüklenen projelerden sıkılmadınız mı? İşte buradayız. Son teknolojilerle tasarladığımız projelerimiz ve web sitelerimizle her zaman güncel ve hızlı bir deneyim yaşayın. Ekibiniz için kolay ve rahat olacak şekilde tasarlanmış kullanıcı sayfaları. Bizimle bir adım öne geçmek istemez misiniz? .
                    </Typography>
                    <Divider sx={{
                        backgroundColor:'black',
                        height:'1.5px',
                        marginTop:'20px',
                        marginBottom:'8px',
                        width:'600px'
                    }} />
                    <Typography fontSize={'55px'} sx={{
            letterSpacing:'-2px',
            lineHeight:'55px',
            fontWeight:'500',
            wordBreak:'break-word',
          }}>Hala istediğinizi alamıyor musunuz ?
          </Typography>
                    <Typography width={'600px'} fontSize={'18px'} fontWeight={'500'} paddingTop={'20px'}>
                    Her an güncellenebilen projelerle sorunlarınıza hızlı ve etkili çözümler sunuyoruz. İstekleriniz doğrultusunda şekillendirilebilen projelerimiz,  özellikleri ekleyebilmeniz veya çıkarabilmeniz için esneklik sunuyor. Sizin ihtiyaçlarınıza özel tasarımlar ile yanınızdayız
                    </Typography>
                    <Divider sx={{
                        backgroundColor:'black',
                        height:'1.5px',
                        marginTop:'20px',
                        marginBottom:'8px',
                        width:'600px'
                    }} />
                    <Typography fontSize={'55px'} sx={{
            letterSpacing:'0px',
            lineHeight:'55px',
            fontWeight:'500',
            wordBreak:'break-word',
          }}>Sistematik çalışmaya nedersiniz?</Typography>
                    <Typography width={'600px'} fontSize={'18px'} fontWeight={'500'} paddingTop={'20px'}>
                    İşlerinizi planlı ve düzenli yönetmek artık bir lüks değil, bir ihtiyaç. yeni geliştirdiğimiz projelerde, basit ve güvenilir panellerle işlerinizi kolayca takip edin. hızlı, etkili ve güçlü çözümlerle iş süreçlerinizi yükseltin.
                    </Typography>
               </Grid> 
           </Grid>
        );
    }
}

export default innovation;