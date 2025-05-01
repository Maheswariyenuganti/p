import React from "react";
import "./Projects.css";
import plastic from "../../assets/docs/pplastic.jpg"
import port from "../../assets/docs/port.jpeg"
// import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
     
        {/* card design */}
        <div className="row" id="ads">
       
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack</span>
                  <img
                    src={plastic}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                    plastic collection website/app
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Portfolio </span>
                  <img
                    src={port}
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
               

                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Portfolio website </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
       
       
        </div>
      </div>
    </>
  );
};

export default Projects;