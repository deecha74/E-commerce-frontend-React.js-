import React from 'react'
import Navbar from '../Navbar/Navbar'
import Homepage from '../Homepage/Homepage'
import Trend from '../TrendingProduct/Trend'
import Announcement from '../Announcement/Announcement'
import Slider from '../sliderpart/Slider'
import Footer from '../Footer/Footer'
import { Helmet } from 'react-helmet'
const Mainpage = () => {

  return (
    <>

      <Helmet>
        <title> Bismure E-commerce  </title>
      </Helmet>
      <Homepage />
      <Trend />
      <Announcement />
      <Slider />




    </>
  )
}

export default Mainpage