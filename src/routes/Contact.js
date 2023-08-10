import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

import Contactform from '../Components/contactform';

 function Contact() {
  return (
    <div>
    
     
    <Navbar />
    <Hero cName="hero-mid" heroImg=" https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/05/Visit-in-Kolkata-1.jpg" title="Contact Us"  btnclass="hide" />
    <Contactform></Contactform>
    <Footer></Footer>
  
    
      
    </div>
  )
}
export default Contact;
