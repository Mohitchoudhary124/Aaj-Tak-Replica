import * as React from 'react';
import  { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Imagenewscol1() {
   
  const [expanded, setExpanded] = useState(false);
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3933af32437641f88e9017d3b08f51b3');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.status === 'ok' && data.articles.length > 0) {
          const limitedNewsData = data.articles.slice(0, 2);
          setNewsData(limitedNewsData);
          // Initialize expanded state for each card to false
          const initialExpandedState = {};
          limitedNewsData.forEach((_, index) => {
            initialExpandedState[index] = false;
          });
          setExpanded(initialExpandedState);
        } else {
          throw new Error('No articles found');
        }
      } catch (error) {
        console.error('There was a problem fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  const handleExpandClick = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };
 

  return (
    <>
     {newsData !== null && newsData.map((article, index) => (
    <Card key={index} sx={{ maxWidth: 345 }}>
      
          <CardHeader title={article.title} />
          <CardMedia component="img" height="194" image={article.urlToImage ||    'assets/images/image-not-available-download.png'} alt={article.title} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {article.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded[index]}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{article.content}</Typography>
              <Typography paragraph>Published At: {new Date(article.publishedAt).toLocaleString()}</Typography>
              <Typography paragraph>
                Source: {article.source.name}
                {article.author && `, Author: ${article.author}`}
              </Typography>
              <Typography paragraph>
                Read more: <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a>
              </Typography>
            </CardContent>
          </Collapse>
       
    </Card>
      ))}
    </>
    
  );
}