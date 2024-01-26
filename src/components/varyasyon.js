import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import React, { Component } from 'react';

class varyasyon extends Component {
    render() {
        return (
          <Grid container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          paddingBottom={'40px'}
        >
            <Grid item xs="10" lg="5" color={'white'}>
                  <Grid container direction={'row'} justifyContent='flex-start'>
                    <Grid item xs='0' lg='2'></Grid>
                    <Grid item> 
                    <Typography sx={{display: 'flex',
                        flexDirection: 'center', paddingLeft: '40px', fontSize:"28px"}} fontFamily={'cursive'} >
                        Sıkılmadınız mı ?
                    </Typography>
                    </Grid>
                  </Grid>
                    <Card sx={{ background: 'none', boxShadow: 'none', maxWidth: '500px'}} >
                        <CardContent>
                            <Typography fontFamily={'sans-serif'} color={'white'} fontSize={'20px'}>
                                Eskimiş ve geç yüklenen projelerden sıkılmadınız mı? İşte buradayız. Son teknolojilerle tasarladığımız projelerimiz ve web sitelerimizle her zaman güncel ve hızlı bir deneyim yaşayın. Bizimle bir adım öne geçmek istemez misiniz?
                            </Typography>
                        </CardContent>
                    </Card>
            </Grid>
            <Grid item xs="10" lg="5" 
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse'
                }}>
                <Card sx={{ background: 'none', boxShadow: 'none', maxWidth: '500px'}}>
                    <Typography sx={{paddingRight:"20px", fontSize:"28px"}} fontFamily={'cursive'} textAlign={"center"}>
                    Hala istediğinizi alamıyor musunuz ?
                    </Typography>
                        <CardContent>
                            <Typography fontFamily={'sans-serif'} fontSize={'20px'}>                    
                            Her an güncellenebilen projelerle sorunlarınıza hızlı ve etkili çözümler sunuyoruz. İstekleriniz doğrultusunda şekillendirilebilen projelerimiz, istediğiniz zaman istediğiniz özellikleri ekleyebilmeniz veya çıkarabilmeniz için esneklik sunuyor. Sizin ihtiyaçlarınıza özel tasarımlar ile yanınızdayız.
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
            <Grid item xs="10" lg="5">
                <Typography sx={{display: 'flex',
                    flexDirection: 'center',paddingLeft: '40px', fontSize:"28px"}} fontFamily={'cursive'} textAlign={"center"}>
                    Sistematik çalışmaya nedersiniz?
                </Typography>
            <Card sx={{ background: 'none', boxShadow: 'none', maxWidth: '500px'}}>
                    <CardContent>
                        <Typography fontFamily={'sans-serif'} fontSize={'20px'}>
                        İşlerinizi planlı ve düzenli yönetmek artık bir lüks değil, bir ihtiyaç. yeni geliştirdiğimiz projelerde, basit ve güvenilir panellerle işlerinizi kolayca takip edin. hızlı, etkili ve güçlü çözümlerle iş süreçlerinizi yükseltin.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs="10" lg="5" 
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse'
                }}>
                <Card sx={{ background: 'none', boxShadow: 'none', maxWidth: '500px'}}>
                    <Typography sx={{paddingRight:"20px", fontSize:"28px", color: 'whitesmoke'}} fontFamily={'cursive'} textAlign={"center"}>
                        Sıkılmadınız mı ?
                    </Typography>
                        <CardContent>
                            <Typography fontFamily={'sans-serif'} fontSize={'20px'}  color={'white'}>                    
                                İstediğiniz zaman güncellenebilen projeler ile sorunlarınıza çözüm getirdik..
                                İsteklerinize göre oluşturulabilen, 
                                istediğiniz zaman dilediğiniz kısımları çıkarabilen, ekleyebilen proje tasarımları ile sizlerleyiz.
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
          </Grid>
        );
    }
}

export default varyasyon;
