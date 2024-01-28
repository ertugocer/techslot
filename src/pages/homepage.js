import React from "react";
import {
    CardMedia,
    Grid,
    Typography
} from '@mui/material'
import '../images/home.jpg'
import '../App.css';
import Slagon from '../components/slagon'
import HomeCard from '../components/homepagecard'
import Varyasyon from '../components/varyasyon'
import Mison from '../components/mison'

const home = () => {
    return (
        <Grid container direction={'column'} className="ana">
        <Grid>
            <CardMedia
            component="img"
            image={require('../images/home.jpg')}
            alt="home"
            sx={{
                '@media (max-width: 1000px)': {
                  display: 'none',
                },
              }}
            />
        </Grid>
        <Grid>
            <Slagon />
            </Grid>
            <HomeCard
            image={require('../images/pc.png')}
            title="İsteğe Özel Proje Geliştirme"
            title2="Analiz ve Gereksinimlerin Belirlenmesi"
            text="Müşteriyle etkileşimde bulunularak, iş ihtiyaçları, özel gereksinimler ve hedefler belirlenir. Bu aşamada, projenin hedef kitlesi, kullanım senaryoları ve beklentiler üzerinde odaklanılır."
            title3="Planlama ve Tasarım"
            text1="Belirlenen gereksinimlere dayanarak, projenin teknik altyapısı ve tasarımı oluşturulur. Bu aşamada, yazılımın mimarisi, veritabanı tasarımı ve kullanıcı arayüzü planlanır."
            title4="Geliştirme"
            text2="Tasarım aşamasında belirlenen plana göre yazılım kodlanır. Bu süreçte, yazılım geliştiricileri belirlenen gereksinimlere uygun olarak kodlama yaparlar."
            title5="Test ve Doğrulama"
            text3="Geliştirilen yazılım, belirlenen test senaryolarına tabi tutularak doğrulanır ve hatalar giderilir. Bu aşama, yazılımın güvenilirliği ve performansı açısından önemlidir."
            title6="Dağıtım ve Uygulama"
            text4="Sürekli Destek ve Güncelleme: Yazılımın kullanımı sırasında ortaya çıkan sorunların çözümü ve müşteri taleplerine göre güncellemelerin sağlanması. Kişiye özel yazılım geliştirme, genellikle belirli bir işletmenin ihtiyaçlarına özel olarak uyarlanmış çözümleri içerir ve genellikle ticari yazılımların genel gereksinimlerini karşılamaktan daha spesifik ve özelleştirilmiş bir yaklaşım sunar. bende bu şekilde bir yazı var "
            />
            <div dir="rtl">
            <HomeCard 
            image={require('../images/phone.png')}
            title="Mobil aplikasyon geliştirme"
            title2=""
            /></div>
            <HomeCard  
            image={require('../images/program.png')}
            title="Uygulama Geliştirme"
            />
            <div dir="rtl">
            <HomeCard 
            image={require('../images/web.png')}
            title="Web sitesi geliştirme"
            /></div>
            <Grid container direction={'column'}alignItems={"center"} justifyContent={"center"} sx={{paddingTop:"330px"}}>
            <Grid item  textAlign={"center"} height={"500px"} >
            <Typography fontSize={"49px"} fontFamily={'cursive'} fontStyle={"revert-layer"}>
                Neden bizi tercih etmelisiniz
            </Typography>
            </Grid></Grid>
            <Varyasyon />
            <Mison />
        </Grid>







        
    )

}

export default home;