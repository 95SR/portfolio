import React from 'react'
import  { useRef , useState} from 'react';
import emailjs from 'emailjs-com';

import './Contact.css'
function Contact() {
  const form= useRef();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = (e) => {
    setEmail(e.target.value)
    

    if (regex.test(email)=== false){
      setError('Please enter a valid email address')

    } else{
      setError('');
      return true
    }
    
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1uyd46r', 'template_fi6idtc', form.current, 'eVTQDEtFVMrZGfacI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <div className="container form-container">

        <h3>Contact Me</h3>
        <h4>Please</h4>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email Address' required onChange={checkEmail}/>
          <p className='error-msg'>{error}</p>
          <textarea name='message' rows='7' placeholder='Your Messages' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact