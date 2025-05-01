import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
// import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import resume from "../../assets/docs/Y.Maheswari Resume.pdf"

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
        
            <h2>Hi  I'm Maheswari</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Problem solver!",
                    "Mern Stack Developer!",
                    "React Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
       
        
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=6309309018"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={resume} download="your_name.pdf">
                My Resume
              </a>
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Home;