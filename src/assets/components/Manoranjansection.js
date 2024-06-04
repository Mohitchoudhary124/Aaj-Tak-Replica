import React from 'react'
import Manoranjannewscard from './Manoranjannewscard'
import '../css/manoranjansection.css'

function Manoranjansection() {
  return (
    <section>
        <div className='manoranjan-section-outer'>
            <h3> मनोरंजन </h3>
            <div className='manoranjan-section'>
                  <div className='manoranjan-col1'>
                    <div className='manoranjan-col1-row1'>
                        <img src='assets\images\hema-malini-263430427-16x9.avif'/>
                        <p>Hema malini हैट्रिक लगाने की ओर हेमा मालिनी, 1 लाख 80 हजार वोटों से आगे, बोलीं- मथुरा को आगे बढ़ाना है...</p>
                    </div>
                    <div className='manoranjan-col1-row2'><Manoranjannewscard/></div>
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