import React from 'react'
import Header from '../components/Header';
import ShowcaseSectionone from '../components/ShowcaseSectionone';

import Footer from '../components/Footer';
import InfocontacktSection from '../components/InfocontacktSection';
import MessageForm from '../components/MessageForm';

const Contacts = () => {
  return (
    <div>
        <Header/>
        <ShowcaseSectionone/>
        <InfocontacktSection/>
        <MessageForm/>
       <Footer/>

    </div>
  )
}

export default Contacts