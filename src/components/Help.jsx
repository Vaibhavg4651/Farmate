import React from 'react'
import "../styles/Help.css"
import Navbar from './sub-components/Navbar'
import Aid from './sub-components/Aid'
import Footer from './sub-components/Footer'
import Pollute from './sub-components/Pollute'


const Help = () => {
  return (
    <div className='help'>
      <Navbar/>
      <Pollute/>
      <Aid/>
      <Footer/>
    </div>
  )
}

export default Help