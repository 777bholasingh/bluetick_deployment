import React from 'react'
import './hero.css'
// writing functional component for the hero section
export default function Hero() {

    
  return (
    <>
<section className="hero-section ms-2 " id="hero">
        <div className="hero-content">
            <h2>Hero section</h2>
            <p>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a significant impact in the Indian and US startup ecosystems.
            Transforming Enterprises with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
            <a href="https://www.bluetickconsultants.com/generative-ai.html" className="hero-button">To know more about us</a>
        </div>
</section>

      
    </>
  )
}
