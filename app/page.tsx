import React from 'react'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import AboutMe from "@/components/AboutMe";
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
// import '@/app/style/MiniDesktop.css'
// import '@/app/style/tablet.css'
// import '@/app/style/SmallTablet.css'
// import '@/app/style/Landscape.css'



import './style/MiniDesktop.css'
import './style/tablet.css'
import './style/SmallTablet.css'
import './style/Landscape.css'

const Page = () => {
  return (
    <>
      <Navbar />
      <Main />
      <AboutMe />
      <Technologies />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default Page
