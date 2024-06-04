import React from 'react'
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
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 2.5,
//       },
//       1000: {
//         items: 4,
//       },
//     },
   };
 
function Slidersection() {
  return (   
    <section className='slider-sec'>
      <div className='slider1'>
            <h2>विजुअल स्टोरीज़</h2>
         <div className='slider1-inner'>
          <OwlCarousel className="owl-theme" {...options}>
              
          <div className="item">
            <img src='assets/images/amitabh jayacropped-Snapinstaapp_447627016_7591343284320600_778847395235372929_n_1179.avif' className="owl-item-img" alt=''/>
            <div className='ovarlay'><a>अमिताभ-जया की शादी को हुए 51 साल, नानू-नानी पर नव्या ने</a></div>
          </div>
          <div className="item">
            <img src='assets\images\cropped-sharmin-7.avif' className="owl-item-img" alt=''/>
            <div className='ovarlay'><a>'आलमजेब को मार दो या शर्मिन को करो बाहर', भंसाली से फैन्स क्यों कर रहे ये..</a></div>           
          </div>
          <div className="item">
            <img src='assets\images\cropped-coverimage-gold.avif' className="owl-item-img" alt=''/>
            <div className='ovarlay'><a>Gold Price Today: दिल्ली में सोने के दाम में मामूली गिरावट, जानें</a></div>        
          </div>
          <div className="item">
            <img src='assets\images\cropped-coverimage-silver.webp' className="owl-item-img" alt=''/>
            <div className='ovarlay'><a>Silver Price Today: जयपुर से लेकर कोलकाता तक आज  </a></div>           
          </div>
          <div className="item">
            <img src='assets\images\cropped-Kohli-T20-1.avif' className="owl-item-img" alt=''/>
            <div className='ovarlay'><a>फ्री में देख पाएंगे T20 World Cup के सभी मैच, यहां होंगे Live Stream</a></div>        
          </div>
          <div className="item">
            <img src='assets\images\cropped-remo-1.avif' className="owl-item-img" alt=''/>
            <div className='ovarlay'><a>शादी से पहले मां बनी डायरेक्टर की पत्नी, घरवालों से छिपाया सच, सालों बाद किया खुलासा</a></div>           
          </div>
          <div className="item">
              <img src='assets\images\cropped-rohit-sharma-T20-World-Cup-Trophy.webp' className="owl-item-img" alt=''/>
            <div className='ovarlay'><a>कोहली करें ओपनिंग, रोहित को... T20 वर्ल्ड कप के बीच इस दिग्गज का बयान VIRAL</a></div>           
          </div>
          <div className="item">
            <img src='assets\images\cropped-yh-scaled-1.avif' className="owl-item-img" alt=''/>
            <div className='ovarlay'><a>इस 7-सीटर फैमिली कार में मचाया तहलका! 1.5 लाख लोगों ने खरीदा</a></div>           
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