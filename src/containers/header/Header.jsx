import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="portfolio__header section__padding" id="home">
      <div className="portfolio__header-content">
        <h1 className="gradient__text">Hi, I'm Arjun</h1>
        <div className="portfolio__header-content-details">
          <p>
            I'm a Software Engineering student in my final year. I have
            experience working as a software developer and engineer; I
            have used Python, C++, React.js, ASP.Net, Java and more.
          </p>
        </div>

        <div className="portfolio__blog-container_header-content_options">
          <a href="https://github.com/arjunKa/" target="_blank">
              <div className="button">GitHub</div>
            </a>
            <a href="https://www.linkedin.com/in/arjun-kaura/" target="_blank">
              <div className="button">LinkedIn</div>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Header;
