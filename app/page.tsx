import React from 'react'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import AboutMe from "@/components/AboutMe";
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import './styles/MiniDesktop.css'
import './styles/tablet.css'
import './styles/SmallTablet.css'
import './styles/Landscape.css'

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
