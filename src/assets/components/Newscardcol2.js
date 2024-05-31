import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Newscardcol2() {
  return (
    <Card sx={{ display: 'flex', maxWidth: 345,border: 'none', boxShadow: 'none' }}>
      <CardActionArea style={{ display: 'flex' }}>
        <CardMedia
          component="img"
          height="60"
          image="assets/images/pm-modi-at-vivekananda-rock-.avif"
          alt="pm modi at vivekananda"
          style={{ flex: '0 0 auto',width:105 }} // Keeps image fixed width
        />
        <CardContent style={{ flex: '1 1 auto' }}>
          
          <Typography variant="body2" color="text.secondary">
          10 पहले ध्यान, फिर शिव और सूर्य साधना... देखें विवेकानंद रॉक से PM मोदी की तस्वीरें
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}