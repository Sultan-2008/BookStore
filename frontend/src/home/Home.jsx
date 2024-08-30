import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/banner'
import Footer from '../components/Footer'
import FreeBooks from '../components/FreeBooks'


function Home() {
  return (
    <>
    <div>
      <NavBar/>
      <Banner/>
      <FreeBooks/>
      <Footer/>
    </div>
    </>
  )
}

export default Home;