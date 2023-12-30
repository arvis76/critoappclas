import React from 'react'
import geet_img from '../assets/images/getneel.svg'

const NewSection = () => {
  return (
    <section className="newsletter">
    <img className="news-line" src={geet_img} alt="Line"/>
    <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form>
            <div className="in-text">
            
            </div>
            <div className="btn-news">
            <a className="btn-yellow" href="#">Subscribe <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </form>              
    </div>
</section>
  )
}

export default NewSection