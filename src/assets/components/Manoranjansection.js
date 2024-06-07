import React from 'react'
import Manoranjannewscard from './Manoranjannewscard'
import '../css/manoranjansection.css'
import  { useState, useEffect } from 'react';


function Manoranjansection() {

    
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
 


  return (
    <section>
        <div className='manoranjan-section-outer'>
            <h3> मनोरंजन </h3>
            <div className='manoranjan-section'>
                  <div className='manoranjan-col1'>
                    <div className='manoranjan-col1-row1'>
                    {news.slice(0, 1).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'}/>
                        <p>{article.title}</p>
                        </>
                    ))}
                    </div>
                    <div className='manoranjan-col1-row2'>  {news.slice(1, 2).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'}/>
                        <p>{article.title}</p>
                        </>
                    ))}</div>
                  </div>
                  <div className='manoranjan-col2'>
                    <div className='manoranjan-col2-row1'>
                    {news.slice(2, 3).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'}/>
                        <p>{article.title}</p>
                        </>
                    ))}
                    </div>
                    <div className='manoranjan-col2-row2'>
                    {news.slice(3, 4).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'}/>
                        <p>{article.title}</p>
                        </>
                    ))}
                    </div>
                    <div className='manoranjan-col2-row3'>
                    {news.slice(4, 5).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'}/>
                        <p>{article.title}</p>
                        </>
                    ))}
                    </div>
                  </div>
                  <div className='manoranjan-col3'>
                    <div className='manoranjan-col3-row1'>
                    {news.slice(5, 6).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'}/>
                        <p>{article.title}</p>
                        </>
                    ))}
                    </div>
                    <div className='manoranjan-col3-row2'>
                    {news.slice(6, 7).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'}/>
                        <p>{article.title}</p>
                        </>
                    ))}
                    </div>
                    <div className='manoranjan-col3-row3'>
                    {news.slice(7, 8).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets/images/image-not-available-download.png'}/>
                        <p>{article.title}</p>
                        </>
                    ))}
                    </div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Manoranjansection