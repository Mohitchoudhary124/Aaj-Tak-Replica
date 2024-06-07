import React from 'react'
import '../css/mainsection.css'
import Imagenewscol1 from './Imagenewscol1';
import Videoplayermainsec from './Videoplayermainsec';
import Newscardcol2 from './Newscardcol2';
import Newscardcol3 from './Newscardcol3';
import Shortsswiper from './Shortsswiper';


function Mainsection() {
  return (
    <section>
        <div>
            <div className='main-section'>
                <div className='main-sec-inner'>
                    <div className='main-sec-col1'>
                        <div className='main-sec-col1-card1'><Imagenewscol1/></div>
                    </div>
                    <div className='main-sec-col2'>
                        <div className='main-sec-col2-video-player'><Videoplayermainsec/></div>
                        <div className='main-sec-col2-news-cards'>
                            <Newscardcol2/>
                        </div>
                    </div>
                    <div className='main-sec-col3'>
                        <div className='main-sec-col3-content-cards'>
                            <Newscardcol3/>                            
                        </div>
                    </div>
                    <div className='main-sec-col4'>
                        <div className='main-sec-col4-add'>
                            <h3>ADVERTISEMENT</h3>
                            <img src='assets/images/Advertisement-performance-image-dco-5b3bc726-4fbb-474d-af79-9c3223a92f6f.jpg' alt=''/>
                            <h3>Nissan - <span>Sponsored</span></h3>
                            <h3>Choose Magnite. Choose the Right SUV</h3>
                            </div>
                        <div className='main-sec-col4-video-carousal'>
                            <Shortsswiper/>
                            </div>
                        <div className='main-sec-col4-t20-space'>
                            <div><img src='assets/images/t-twenty.webp' alt=''/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mainsection