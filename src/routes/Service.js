import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import Trip from '../Components/trip';

function Service() {
  return (
    <div>
       
       <Navbar />
    <Hero cName="hero-mid" heroImg=" https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/11/14104746/Feature-Image-Darjeeling-Toy-Train.jpg" title="Our Service"  btnclass="hide" />
    <Trip></Trip>
    <Footer></Footer>
  
    </div>
  )
}
export default Service;
