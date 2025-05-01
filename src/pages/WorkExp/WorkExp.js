import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
         Extra Cirricular Activities
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2024 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
               Web Dev Member
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
             Google Developer Groups,OnCampus
              </h4>
              <p>
               As a member I have learned a lot of information regarding building and hosting websites through the guidance of seniors.
               
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
             Coordinator
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
           Innovation Club
              </h4>
              <p>
             Being Coordinator of Innovation Club I gained the experiences like how to organize the events and to communicate with others . I have learned about what are the 
             ascepts we need to focus on when we are organizing the events .This Club helped me in Communication skills.
              </p>
            </VerticalTimelineElement>
           
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;