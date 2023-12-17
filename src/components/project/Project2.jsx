import React from "react";
import "./project.css";
import projectImage from "../../assets/ProjectImages/portfolioSite.png";

import html5 from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css.png";
import react from "../../assets/icons/react.svg";
import js from "../../assets/icons/javascript.svg";

const Project2 = ({ date, header }) => (
  <div className="portfolio__project-container">
    <div className="portfolio__project-container-content">
      <div>
        <p>{date}</p>
      </div>

      <div className="portfolio__project-container-content-image-and-text">
        <div className="portfolio__project-container-content-text">
          <h3>{header}</h3>

          <div className="portfolio__project-container-content-logos">
            <img src={react} alt="logo" />
            <img src={js} alt="logo" />

            <img src={html5} alt="logo" />

            <img src={css} alt="logo" />
          </div>

          <div className="portfolio__blog-container_article-content_options">
            <a
              href="https://github.com/arjunKa/React_Portfolio_website"
              target="_blank"
              rel="noreferrer"
            >
              <div className="button">GitHub</div>
            </a>
          </div>

          <p>
            This section describes this portfolio site! It was built using
            React.js for the front-end and uses a clean and simple look while
            also having multiple nice-to-have features for easy user experience
            such as a reactive design which responds to the screen dimensions,
            meaning that it is usable on mobile. This portfolio website evolves
            and grows constantly as more projects and features are added; there
            will be much more to add.
          </p>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={projectImage} alt="Portfolio Site" />
        </div>
      </div>
    </div>
  </div>
);

export default Project2;
