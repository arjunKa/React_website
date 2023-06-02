import React from 'react'
import './project.css'
import GitHubButton from 'react-github-btn'
import coronaCast from '../../assets/ProjectImages/coronaCast.png'
import projectImage from '../../assets/ProjectImages/3D_GPS.png'
import csharp from '../../assets/icons/csharp.svg'
import unity from '../../assets/icons/unity.svg'

const Project = ({imgUrl, date, header, content}) => (
  
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
          <a target="_blank" ><img src={csharp} alt = "logo" /></a>
          <a target="_blank" ><img src={unity} alt = "logo" /></a>
          </div>

          <div className="portfolio__blog-container_article-content_options">
          <button id='Github' >Article</button> <button id='Github' >Demo</button>
          </div>

            <p>I worked in the VGR (Vision Graphics and Robotics) laboratory at York University to develop a prototype of a 3D GPS software.
              The software would be used by Emergency Medical Services to better navigate the streets, and also featured a VR component with the ability
              to use the software in VR.
                Using game development software: Unity and programs such as Sketch Up for 3D modelling, we worked to build
                 a prototype. The language used was C#.
               
            </p>
          </div>

          <div className="portfolio__project-container-content-image">
            <img src={projectImage} alt = "3D GPS Image" />

            
          </div>

        </div>



      </div>
    </div>
  
  
  );

export default Project