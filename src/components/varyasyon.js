import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { Component } from 'react';

class varyasyon extends Component {
    render() {
        return (
          <Grid container alignItems="center" justifyContent={'center'} sx={{paddingTop:"40px"}}>
            <Grid item xs="10" lg="5">
                <Typography sx={{paddingRight:"80px"}} textAlign={"center"}>Sıkılmadınız mı ?</Typography>
                <Card sx={{ background: 'none', boxShadow: 'none'}}>
                    <CardContent>
                    Eskimiş ve geç yüklenen projelerden sıkılmadınız mı? İşte bu yüzden buradasınız. Son teknolojileri kullandığımız için her zaman en güncel projeleriniz ve web siteleriniz ile bir adım önde olmak istemezmisiniz?s
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg="1"></Grid>
            <Grid item xs="10" lg="5" >
            <Card sx={{ background: 'none', boxShadow: 'none'}}>
            <Typography sx={{paddingRight:"80px"}} textAlign={"center"}>Hala isteğinize göre para veremiyor musunu?</Typography>

                    <CardContent>
                    İstediğiniz zaman güncellenebilen projeler ile sorunlarınıza çözüm getirdik..
İsteklerinize göre oluşturulabilen, 
istediğiniz zaman dilediğiniz kısımları çıkarabilen, ekleyebilen proje tasarımları ile sizlerleyiz.
                        
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs="10" lg="5">
            <Card sx={{ background: 'none', boxShadow: 'none'}}>
                    <CardContent>
                        aslann asıfklsafn lkasfjklasfjklaf nıaksflkasfklalksf 
                        şlkasflmkasf lkansfklnasfkln ansjlfnlkjasfnklşk
                        
                    </CardContent>
                </Card>
            </Grid>
            <Grid item lg="1"></Grid>
            <Grid item xs="10" lg="5">
            <Card sx={{ background: 'none', boxShadow: 'none'}}>
                    <CardContent>
                        aslann asıfklsafn lkasfjklasfjklaf nıaksflkasfklalksf 
                        şlkasflmkasf lkansfklnasfkln ansjlfnlkjasfnklşk
                        
                    </CardContent>
                </Card>
            </Grid>
          </Grid>
        );
    }
}

export default varyasyon;
