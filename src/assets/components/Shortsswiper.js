import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/shortswiper.css'


function Shortswiper() {
    const options = {
        // stagePadding:80,
        loop: true,
         margin: 10,
         nav: true,
         dots:false,
         items:2,
         merge:true,
         video:true,
        lazyLoad:true,
        center:true,
        // left:true,
        
        // autoplay:true,
        // autoplayTimeout:3000,
        responsive: {
          0: {
            items: 0,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 2,
          },
        },
      };
  return (
    <section>
        <div>
            <div className='shortsswiper'>
                        <div className='shortswiper-heading'>
                            <h2> शॉर्ट वीडियो </h2>
                        </div>
              <OwlCarousel className='owl-theme' {...options} >
                 <div className='shortsswiper-main'>
                       <div class='item shortsswiper-inner'>
                            <div className='shortsswiper-inner-content'>
                                   <div className='shortsswiper-logo-image'><img src='assets/images/aajtak-logo-fav.png'/></div>
                                    <video width="140" height="120" controls>
                                    <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                                    Your browser does not support the video tag.
                                    </video>
                                    <div className='slider-content-middle'>
                                        <h2>EXIT Poll</h2>
                                        <h2> ने अडानी की सभी कंपनियों में भरा जोश, 15% से ज्यादा तक की तेजी...निवेशक गदगद!</h2>
                                    </div>                            
                            </div>
                       </div>
                    
            
    
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </section>
  )
}

export default Shortswiper