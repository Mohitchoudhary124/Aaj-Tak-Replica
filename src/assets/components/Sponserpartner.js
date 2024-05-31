import React from 'react'
import '../css/sponserpartner.css'

function Sponserpartner() {
  return (
    <>
    <div>
        <div className='sponser-sec'>
            <div className='sponser-inner'>
                <div><h2>चुनाव 2024</h2></div>
                <div className='presenting-sponser'><h3>presenting-sponser</h3><img src='assets/images/v-guard-logo.webp' alt=''/></div>
                <div className='powered-by'><h3>powered-by</h3><img src='assets/images/macho-sporto-logo.webp' alt=''/></div>
                <div className='co-poweredby'><h3>co-poweredby</h3><img src='assets/images/vimal.webp' alt=''/></div>
                <div className='associate-sponser'>
                    <h3>associate-sponser</h3>
                    <div className='associate-img'>
                    <img src='assets/images/jk-super-cement.webp' alt=''/>
                    <img src='assets/images/honda.webp' alt=''/>
                    <img src='assets/images/housing.webp' alt=''/>
                    <img src='assets/images/shine_100.webp' alt=''/>
                    </div>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sponserpartner