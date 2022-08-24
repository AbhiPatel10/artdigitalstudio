import React from 'react'
import About from '../../Components/About/About';
import Achivement from '../../Components/Achivement/Achivement';
import Contact from '../../Components/contact/contact';
import Footer from '../../Components/Footer/Footer';
import MainHomesec from '../../Components/Main Home Section/mainhomesec';
import Navbar from '../../Components/Navbar'
import Portfolio from '../../Components/Portfolio/Portfolio';
import Testimonial from '../../Components/Testimonial/Testimonial';


const Home = () => {
  return (
    <>
    <div className="hero_area">
      <Navbar />
      <MainHomesec />      
    </div>
      <About />
      <Portfolio />
      <Achivement />
      <Testimonial />
      <Contact />
      <Footer />
    </>

  )
}
export default Home;