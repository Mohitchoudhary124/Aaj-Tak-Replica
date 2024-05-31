import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Newscardcol3() {
  return (
    <Card sx={{ display: 'flex', maxWidth: 345 }} style={{ borderBottom:'1px solid grey',borderRadius:'0px' }}>
      <CardActionArea >
       
        <CardContent style={{ flex: '1 1 auto' }}>
          
          <Typography variant="body2" color="text.secondary">
          4 जून को क्‍या होगा? ab ki baar 400 paar एक्‍सपर्ट बोले- NDA सरकार नहीं बन पाई तो 20% गिरेगा शेयर बाजार!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}