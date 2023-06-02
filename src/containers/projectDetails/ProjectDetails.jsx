import React from 'react'
import './projectDetails.css'
import {Project, Project1, Project2, Project3} from '../../components/project'

const ProjectDetails = () => {
  return (
    <div className="portfolio__projectDetails section__padding" id="projectDetails">
      <div className="portfolio__projectDetails-heading">
        <h1>Projects in Detail</h1>
      </div>
      
     
      <div className="portfolio__projectDetails-container_group">
        <div id = "3D_GPS"><Project date="" header="3D GPS Software for Emergency Reponders" /></div>
        <div id = "CoronaCast"><Project1 date="" header="CoronaCast" content = "test"/></div> 
        <div id = "PortfolioSite"><Project2 date="" header="React.js Portfolio Site" content = "test"/></div> 
        <div id = "DetectiveDom"><Project3 date="" header="Game: Detective Dom (Java)" content = "test"/></div> 
        

      </div>
      
  </div>
  )
}

export default ProjectDetails