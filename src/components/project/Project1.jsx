import React from 'react'
import './project.css'
import GitHubButton from 'react-github-btn'
import coronaCast from '../../assets/ProjectImages/coronaCast.png'
import coronaCast1 from '../../assets/ProjectImages/coronaCast2.png'
import html5 from '../../assets/icons/icons8-html5.svg'
import css from '../../assets/icons/css.png'

const Project1 = ({imgUrl, date, header, content}) => (
  
    <div className="portfolio__project-container">
      <div className="portfolio__project-container-image">
        {/* <img src={imgUrl} alt="blog_image" /> */}
      </div>
      <div className="portfolio__project-container-content">
        <div>
          
          <p>{date}</p>
          
        </div>


        <div className="portfolio__project-container-content-image-and-text">
          <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className = "portfolio__project-container-content-logos">
          <a target="_blank" href="https://icons8.com/icon/20909/html-5"><img src={html5} alt = "logo" /></a>
          <a target="_blank" href="https://icons8.com/icon/20909/html-5"><img src={css} alt = "logo" /></a>
          </div>

          <div className="portfolio__blog-container_article-content_options">
          <button id='Github' >Github</button> <button id='Github' >Try it</button>
          </div>

            <p>Made during the RUhacks hackaton, the purpose of this project is to provide the user
                an easy to understand determination of the risk of Covid-19 in their area. This project showcases the use of API
                 implementation and an HTML + CSS frontend.
                 We take the user's location and use GoogleMaps API to determine the traffic conjestion in the area. We also take in data 
                such as their their age, data of birth, any of their immune deficiencies.
                  Finally, WeatherAPI is used to factor in elements such as humidty and wind to determine the overall risk factor.
            </p>
          </div>

          <div className="portfolio__project-container-content-image">
            <img src={coronaCast1} alt = "logo" />
            <img src={coronaCast} alt = "logo" />
            
          </div>

        </div>



      </div>
    </div>
  
  
  );

export default Project1