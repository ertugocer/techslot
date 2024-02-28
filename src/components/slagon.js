import React from "react";
import {
    CardMedia,
    Grid,
    Typography,
    Divider
} from '@mui/material';
import '../classes/Salgon.css'


const slagon = () => {
    return (
    <Grid container className="container">
        <Grid item xs="12" lg="6" padding={'15px'} paddingBottom={'0px'} >
            <Grid container
                direction="column"
                justifyContent="flsex-start"
                alignItems="flex-end">
                <Grid item xs>
                    <Typography className="HeadGeneral" >E-Ticaret</Typography>
                    <Typography className="TextGeneral">
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
                    <Typography className="HeadGeneral">Özel Yazılım</Typography>
                    <Typography className="TextGeneral">
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
                    <Typography className="HeadGeneral">CRM Sistemi Nedir?</Typography>
                    <Typography className="TextGeneral">
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
                    <Typography className="HeadGeneral" >ERP Sistemi Nedir?</Typography>
                    <Typography className="TextGeneral" >
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
        <Grid item lg="6"  className="image-container">
        <CardMedia
            component="img"
            image={require('../images/16.png' )}
            alt="home"
            className="ImageClasses"/>
        </Grid>
        <Grid  padding={'15px'} paddingTop={'0px'} >
                    <Typography className="HeadGeneral2">Web Sitesi</Typography>
                    <Typography className="Webinfo">
                    Web, internet üzerindeki servislerden birisidir. İnternet üzerinde yazı, grafik, resim, ses ve hareketli görüntülerden oluşan dökümanları uzaktaki bilgisayarlara iletir. Bu hizmetin görülebilmesi için geri planda çalışan bir çok yazılım vardır.
                    </Typography>
                    </Grid>
    </Grid>
    )

}

export default slagon;

