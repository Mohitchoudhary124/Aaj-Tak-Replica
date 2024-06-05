import React from 'react'
import Manoranjannewscard from './Manoranjannewscard'
import '../css/manoranjansection.css'
import  { useState, useEffect } from 'react';


function Manoranjansection() {

    
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=2aea1498ee4a40aca804d8e35b44b0ff');
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
                        <img src={article.urlToImage ||    'assets\images\hema-malini-263430427-16x9.avif'}/>
                        <p>{article.title}</p>
                        </>
                    ))}
                    </div>
                    <div className='manoranjan-col1-row2'>  {news.slice(1, 2).map((article, index) => (
                        <>
                        <img src={article.urlToImage ||    'assets\images\hema-malini-263430427-16x9.avif'}/>
                        <p>{article.title}</p>
                        </>
                    ))}</div>
                  </div>
                  <div className='manoranjan-col2'>
                    <div className='manoranjan-col2-row1'><Manoranjannewscard/></div>
                    <div className='manoranjan-col2-row2'><Manoranjannewscard/></div>
                    <div className='manoranjan-col2-row3'><Manoranjannewscard/></div>
                  </div>
                  <div className='manoranjan-col3'>
                    <div className='manoranjan-col3-row1'><Manoranjannewscard/></div>
                    <div className='manoranjan-col3-row2'><Manoranjannewscard/></div>
                    <div className='manoranjan-col3-row3'><Manoranjannewscard/></div>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Manoranjansection