import React from 'react'
import paper from '../assets/images/paperz.png'
import dorf from '../assets/images/diamant.png'
import martino from '../assets/images/martino.png'
import square from '../assets/images/square.png'
import gobona from '../assets/images/gobona.png'



const Logos = () => {
  return (
    <section className="logos">
    <img src={paper} alt="image of brand Paperz"/>
    <img src={dorf} alt="image of brand Dorfus"/>
    <img src= {martino} alt="image of brand Martino"/>
    <img src= {square} alt="image of brand Square"/>
    <img src= {gobona} alt="image of brand Gobona"/>
</section>
  )
}

export default Logos