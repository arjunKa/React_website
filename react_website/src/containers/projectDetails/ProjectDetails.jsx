import React from 'react'
import './projectDetails.css'
import {Project, Project1} from '../../components/project'

const ProjectDetails = () => {
  return (
    <div className="portfolio__projectDetails section__padding" id="projectDetails">
      <div className="portfolio__projectDetails-heading">
        <h1>Projects in Detail</h1>
      </div>
      <div className="portfolio__projectDetails-container">
        {/* <div className="portfolio__blog-container_groupA">
          <Article  date="Sep 26, 2021" text="GPT-3 and O  AI is the future. Let us exlore how it is?" />
        </div> */}
        <div className="portfolio__projectDetails-container_group">

          <Project date="Date" header="CoronaCast" content = "test"/>
          <Project1 date="Sep 26, 2021" header="GP Open  AI is the future. Let us exlore how it is?" />
          
        </div>
      </div>
  </div>
  )
}

export default ProjectDetails