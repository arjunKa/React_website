import React from 'react'
import { Navbar, BackToTopButton } from './components'
import { ProjectList, Footer, Header, ProjectDetails } from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      {/* <Brand />
      <WhatGPT3 />
      <Features />
      <CTA /> */}
      <ProjectList />
      <ProjectDetails />
      <Footer />
      <BackToTopButton />


    </div>

  )
}

export default App