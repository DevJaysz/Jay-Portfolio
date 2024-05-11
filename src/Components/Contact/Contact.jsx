import React, { useRef } from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import emailjs from '@emailjs/browser';
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2s5yy2v', 
        'template_navjhka',
         form.current, {
        publicKey: 
        'pBX1r4ZEVpF2pkdrM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    
  

  return (
    
    <section className="contact section" id="contact">
        <div><h2 className="section-title">CONTACT</h2>
            <span className="section-subtitle">CONNECT WITH ME</span>
        </div>
         
            <div className="contact-container container grid">
                <div className="contact-left" data-aos="fade-right">
                    <h1>Contact Me</h1>
                    <p></p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>jaystokya17@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Makati City, Metro Manila NCR, Philippines</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+639295191002</p>
                        </div>
                    </div>
                </div>
                <form  data-aos="fade-left"  ref={form} onSubmit={sendEmail}
                    className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Email' name="email" id="" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message"  rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                
                </form>
            </div>

    </section>

  )
}

export default Contact