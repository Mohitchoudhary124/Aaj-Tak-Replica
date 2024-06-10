import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/visualstories.css'


const options = {
    // stagePadding:90,
    loop: true,
    margin: 30,
    nav: true,
    dots:false,
    autoplay:false,
    autoplayTimeout:2000,
    items:6,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
   };
 
function Slidersection() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=3933af32437641f88e9017d3b08f51b3');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching the news data', error);
      }
    };

    fetchData();
  }, []);
 


  return (   
    <section className='slider-sec'>
      <div className='slider1'>
            <h2>विजुअल स्टोरीज़</h2>
         <div className='slider1-inner'>
          <OwlCarousel className="owl-theme" {...options}>
              
          <div className="item">
          {news.slice(10, 11).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'} className="owl-item-img"/>
                        <p className='ovarlay'>{article.title}</p>
                        </>
                    ))}
          </div>
          <div className="item">
          {news.slice(11, 12).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'} className="owl-item-img"/>
                        <p className='ovarlay'>{article.title}</p>
                        </>
                    ))}           
          </div>
          <div className="item">
          {news.slice(12, 13).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'} className="owl-item-img"/>
                        <p className='ovarlay'>{article.title}</p>
                        </>
                    ))}      
          </div>
          <div className="item">
          {news.slice(13, 14).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'} className="owl-item-img"/>
                        <p className='ovarlay'>{article.title}</p>
                        </>
                    ))}           
          </div>
          <div className="item">
          {news.slice(14, 15).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'} className="owl-item-img"/>
                        <p className='ovarlay'>{article.title}</p>
                        </>
                    ))}        
          </div>
          <div className="item">
          {news.slice(15, 16).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'} className="owl-item-img"/>
                        <p className='ovarlay'>{article.title}</p>
                        </>
                    ))}           
          </div>
          <div className="item">
          {news.slice(16, 17).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'} className="owl-item-img"/>
                        <p className='ovarlay'>{article.title}</p>
                        </>
                    ))}           
          </div>
          <div className="item">
          {news.slice(17, 18).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'} className="owl-item-img"/>
                        <p className='ovarlay'>{article.title}</p>
                        </>
                    ))}          
          </div>
        
          
          </OwlCarousel>
            <div className='visual-stories-aside'>
                 <h4>Advertisement</h4>
                 <img src='assets\images\JK.webp' alt=''/>
            </div>
          </div>
      </div>

  
  </section>
  )
}

export default Slidersection