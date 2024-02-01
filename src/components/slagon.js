import React from "react";
import {
    CardMedia,
    Grid,
    Typography,
    Divider
} from '@mui/material';
import '../App.css';


const slagon = () => {
    return (
    <Grid container padding={'20px'}>
        <Grid item lg="6" padding={'15px'} paddingBottom={'0px'}>
            <Grid container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Grid item>
                    <Typography fontSize={'35px'} sx={{
            wordSpacing:'70px',
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
          }}>E-Ticaret</Typography>
                    <Typography width={'600px'} paddingLeft={'40px'} fontSize={'16px'} fontWeight={'500'}>
                    Bir e-ticaret web sitesi, internetteki dijital vitrininizdir. Alıcı ve satıcı arasındaki alışverişi kolaylaştırır. Ürünlerinizi sergilediğiniz ve online müşterilerinizin seçimlerini yaptığı sanal alandır. Web siteniz, online iş kanalınız için ürün rafları, satış personeli ve yazar kasa görevi görür.
                    </Typography>
                    <Divider sx={{
                        backgroundColor:'#F8C954',
                        height:'1.5px',
                        marginTop:'10px',
                        marginBottom:'10px'
                    }} />
                </Grid>
                <Grid item>
                    <Typography fontSize={'35px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
          }}>Özel Yazılım</Typography>
                    <Typography width={'600px'} paddingLeft={'40px'} fontSize={'16px'} fontWeight={'500'}>
                    irmanın mevcut standartlar dışında kendine özgü ve ihtiyaçları doğrultusunda oluşturmak istediği programların bütünüdür. Başka bir deyişle müşterinin yazılıma değil, yazılımın müşteriye uyarlanmasıdır.
                    </Typography>
                    <Divider sx={{
                        backgroundColor:'#F8C954',
                        height:'1.5px',
                        marginTop:'10px',
                        marginBottom:'10px',
                        
                    }} />
                </Grid>
                <Grid item>
                    <Typography fontSize={'35px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
          }}>CRM Sistemi Nedir?</Typography>
                    <Typography width={'600px'} paddingLeft={'40px'} fontSize={'16px'} fontWeight={'500'}>
                    CRM, müşteri ilişkileri yönetimi anlamına gelir. Bir CRM sistemi ile müşteri verilerinizi ve satış, pazarlama, hizmet ve e-ticaret gibi müşteri gerçekleşme aktivitelerinizi otomatikleştirebilir ve entegre edebilirsiniz.
                    </Typography>
                    <Divider sx={{
                        backgroundColor:'#F8C954',
                        height:'1.5px',
                        marginTop:'10px',
                        marginBottom:'10px'
                    }} />
                </Grid>
                <Grid item>
                    <Typography fontSize={'35px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
          }}>ERP Sistemi Nedir?</Typography>
                    <Typography width={'600px'} paddingLeft={'40px'} fontSize={'16px'} fontWeight={'500'}>
                    Kurumsal kaynak planlama (ERP), kurumların muhasebe, satın alma, proje yönetimi, risk yönetimi ve mevzuat uyumunun yanı sıra tedarik zinciri operasyonları gibi günlük iş faaliyetlerini yönetmek için kullandığı bir yazılım türünü ifade eder.
                    </Typography>
                    <Divider sx={{
                        backgroundColor:'#F8C954',
                        height:'1.5px',
                        marginTop:'10px'
                    }} />
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg="6">
        <CardMedia
            component="img"
            image={require('../images/16.png')}
            alt="home"
            height={'630px'}
            sx={{
                marginTop:'15px',
                '@media (max-width: 1000px)': {
                  display: 'none',
                },
              }}
            />
        </Grid>
        <Grid item padding={'15px'} paddingTop={'0px'}>
                    <Typography fontSize={'35px'} sx={{
            letterSpacing:'0px',
            fontWeight:'500',
            wordBreak:'break-word',
          }}>Web Sitesi</Typography>
                    <Typography width={'1180px'} paddingLeft={'40px'} fontSize={'18px'} fontWeight={'500'}>
                    Web, internet üzerindeki servislerden birisidir. İnternet üzerinde yazı, grafik, resim, ses ve hareketli görüntülerden oluşan dökümanları uzaktaki bilgisayarlara iletir. Bu hizmetin görülebilmesi için geri planda çalışan bir çok yazılım vardır.
                    </Typography>
                    </Grid>
    </Grid>
    
    )

}

export default slagon;

