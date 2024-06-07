import * as React from 'react';
import  { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Newscardcol3() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3933af32437641f88e9017d3b08f51b3');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching the news data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    {news.slice(0, 10).map((article, index) => (
    <Card sx={{ display: 'flex', maxWidth: 345 }} style={{ borderBottom:'1px solid grey',borderRadius:'0px' }}>
      <CardActionArea >
       
        <CardContent style={{ flex: '1 1 auto' }}>
          
          <Typography variant="body2" color="text.secondary">
          {article.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     ))}
     </div>
  );
}