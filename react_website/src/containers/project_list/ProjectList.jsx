import React from 'react'
import Card from '../../components/article/Card'
import './projectList.css'

const ProjectList = () => {
  return (
    <div className="portfolio__projectList section__padding" id="projects">
    <div className="portfolio__projectList-heading">
      <h1>Projects</h1>
    </div>
    <div className="portfolio__projectList-container">
      {/* <div className="portfolio__projectList-container_groupA">
        <Article  skills="Sep 26, 2021" text="GPT-3 and O  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="portfolio__projectList-container_groupB">
        <Card skills="C#, Unity Game Engine, SketchUp" text="3d GPS Software For EMS (Intern Project)" />
        <Card text="Improved Xbox App for Windows" skills="C#, Windows App Development"  />
        <Card skills="Java, JSON + XML" text="Detective Dom (Game Demo)" />
        <Card skills="HTML, JavaScript, API implementation" text="Covid Risk Assessment Tool" />
        <Card skills="Java, JSON + XML" text="Detective Dom (Game Demo)" />
        
      </div>
    </div>
  </div>
  )
}

export default ProjectList