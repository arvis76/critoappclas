import React from 'react'
import Element_img from '../assets/images/Elementours.svg'

const OusrservicesSection = () => {
  return (
    <section className="our-services">
    <div className="container">
        <div className="section-title">
            <p>Our Services</p>
            <h2>We Provide The Best<br/> Service For Consulting</h2>
        </div>
        <div className="service">
            <article >
                <div className="business">
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a href="http://"><i className="fa-solid fa-circle-arrow-right"></i></a> 
                </div>
            </article>
            <article>
                <div className="startup">
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a href="http://"><i className="fa-solid fa-circle-arrow-right"></i></a>
                </div>
            </article>
            <article>
                <div className="finance">
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a href="http://"><i className="fa-solid fa-circle-arrow-right"></i></a>
                </div>
            </article>
            <article>
                <div className="risk">
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a href="http://"><i className="fa-solid fa-circle-arrow-right"></i></a>
                </div>
            </article>
        </div>
        <article className="our-service">
            <a className="btn-transperent" href="login.html">Browse Service <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
       </article>
        <div className="our-s-line">
            <img src={Element_img} alt=""/>
        </div>
   </div>
</section>  
  )
}

export default OusrservicesSection