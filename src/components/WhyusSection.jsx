import React from 'react'
import hand_img from '../assets/images/hand.png'
import diamnt_img from '../assets/images/diamant.png'
import pen_img from '../assets/images/pen.png'
import head_img from '../assets/images/head.png'
import bg_img from '../assets/images/BG.svg'
import whyus_img from '../assets/images/whyus.png'

const WhyusSection = () => {
  return (
    <section className="why-choose-us">
    <div className="container">
        <div className="section-title">
            <div className="why-us">
                <div className="why">
                 <p>Why Choose Us</p>
                    <h2>Why We Are The<br/> Best Business<br/> Consulting Agency</h2>
                        <div className="us">
                            <img src={hand_img} alt="Hand"/>
                                Process Excellence
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="us2">
                            <img src={diamnt_img} alt="Diamant"/>
                            Strategic Planning
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                <       div className="us3">
                            <img src={pen_img} alt="Pen"/>
                            Experience Design
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="us4">
                            <img src={head_img} alt="Head"/>
                            Artificial Inteligence
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                </div>
                <div className="pics">
                    <img className="under" src={bg_img} alt=""/>
                    <img src={whyus_img} alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default WhyusSection