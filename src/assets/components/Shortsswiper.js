import React,{ useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/shortswiper.css'



function Shortswiper() {

     
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3933af32437641f88e9017d3b08f51b3');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching the news data', error);
      }
    };

    fetchData();
  }, []);
 
    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots:false,
        items:2,
        merge:true,
        video:true,
        lazyLoad:true,
        center:true
      };
  return (
    <section>
        <div>
            <div className='shortsswiper'>
                        <div className='shortswiper-heading'>
                            <h2> शॉर्ट वीडियो </h2>
                        </div>
                 <div className='shortsswiper-main'>
              <OwlCarousel className='owl-theme' {...options} >
                       <div class='item shortsswiper-inner'>
                            <div className='shortsswiper-inner-content'>
                                   <div className='shortsswiper-logo-image'><img src='assets/images/aajtak-logo-fav.png'/></div>
                                    <video width="140" height="120" controls>
                                    <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                                    Your browser does not support the video tag.
                                    </video>
                                    <div className='slider-content-middle'>
                                              {news.slice(0, 1).map((article, index) => (
                                                <>
                                                <p>{article.title}</p>
                                                </>
                                            ))}
                                    </div>                            
                            </div>
                       </div>
                       <div class='item shortsswiper-inner'>
                            <div className='shortsswiper-inner-content'>
                                   <div className='shortsswiper-logo-image'><img src='assets/images/aajtak-logo-fav.png'/></div>
                                    <video width="140" height="120" controls>
                                    <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                                    Your browser does not support the video tag.
                                    </video>
                                    <div className='slider-content-middle'>
                                              {news.slice(1, 2).map((article, index) => (
                                                <>
                                                <p>{article.title}</p>
                                                </>
                                            ))}
                                    </div>                            
                            </div>
                       </div>
                       <div class='item shortsswiper-inner'>
                            <div className='shortsswiper-inner-content'>
                                   <div className='shortsswiper-logo-image'><img src='assets/images/aajtak-logo-fav.png'/></div>
                                    <video width="140" height="120" controls>
                                    <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                                    Your browser does not support the video tag.
                                    </video>
                                    <div className='slider-content-middle'>
                                              {news.slice(2, 3).map((article, index) => (
                                                <>
                                                <p>{article.title}</p>
                                                </>
                                            ))}
                                    </div>                            
                            </div>
                       </div>
                    
            
    
                </OwlCarousel>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Shortswiper