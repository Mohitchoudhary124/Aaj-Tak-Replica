import React from 'react'
import '../css/mainvideosection.css'

function Mainvideosection() {
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
                         <h3>लोकसभा चुनाव के प्रचार में AI का जबरदस्त इस्तेमाल, देखें तस्वीरें</h3>
                    </div>
                    <div className='video-col1-r2'>
                        <video width="225" height="125" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3>PM मोदी फिर जीते तो बनेंगे ये 6 कीर्तिमान, नेहरू की भी होगी बराबरी</h3>
                    </div>
                </div>
                <div className='main-video-sec-col2'>
                    <div className='video-col2-r1'>
                         <video width="600" height="360" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3>नतीजों से पहले EC की प्रेस कॉन्फ्रेंस, द‍िए विपक्ष के आरोपों के जवाब</h3>
                    </div>
                </div>
                <div className='main-video-sec-col3'>
                    <div className='video-col3-r1'>
                         <video width="225" height="125" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3>नतीजों से पहले मोदी से क्यों मिले नीतीश? KC त्यागी ने बताई वजह</h3>
                    </div>
                    <div className='video-col3-r2'>
                         <video width="225" height="125" controls>
                         <source src="assets/videos/03_jun_24_at_congress_hot_vo_mm_1024_512.mp4" type="video/mp4"/>                
                         </video>
                         <h3>'नया स्वतंत्रता आंदोलन लड़ने तैयार है जनता', केंद्र पर अख‍िलेश का वार</h3>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Mainvideosection
