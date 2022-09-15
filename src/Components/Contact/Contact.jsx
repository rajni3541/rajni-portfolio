import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useEffect } from 'react';
import Aos from 'aos';
const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    
        const form = useRef();

        const [done, setDone] = useState(false);

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_z6xa0tj', 'template_a8k6qdn', form.current, 'ab1an-EHWpt-B8wga')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
        };
    
  return (
    <div className="contact-form" data-aos="fade-up" id='contact'>
        <div className="n-left">
            <div className="awesome">
                <span className='touch'>Get in touch</span>
                <span className='orange'>Contact me</span>
                <div
                className='blur s-blurl'
                style={{background:"#abf1ff94"}}
                ></div>
            </div>
        </div>

        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user' placeholder='Name'/>
                <input type='email' name='user_email' className='user' placeholder='Email'/>
                <textarea type='message' name='message' ClassName='user'  placeholder='message'/>
                <input type='submit' value='send' className='button submit'  />
                <div 
                className='blur c-blur'
                style={{ background:"var-(--purple)"}}
                ></div>
                <span style={{color: "purple", fontsize:"x-large", fontweight:"500" }}>{done && "THANKS FOR CONTACTING ME !!"}</span>  
            </form>
        </div>
    </div>
  )
}

export default Contact