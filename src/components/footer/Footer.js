import React from 'react'
import image from './bluetick-consultants.png'
// importing css stylesheet into jsx component
import './footer.css'
// importing react icons from react icons library
import {GrLinkedin} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <>
    
<section className='about-section ms-2' id="footer">
   
<div className='about-container'>
              <h3>About Company</h3>  
              <div className='about-item'>
    
                    <img src={image} alt="bluetick-consultant" />
   
               <a href='https://www.linkedin.com/in/bhola-singh-b39a4a234'> <GrLinkedin color='blue' size={20} className='ms-2'  /> </a>
               <a  href='https://github.com/777bholasingh'>  <BsGithub color='black' size={20} className='ms-2'/>  </a>
               <a  href='https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com'>  <SiGmail color='black' size={20} className='ms-2'/>  </a>
 
              </div>
</div>

</section>
      
    </>
  )
}
