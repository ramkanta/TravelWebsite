import React from 'react'

function Contactform() {
  return (
    <div className='from-container'>
    <h1>Send a message to us!</h1>
    <form>
        <input placeholder='Name'></input>
        <input placeholder='Email'></input>
        <input placeholder='Subject'></input>
        <textarea placeholder='Message' rows="4"></textarea>
        <button>Send Message</button>

    </form>
      
    </div>
  )
}
export default Contactform;
