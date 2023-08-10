import React from 'react'

 function Hero(props) {
  return (
    <div className={props.className}>
    <img alt='mayapur iskon' src={props.heroImg}></img> 

    <div className='hero-text'>
    <h1>{props.title}</h1>
    <p>{props.text}</p>

    <a href={props.url} className={props.btnclass}>{props.btntext}</a>

    </div>
      
    </div>
  )
}
export default Hero;