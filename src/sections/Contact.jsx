import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <section id='contact'>
      <div className="container form-container">

        <h3>Contact Me</h3>
        <form>
          <input type='text' name='name' placeholder='Your Full Nane' required/>
          <input type='email' name='email' placeholder='Your Email Address' required />
          <textarea name='messages' rows='7' placeholder='Your Messages' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact