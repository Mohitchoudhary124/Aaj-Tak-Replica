import React from 'react'
import Header1 from '../components/Header1'
import Headermain from '../components/Headermain'
import CustomizedSnackbar from '../components/CustomizedSnackbar'
import Sponserpartner from '../components/Sponserpartner'
import Mainsection from '../components/Mainsection'
import Scrolltotop from '../components/Scrolltotop'
import Mainvideosection from '../components/Mainvideosection'
import Visualstories from '../components/Visualstories'
import Manoranjansection from '../components/Manoranjansection'
import Footer from '../components/Footer'
import AdComponent from '../components/Adcomponent'
import Chatbot from '../components/Chatbot'

function Homepage() {
  return (
    <>
    <Header1/>
    <Headermain/>
    <CustomizedSnackbar/>
    <Sponserpartner/>
    <Mainsection/>
    <Scrolltotop/>
    <Mainvideosection/>
    <Visualstories/>
    <Manoranjansection/>
    <Chatbot/>
    <AdComponent/>
    <Footer/>
    </>
  )
}

export default Homepage