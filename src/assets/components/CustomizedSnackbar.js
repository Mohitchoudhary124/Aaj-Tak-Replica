import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState, useEffect } from 'react'

export default function CustomizedSnackbar() {
  
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3933af32437641f88e9017d3b08f51b3');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching the news data', error);
      }
    };

    fetchData();
  }, []);
 


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <Snackbar open={open}  onClose={handleClose} style={{ position: 'fixed', top: '5%', marginTop: '50px', marginLeft: 'auto',marginRight:'auto', position:'relative',maxWidth:'800px',display:'flex',flexDirection:'row',textAlign:'center'}}    >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: 'auto',bgcolor: '#d90000',
          color: 'white',borderRadius:'30px' }}
        
        >{news.slice(14, 15).map((article, index) => (<p>BREAKING NEWS | {article.title}</p>))}
        </Alert>
      </Snackbar>
    </div>
  );
}
