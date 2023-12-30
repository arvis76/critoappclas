import React from 'react'
import Backgroundline_img from '../assets/images/showcase.svg'
import Tabletman from '../assets/images/tabletman.svg'


const ShowcaseSection = () => {
  return (
    <section className="showcase">
    <img className="backgroundline" src={Backgroundline_img} alt="line"/>
    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes. </p>
            <a className="btn-yellow" href="index.html">Get Consulting <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            <a className="btn-transperent" href="login.html">Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></a>                       
        </div>
        <img src={Tabletman} alt="image of a man with a tablet"/>
        
    </div>            
</section>
  )
}

export default ShowcaseSection