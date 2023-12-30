import React from 'react'
import AboutCompany from '../components/AboutCompany';
import ArticlenewsSection from '../components/ArticlesnewsSection';
import Featuressection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logos from '../components/Logos';
import MeetSection from '../components/MeetSections';
import NewSection from '../components/NewSection';
import OusrservicesSection from '../components/OurservicesSection';
import ProjectcaseSection from '../components/ProjectcaseSection';
import ShowcaseSection from '../components/ShowcaseSection';
import WhyusSection from '../components/WhyusSection';

const Home = () => {
  return (
    <div>
      <Header/>
      <ShowcaseSection/>
      <Logos/>
      <Featuressection/>
      <AboutCompany/>
      <OusrservicesSection/>
      <WhyusSection/>
      <ProjectcaseSection/>
      <MeetSection/>
      <ArticlenewsSection/>
      <NewSection/>
      <Footer/>
        
    </div>
  )
}

export default Home