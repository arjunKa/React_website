import React from 'react'
import Card from '../../components/article/Card'
import './projectList.css'

const ProjectList = () => {
  return (
    <div className="portfolio__projectList" id="projects">
    <div className="portfolio__projectList-heading">
      <h1>Projects</h1>
    </div>
    <div className="portfolio__projectList-container">
      {/* <div className="portfolio__projectList-container_groupA">
        <Article  skills="Sep 26, 2021" text="GPT-3 and O  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="portfolio__projectList-container_groupB">
        <Card linkToProject = "#3D_GPS" skills="C#, Unity Game Engine, SketchUp" text="3D GPS Software For EMS vehicles (Intern Project)" />
        {/* <Card text="Improved Xbox App for Windows" skills="C#, .NET Development"  /> */}
        
        <Card linkToProject = "#CoronaCast" skills="HTML, JavaScript, API implementation" text="Covid Risk Assessment Tool" />
        <Card linkToProject = "#PortfolioSite" skills="React.js, CSS, HTML, JavaScript" text="Portfolio Site" />
        <Card linkToProject = "#DetectiveDom" skills="Java, JSON + XML" text="Detective Dom (Game Demo)" />
        
      </div>
    </div>
  </div>
  )
}

export default ProjectList