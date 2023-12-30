import React from 'react'
import tewntyfivemars_img from '../assets/images/25mars.png'
import seventeenmars_img from '../assets/images/17mars.png'
import thirteenmars_img from '../assets/images/13mars.png'

const ArticlesnewsSection = () => {
  return (
    <section className="article-news">
    <div className="container">
        <div className="get-every">
            <div className="section-title">
                <p>Article & News</p>
                <div className="up-news">
                    <h2>Get Every Single Articles & News</h2>
                    <a className="btn-transperent" href="#">Browse Articles <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="art">
                <div className="news1">
                    <img src={tewntyfivemars_img} alt=""/>
                    <p>Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
                <div className="news2">
                    <img src={seventeenmars_img} alt=""/>
                    <p> Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
                <div className="news3">
                    <img src={thirteenmars_img} alt=""/>
                    <p>Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ArticlesnewsSection