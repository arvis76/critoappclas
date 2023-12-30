import React from 'react'
import Logofooter_img from '../assets/images/Logofooter.svg'
import Fottreline_img from '../assets/images/Elementfooter.svg'



const Footer = () => {
  return (
    <footer>
    <div className="whole-page">       
        <div className="container">
            <div className="img-footer">
                <section>
                    <img src={Logofooter_img} alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </section>
            </div>
            <div className="info-footer">
                <div className="company">
                    <h2>Company</h2>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#"> Works</a>
                    <a href="#">Career</a>
                </div>
                <div className="help">
                    <h2>Help</h2>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="Resources">
                    <h2>Resources</h2>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
                <div className="links">
                    <h2>Link</h2>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Youtube Playlist</a>
                </div>
            </div>
            <div className="ft-line" >
                <img className="footer-line" src={Fottreline_img} alt="line"/>
            </div>
        </div>
        
    </div>
    <div className="media-footer">
        <div className="copywright">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
        </div>
        <div className="social-media">
            <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https//twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https//instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https//linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
</footer>
  )
}

export default Footer