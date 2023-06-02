import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='portfolio__footer section__padding' id = 'contact'>
    <div className='portfolio__footer-content'>
      <h1 className='portfolio__footer_header'>Contact</h1>
      <div className='portfolio__footer-content-contacts'>
        <div className='portfolio__contact-container'><h2>Email</h2> <a target="_blank" href='mailto: arjkaura@gmail.com'>
          <p>arjkaura@gmail.com</p> </a></div>
        <div className='portfolio__contact-container'><h2>GitHub</h2><a target="_blank" href='https://github.com/arjunKa'>
          <p>arjunKa</p></a></div>
        <div className='portfolio__contact-container'><h2>LinkedIn</h2><a target="_blank" href='https://www.linkedin.com/in/arjun-kaura/'>
          <p>arjun-kaura</p></a></div>

        
      </div>

    </div>

  </div>
  )
}

export default Footer