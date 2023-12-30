import React from 'react'
import Kristine_img from '../assets/images/KristineP.png'
import Marka_img from '../assets/images/marka.png'
import Kimberly_img from '../assets/images/kimberlyh.png'
import Justin_img from '../assets/images/justin.png'
import Star_img from '../assets/images/Star.png'
import Cassandra_img from '../assets/images/casandra.png'
import Amanda_img from '../assets/images/Amanda.png'
import Jack_img from '../assets/images/Jack.png'



const MeetSections = () => {
  return (
    <section className="meet-our-team"> 
    <div className="container">
        <div className="teammember">
            <div className="section-title">
                <p>Meet Our Team</p>
                <div className="title-meet">
                    <h2>Experience Team Members</h2>
                    <a className="btn-yellow" href="#">Browse Team<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div className="meet-team">
                <article>
                    <img src={Kristine_img} alt="Man reading a news paper"/>
                    <h2>Kristine Palmer</h2>
                    <p>Chef Operation Officer</p>                    
                </article>
                <article>
                    <img src={Marka_img } alt="Man reading a news paper"/>
                    <h2>Mark Aubri</h2>
                    <p>Senior Consultant</p>
                </article>
                <article>
                    <img src={Kimberly_img} alt="Man reading a news paper"/>
                    <h2>Kimberly Hansen </h2>
                    <p>Senior Consultant</p>
                </article>
                <article>
                    <img src={Justin_img } alt="Man reading a news paper"/>
                    <h2>Justin Willoman</h2>
                    <p>Senior Tech Consultant</p>
                </article>
            </div>
            <article>
                <div className="testimonial">
                    <div className="section-title">
                    <p>Testimonial</p>
                    <h2>What Our Client Says</h2>
                    </div>
                    <div className="test-person">
                        <div className="casandra">
                            <img src={Star_img} alt="star"/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <img src={Cassandra_img} alt="Picture of a lady"/>
                            <h3> Cassandra Warren</h3>
                            <p1> Business Manager, Dorfus</p1>
                        </div>
                        <div className="Amanda">
                            <img src={Star_img} alt="star"/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <img src={Amanda_img} alt="Picture of a lady"/>
                            <h3> Amanda Tulling</h3>
                            <p1> Senior Developer, Square</p1>
                         </div>
                        <div className="Jack">
                            <img src={Star_img} alt="Star"/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <img src={Jack_img} alt="Picture of a man"/>
                            <h3> Jack McDogglas</h3>
                            <p1> Key Account Manager, Gobona</p1>                                
                        </div>
                   </div>
                   <div className="test-btn">
                    <a className="btn-black" href="login.html">All Reviews<i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
                </div>
            </article>
        </div>
    </div>
</section>       
  )
}

export default MeetSections