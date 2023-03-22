import React from 'react'
import "../styles/Home.css"
import Header from './sub-components/Header'
import Navbar from './sub-components/Navbar'
import Aid from './sub-components/Aid'
import Footer from './sub-components/Footer'


const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Header/>
        <Aid/>
      <Footer />
    </div>
  )
}

export default Home;