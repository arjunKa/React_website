import React from 'react'
import './card.css'

const Card = ({imgUrl, date, text}) => (
  
  <div className="portfolio__blog-container_article">
    <div className="portfolio__blog-container_article-image">
      {/* <img src={imgUrl} alt="blog_image" /> */}
    </div>
    <div className="portfolio__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>


);


export default Card