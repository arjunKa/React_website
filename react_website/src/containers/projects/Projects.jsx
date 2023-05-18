import React from 'react'
import Card from '../../components/article/Card'
import './projects.css'

const Projects = () => {
  return (
    <div className="portfolio__blog section__padding" id="blog">
    <div className="portfolio__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="portfolio__blog-container">
      {/* <div className="portfolio__blog-container_groupA">
        <Article  date="Sep 26, 2021" text="GPT-3 and O  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="portfolio__blog-container_groupB">
        <Card date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Card date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Card date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Card date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
  )
}

export default Projects