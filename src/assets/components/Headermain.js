import React, { useState, useEffect } from 'react'
import '../css/headermain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind,faBell,faRadio,faTv,faMagnifyingGlass,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import TemporaryDrawer from './Temporarydrawer';

function Headermain() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <section>
        <div>
            <div className={scrolled ? 'scrolled' : 'main-header'}>
                <div className='main-header-drawer'><TemporaryDrawer/></div>
                <div className={scrolled ? 'small-logo img' : 'main-logo img'}><img src='assets/images/aajtak-logo-fav.png' alt=''/></div>
                <div className='header-list'>
                    <ul>
                        <li>होम</li>
                        <li>चुनाव 2024</li>
                        <li>भारत <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>मनोरंजन <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>खेल <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>धर्म <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>लाइफस्टाइल <FontAwesomeIcon icon={faChevronDown} /></li>
                        <li>वेब स्टोरी <FontAwesomeIcon icon={faChevronDown} /></li>
                    </ul>
                <div className='header-list1'>
                    <div className='lang-edition'><h3>EDITION <span><img src='' alt=''/> IN <FontAwesomeIcon icon={faChevronDown} /></span></h3></div>
                    <ul>
                        <li> <FontAwesomeIcon icon={faWind} />  AQI</li>
                        <li> <FontAwesomeIcon icon={faBell} /> </li>
                        <li> <FontAwesomeIcon icon={faRadio} /> </li>
                        <li> <FontAwesomeIcon icon={faTv} /> </li>
                        <li> <FontAwesomeIcon icon={faMagnifyingGlass} /> </li>
                    </ul>
                </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Headermain