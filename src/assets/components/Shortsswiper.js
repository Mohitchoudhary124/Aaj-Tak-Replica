import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/shortswiper.css'


function Shortswiper() {
    const options = {
        stagePadding:80,
        loop: true,
        margin: 10,
        video:true,
        nav: true,
        dots:false,
        items:1,
        merge:true,
        video:true,
        lazyLoad:true,
        center:true,
        
        autoplay:true,
        autoplayTimeout:3000,
        // responsive: {
        //   0: {
        //     items: 0.1,
        //   },
        //   600: {
        //     items: 0.8,
        //   },
        //   1000: {
        //     items: 1,
        //   },
        // },
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
                    <div class='item slider2item'>
                        <div className='slider-inner'>
                            <div className='slider-inner-content'>
                                <div className='slider-content-top'>
                                <a class="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a>
                                <h2>Petra Liebherr</h2>
                                </div>
                                <div className='slider-content-middle'>
                                <h2>Wir schätzen</h2>
                                </div>
                            
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