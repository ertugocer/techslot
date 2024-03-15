import { Grid, CardMedia, Typography, Divider} from '@mui/material';
import React, { Component } from 'react';
import '../classes/Innovation.css'
class innovation extends Component {
    render() {
        return (
           <Grid container>
               <Grid item lg="6">
               <CardMedia
               maxHeight='718px'
            component="img"
            image={require('../images/20.png')}
            alt="home"
            className='MediaSettings'
           />
           </Grid>
               <Grid item lg="6" marginTop={'15px'}>
                <Grid container className='PageText'>   
                <Grid item >
               <Typography letterSpacing={'-3px'} className='InnovationHeadText1'>Sıkılmadınız mı ?</Typography>
                    <Typography className='InnovationText'>
                    Eskimiş ve geç yüklenen projelerden sıkılmadınız mı? İşte buradayız. Son teknolojilerle tasarladığımız projelerimiz ve web sitelerimizle her zaman güncel ve hızlı bir deneyim yaşayın. Ekibiniz için kolay ve rahat olacak şekilde tasarlanmış kullanıcı sayfaları. Bizimle bir adım öne geçmek istemez misiniz? .
                    </Typography>
                    <Divider sx={{
                        backgroundColor:'black',
                        height:'1.5px',
                        marginTop:'10px',
                        marginBottom:'10px',
                        
                    }} />
                    </Grid>
                    <Grid item>
                    <Typography letterSpacing={'-2px'} className='InnovationHeadText1'>Hala istediğinizi alamıyor musunuz ?
          </Typography>
          
                    <Typography className='InnovationText'>
                    Her an güncellenebilen projelerle sorunlarınıza hızlı ve etkili çözümler sunuyoruz. İstekleriniz doğrultusunda şekillendirilebilen projelerimiz,  özellikleri ekleyebilmeniz veya çıkarabilmeniz için esneklik sunuyor. Sizin ihtiyaçlarınıza özel tasarımlar ile yanınızdayız
                    </Typography>
                    
                    <Divider sx={{
                        backgroundColor:'black',
                        height:'1.5px',
                        marginTop:'10px',
                        marginBottom:'10px',
                        
                    }} />
                    </Grid>
                    <Grid item>
                    <Typography letterSpacing={'0px'} className='InnovationHeadText1'>Sistematik çalışmaya nedersiniz?</Typography>
          
                    <Typography className='InnovationText'>
                    İşlerinizi planlı ve düzenli yönetmek artık bir lüks değil, bir ihtiyaç. yeni geliştirdiğimiz projelerde, basit ve güvenilir panellerle işlerinizi kolayca takip edin. hızlı, etkili ve güçlü çözümlerle iş süreçlerinizi yükseltin.
                    </Typography>
                    </Grid>
                    </Grid>
               </Grid> 
           </Grid>
        );
    }
}

export default innovation;