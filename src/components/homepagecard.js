import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import '../App.css';

const homepagecard = () => {
  return (
        <Card sx={{ maxWidth: 450, background: 'none', boxShadow: 'none'}}>
            <div  className="centered-image-container">
      <CardMedia 
        component="img"
        image={require('../images/pc.png')}
        alt="Sample Image"
        sx={{ width: 151 }}
        className="centered-image"
      /></div>
      <CardContent>
        <Typography variant="h4"color={'rgba(255, 238, 238, 1)'} fontFamily='Josefin Sans'component="div">
        İsteğe özel proje geliştirme
        </Typography>
        <Typography variant="body2" color={'rgba(255, 238, 238, 1)'} fontFamily='Josefin Sans' align="left" fontSize={'22px'}>
       <h4> Analiz ve Gereksinimlerin Belirlenmesi: </h4>
        Müşteriyle etkileşimde bulunularak, iş ihtiyaçları, özel gereksinimler ve hedefler belirlenir. Bu aşamada, projenin hedef kitlesi, kullanım senaryoları ve beklentiler üzerinde odaklanılır.

<h4>Planlama ve Tasarım: </h4>
Belirlenen gereksinimlere dayanarak, projenin teknik altyapısı ve tasarımı oluşturulur. Bu aşamada, yazılımın mimarisi, veritabanı tasarımı ve kullanıcı arayüzü planlanır.

<h4>Geliştirme:</h4> 
Tasarım aşamasında belirlenen plana göre yazılım kodlanır. Bu süreçte, yazılım geliştiricileri belirlenen gereksinimlere uygun olarak kodlama yaparlar.

<h4>Test ve Doğrulama:</h4> 
Geliştirilen yazılım, belirlenen test senaryolarına tabi tutularak doğrulanır ve hatalar giderilir. Bu aşama, yazılımın güvenilirliği ve performansı açısından önemlidir.

<h4>Dağıtım ve Uygulama: </h4>


Sürekli Destek ve Güncelleme: Yazılımın kullanımı sırasında ortaya çıkan sorunların çözümü ve müşteri taleplerine göre güncellemelerin sağlanması.

Kişiye özel yazılım geliştirme, genellikle belirli bir işletmenin ihtiyaçlarına özel olarak uyarlanmış çözümleri içerir ve genellikle ticari yazılımların genel gereksinimlerini karşılamaktan daha spesifik ve özelleştirilmiş bir yaklaşım sunar.
        </Typography>
      </CardContent></Card>
  );
};

export default homepagecard;
