import React from "react";
import "./About.css";
// import Jump from "react-reveal/Jump";
import image from "../../assets/docs/photos.jpg"
const About = () => {
  return (
    <>
    
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={image}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am Y.Maheswari, a final year B.Tech student in Computer Science and Engineering at KITS College. I have a strong passion for problem-solving and software development. I enjoy tackling real-world challenges through code and constantly strive to enhance my skills in building efficient, scalable, and impactful solutions. My interests lie in full-stack development, programming, and continuously learning emerging 
              technologies. I'm always eager to learn and explore new technical tools and technologies. I enjoy building real-world solutions
              </p>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default About;