import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import Aboutus from '../Components/Aboutus';

 function About() {
  return (
    <div>
    
     
    <Navbar />
    <Hero cName="hero-mid" heroImg=" https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Bengal_Heritage.jpg" title="About"  btnclass="hide" />
    <Aboutus></Aboutus>
    <Footer></Footer>
  
      
    </div>
  )
}
export default About;
