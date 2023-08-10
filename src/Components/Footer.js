import React from 'react'

function Footer() {
  return (
    <div className='footer'>
    <div className='top'>
        <div>
            <h1>WorldTravel</h1>
            <p>choose your favourite destination</p>
        </div>
        <div>
            <a href='/'>
                <i className='fa-brands fa-facebook-square'></i>
            </a>
            <a href='/'>
                <i className='fa-brands fa-instagram-square'></i>
            </a>
            <a href='/'>
                <i className='fa-brands fa-twitter-square'></i>
            </a>
        </div>
    </div>
    <div className='bottom'>
   
       <div>
            <h4>Top Destination</h4>
            <a href='/'>Digha</a>
            <a href='/'>Kalimpong</a>
            <a href='/'>Shantiniketan</a>
            <a href='/'>Sundarbans</a>
            </div>
            <div>
            <h4>Categories</h4>
            <a href='/'>Travel</a>
            <a href='/'>Lifestyle</a>
            <a href='/'>Fashion</a>
            <a href='/'>Food & Drink</a>
            </div>
            <div>
            <h4>Quick Links</h4>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Service</a>
            <a href='/'>Contact</a>
            </div>

            <div>
            <h4>Get a News Letter</h4>
            <p className="newsletter-text">
        For the latest deals and tips, travel no further than your inbox
      </p>
      <form action="" className="newsletter-form">
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          className="newsletter-input"
        />
        <button type="submit" className="btn btn-primary">
          Subscribe
        </button>
      </form>
            </div>
        
    </div>
      
    </div>
  )
}
export default Footer;