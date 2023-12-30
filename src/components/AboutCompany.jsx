import React from 'react'
import Ewline from '../assets/images/EWlement1.svg'
import Aboutc_img from '../assets/images/aboutc.png'

const AboutCompany = () => {
  return (
    <section className="about-company">
            <div className="container">
                  <div className="about-this">
                        <div className="lineimg1">
                            <img src={Ewline} alt=""/>
                        </div>
                        <img src={Aboutc_img} alt="Man reading a news paper"/>                           
                        <div className="text-box">
                            <h3>Samanta Brown,</h3>
                            <h4>Founder</h4>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                        </div>
                    </div> 
                    <div className="section-title">
                    <div className="abo">               
                        <p>About Company</p>
                        <h2>We Are Business Consulting & Credit Repair Experts</h2>
                        <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br/><br/><br/> ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p1>
                         
                        <div className="company-btn">
                            <a className="btn-black" href="#">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a className="intro-video" href="http://https://www.youtube.com/"><i className="fa-regular fa-circle-play"></i></a>
                            Intro Video
                       
                        </div>
                    </div> 
                </div>
                
           
           </div>
        </section>          
  )
}

export default AboutCompany