import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Founders from './components/Founders'
import OurMembers from './components/OurMembers'
import Services from './components/Services'
import SafetyCodes from './components/SafetyCodes'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import useScrollAnimation from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Founders />
      <OurMembers />
      <Services />
      <SafetyCodes />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
