import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import React, { Component } from 'react';

class varyasyon extends Component {
    render() {
        return (
          <Grid container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
            <Grid item xs="10" lg="5" color={'white'}>
                
                <Typography sx={{display: 'flex',
                    flexDirection: 'center', paddingLeft: '40px', fontSize:"28px"}} fontFamily={'cursive'} >
                    Sıkılmadınız mı ?
                </Typography>
                <Card sx={{ background: 'none', boxShadow: 'none', maxWidth: '500px'}} >
                    <CardContent>
                        <Typography fontFamily={'sans-serif'} color={'white'} fontSize={'20px'}>
                            Eskimiş ve geç yüklenen projelerden sıkılmadınız mı? İşte bu yüzden buradasınız. 
                            Son teknolojileri kullandığımız için her zaman en güncel projeleriniz ve web 
                            siteleriniz ile bir adım önde olmak istemezmisiniz?
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
                        Hala isteğinize göre para veremiyor musunuz?
                    </Typography>
                        <CardContent>
                            <Typography fontFamily={'sans-serif'} fontSize={'20px'}>                    
                                İstediğiniz zaman güncellenebilen projeler ile sorunlarınıza çözüm getirdik..
                                İsteklerinize göre oluşturulabilen, 
                                istediğiniz zaman dilediğiniz kısımları çıkarabilen, ekleyebilen proje tasarımları ile sizlerleyiz.
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
                            Planlı ve daha düzenli işlerinizi yürütmek artık bir lüks değil. 
                            Son geliştirdiğimiz projelerde basit ve güvenilir paneller üzerinden 
                            işlerinizi kolayca takip edebilirsiniz.
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
