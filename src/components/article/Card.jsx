import React from 'react'
import './card.css'
import gitLogo from '../../assets/github.svg'
import GitHubButton from 'react-github-btn'


const Card = ({linkToProject, skills, text, GithubLink}) => (
  
  <div className="portfolio__blog-container_article">


    <div className="portfolio__blog-container_article-content">
      

    <a href={linkToProject}><h3>{text}</h3></a>
        
      <div className='skillsUsed'><h4>Skills Used: </h4> <p>{skills}</p> </div> 
      
      <div className="portfolio__blog-container_article-content_view-project"> <a href={linkToProject}> <p>View Project</p> </a> </div>
    </div>
  </div>


);


export default Card