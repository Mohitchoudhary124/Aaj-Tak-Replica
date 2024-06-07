import React,{ useState, useEffect } from 'react'
import '../css/mainvideosection.css'

function Mainvideosection() {

    
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3933af32437641f88e9017d3b08f51b3');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching the news data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
        <div>
            <div className='main-video-section'>
                <h2>
                वीडियो
                </h2>
            <div className='main-video-section-inner'>

                <div className='main-video-sec-col1'>
                    <div className='video-col1-r1'>
                         <video width="225" height="125" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3> {news.slice(0, 1).map((article, index) => (
                        <>
                        <p>{article.title}</p>
                        </>
                    ))}</h3>
                    </div>
                    <div className='video-col1-r2'>
                        <video width="225" height="125" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3>{news.slice(1, 2).map((article, index) => (
                        <>
                        <p>{article.title}</p>
                        </>
                    ))}</h3>
                    </div>
                </div>
                <div className='main-video-sec-col2'>
                    <div className='video-col2-r1'>
                         <video width="600" height="360" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3>{news.slice(2, 3).map((article, index) => (
                        <>
                        <p>{article.title}</p>
                        </>
                    ))}</h3>
                    </div>
                </div>
                <div className='main-video-sec-col3'>
                    <div className='video-col3-r1'>
                         <video width="225" height="125" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3>{news.slice(3, 4).map((article, index) => (
                        <>
                        <p>{article.title}</p>
                        </>
                    ))}</h3>
                    </div>
                    <div className='video-col3-r2'>
                         <video width="225" height="125" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3>{news.slice(4, 5).map((article, index) => (
                        <>
                        <p>{article.title}</p>
                        </>
                    ))}</h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Mainvideosection
