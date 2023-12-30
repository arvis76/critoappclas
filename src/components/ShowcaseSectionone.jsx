import React from 'react'
import Backgr_img from '../assets/images/showcase1.svg'


const ShowcaseSectionone = () => {
  return (
    <section className="showcaseone">
    <img className="backgroundline" src={Backgr_img} alt="line"/>
    <div className="container">
        <div className="content">
            <div className="menu-contact">
            <nav>
                <a className="active" href="home.html"> Home</a>                        
                <a href="contact.html"> Contact</a>
            </nav>
        </div>
            <h1>Let’s Connect</h1>
           
           
       
    </div> 
    </div>           
</section>
  )
}

export default ShowcaseSectionone