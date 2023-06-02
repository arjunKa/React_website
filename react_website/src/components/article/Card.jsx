import React from 'react'
import './card.css'
import gitLogo from '../../assets/github.svg'
import GitHubButton from 'react-github-btn'


const Card = ({linkToProject, skills, text, GithubLink}) => (
  
  <div className="portfolio__blog-container_article">


    <div className="portfolio__blog-container_article-content">
      

    <a href={linkToProject}><h3>{text}</h3></a>
        
      <div className='skillsUsed'><h4>Skills Used: </h4> <p>{skills}</p> </div> 
      
      
      <div className="portfolio__blog-container_article-content_options">

        {/* <GitHubButton href={GithubLink} data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;" data-size="small" aria-label="Follow @buttons on GitHub">
          GitHub Repo</GitHubButton>

        <GitHubButton href="https://github.com/buttons/github-buttons" data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;" data-icon="octicon-play" aria-label="Use ">
          Try it</GitHubButton> */}
      </div>

      <div className="portfolio__blog-container_article-content_view-project"> <a href={linkToProject}> <p>View Project</p> </a> </div>
    </div>
  </div>


);


export default Card