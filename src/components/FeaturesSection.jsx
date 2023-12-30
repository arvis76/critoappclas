import React from 'react'
import handshake from '../assets/images/handsh.png'
import bulbman from '../assets/images/bulbman.png'
import finaca from '../assets/images/finac.png'
import boxmanna from '../assets/images/boxt.png'

const FeaturesSection = () => {
  return (
    <section className="features-section "> 
    <div className="container">
        <div className="borders">
            <div className="section-title">
                <p>Features</p>
                <h2>Our Accounting is<br/> trusted by thousand of companies</h2>
                <a className="btn-yellow-new " href="#">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div className="features">
                <article>
                    <img src={handshake} alt="image of brand Paperz"/>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article>
                    <img src={bulbman} alt="image of brand Paperz"/>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article>
                    <img src={finaca} alt="image of brand Paperz"/>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </article>
                <article>
                    <img src={boxmanna} alt="image of brand Paperz"/>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </article>
            </div>
        </div>
    </div>


</section>
  )
}

export default FeaturesSection