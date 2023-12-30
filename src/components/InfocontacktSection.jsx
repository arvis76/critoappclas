import React from 'react'
import visit_img from '../assets/images/visitcone.svg'
import telef_img from '../assets/images/telef-cone.svg'
import email_img from '../assets/images/emal-con.svg'

const InfocontacktSection = () => {
  return (
    

<section className="information-connect">
    <div className="container">
        <article className="conte-info">
        <div className="info-connect">
            <article className="conte-info">
            <div className="cont-info-connect">
                <img className="tel-connect" src={visit_img} alt=""/>
                <h4>Visit us</h4>
                <p>Sveavägen 31<br/>111 34 STOCKHOLM</p>
            </div>
        </article >
        <article className="conte-info">
            <div className="cont-info-connect" >
                <img className="tel-connect" src={telef_img} alt=""/>
                <h4>Call us</h4>
                <p>+46 (8) 121 470 50 <br/>+46 (8) 121 470 51</p>
            </div>
        </article>
        <article className="conte-info">
            <div className="cont-info-connect">
                <img className="tel-connect" src={email_img} alt=""/>
                <h4>Email us</h4>
               <p>info@crito.com <br/> support@crito.com </p>
            </div>
        </article>
        </div>
         </article>
        </div>
</section>
  )
  
}

export default InfocontacktSection