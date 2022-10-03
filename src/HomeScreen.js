import React from 'react'
import Banner from './components/Banner'
import Nav from './components/Nav'
import './styles/HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="homeScreen">
       <Nav />
       <Banner />

        {/* row */}
    </div>
  )
}

export default HomeScreen