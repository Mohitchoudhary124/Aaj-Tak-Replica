import React from 'react'
import '../css/header1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faUser } from '@fortawesome/free-solid-svg-icons';

function Header1() {
  return (
    <section>
        <div>
            <div className='header-upper'>
                <div className='header-upper-content'>
                    <div className='content-list1'>
                        <ul>
                            <li><span>Aaj Tak</span></li>
                            <li>বাংলা</li>
                            <li>Aaj Tak Campus</li>
                            <li>GNTTV</li>
                            <li>Lallantop</li>
                            <li>India Today</li>
                            <li>Business Today</li>
                            <li>BT Bazaar</li>
                            <li>Cosmopolitan</li>
                            <li>Harper's Bazaar</li>
                            <li>Reader’s Digest</li>
                            <li>Northeast</li>
                            <li>Malayalam</li>
                        </ul>
                    <span className='more-list-icon'><FontAwesomeIcon icon={faChevronDown} /></span>
                    <div className='header1-signin'>
                        <h3>Sign In <FontAwesomeIcon icon={faUser} /></h3>
                    </div>
                    </div>
                    <div className='content-list2'>
                    <ul>
                        <li>Sports Tak</li>
                        <li>Crime Tak</li>
                        <li>Astro Tak</li>
                        <li>Gaming</li>
                        <li>Brides Today</li>
                        <li>Ishq FM</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header1