import React from 'react'
import './project.css'
import logo from '../../assets/logo.png'

const Project1 = ({imgUrl, date, header, content}) => (
  
    <div className="portfolio__project-container">
      <div className="portfolio__project-container-image">
        {/* <img src={imgUrl} alt="blog_image" /> */}
      </div>
      <div className="portfolio__project-container-content">
        <div>
            <h3>{header}</h3>
          <p>{date}</p>
          
        </div>
        
        <div className="portfolio__project-container-content-image-and-text">
          <div className="portfolio__project-container-content-text">
            <p>Inspiration
                Seeing how there is so much information that news channels and articles give, 
                it is very hard to compile all that information to someone who doesn't understand 
                the factors that cause you to get COVID-19. So we decided to make it easier for the
                user to understand, by feeding them the most important factors as well as a quick
                  prediction-based (by weather and traffic congestion) corona risk factor that tells
                  the user what's their chance of contracting the virus.

                What it does
                This web application's purpose is to give an analysis of whether the user is safe or not to
                go outside. We do this by taking the location which allows the user to track the traffic and
                  overall congestion around their area, their age, data of any of their immune deficiencies,
                  and weather conditions in their area.
            </p>
          </div>

          <div className="portfolio__project-container-content-image">
            <img src={logo} alt = "logo" />
          </div>

        </div>


      </div>
    </div>
  
  
  );

export default Project1