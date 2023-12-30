import React from 'react'
import art_img1 from '../assets/images/art-Image1.png'
import art_img2 from '../assets/images/art-Image2.png'
import art_img3 from '../assets/images/art-Image3.png'
import art_img4 from '../assets/images/art-Image4.png'



const ProjectcaseSection = () => {
  return (
    <section className="project-and-case-section">
    <div className="container">
        <div className="section-title">
            <p>Project & Case Studies</p>
            <h2>Let’s Looks Our Global Projects</h2>
        </div>
        <div className="project-and-cases">
            <article>
                <img src={art_img1} alt="Man reading a news paper"/>
                <h3>Grow your business</h3>
                <a href="http://">Read More<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </article>
            <article>
                <img src={art_img2} alt="Phone and glasses"/>
                <h3>Why your client needs a responsive website</h3>
                <a href="http://">Read More<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </article>
            <article>
                <img src={art_img3} alt="Notes and a pen"/>
                <h3>Educate your employees to get better results</h3>
                <a href="http://">Read More<i className=" fa-solid fa-arrow-up-right-from-square"></i></a>
            </article>
            <article>
                <img src={art_img4} alt="Laptop"/>
                <h3>Business Insights is a important piece of your business</h3>
                <a href="http://">Read More<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </article>
        </div>
            <div className="center-btn">
                <a className="btn-black" href="login.html">All Recent Project <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
    </div>
</section>
  )
}

export default ProjectcaseSection