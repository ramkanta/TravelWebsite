import React from 'react'
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Destination from '../Components/Destination';
import Trip from '../Components/trip';
import Footer from '../Components/Footer';



function Home() {
  return (
    <div>
    
     
    <Navbar />
    <Hero cName="hero" heroImg=" https://cdn.tovp.org/wp-content/uploads/2021/11/tovp-aerial-shot-09-26-2021-photo-by-thakur-saranga-das-web.jpg.webp" title="Your Journey Your Stroy" text="Choose Your Favourite Destination" btntext="Travel Plan" url="/" btnclass="show"/>
    <Destination />
    <Trip />
    <Footer></Footer>
    
  
      
    </div>
  )
}
export default Home;
