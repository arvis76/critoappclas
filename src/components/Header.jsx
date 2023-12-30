import React from 'react'
import critologo from '../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
          <header>
        
        <div className="container">
            <img src={critologo} alt="crito Logo"/> 
            <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>  
            <div className="menu-up">
                <div className="menu-social">
                    <div className="contact-info">
                        <div className="cont-info-box">
                            <i className="fa-solid fa-phone"></i>
                            +46(08)121 470 50
                        </div>
                        <div className="cont-info-box" >
                            <i className="fa-solid fa-envelope"></i>
                             info@crito.com
                        </div>
                        <div className="cont-info-box last">
                            <i className="fa-solid fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https//facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https//twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https//instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https//linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div> 
                </div>
                <div className="menu-main">  
                    <nav>
                        <a className="active" href='/'> Home</a>
                        <a href='/'> Service</a>
                        <a href='/'> News</a>
                        <a href="/Contacts"> Contact</a>
                    </nav>
                        <a className="btn-yellow" href="login.html">Login <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>              
        </div>


    </header>
    </div>
  )
}

export default Header