import React from "react";
import "./project.css";
import coronaCast from "../../assets/ProjectImages/coronaCast.png";
import coronaCast1 from "../../assets/ProjectImages/coronaCast2.png";
import html5 from "../../assets/icons/html5.svg";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/javascript.svg";

const Project1 = ({ date, header }) => (
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

          <div className="portfolio__project-container-content-logos">
            <img src={html5} alt="logo" />

            <img src={css} alt="logo" />
            <img src={js} alt="logo" />
          </div>

          <div className="portfolio__blog-container_article-content_options">
            <a
              href="https://github.com/Ru-Hacks/Coronacast"
              target="_blank"
              rel="noreferrer"
            >
              <div className="button">GitHub</div>
            </a>
            <a
              href="https://ru-hacks.github.io/Coronacast/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="button">Try It</div>
            </a>
          </div>

          <p>
            Made during the RUhacks Hackathon, the purpose of this project is to
            provide the user an easy to understand determination of the risk of
            Covid-19 in their area. This project showcases the use of API
            implementation and an HTML + CSS frontend. We take the user's
            location and use GoogleMaps API to determine the traffic congestion
            in the area. We also take in data such as their age, data of birth,
            any of their immune deficiencies. Finally, WeatherAPI is used to
            factor in elements such as humidity and wind to determine the
            overall risk factor.
          </p>
        </div>

        <div className="portfolio__project-container-content-image">
          <img src={coronaCast1} alt="logo" />
          <img src={coronaCast} alt="logo" />
        </div>
      </div>
    </div>
  </div>
);

export default Project1;
