import React from "react";
import "./styles/myExperience.scss";
// import { WorkIcon } from "react-feather";
import { Row, Col, Container } from "reactstrap";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class MyExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [
        {
          postCompany: "Bobble.ai",
          postDate: "2020 Jul - 2021 Feb",
          post: "Full Stack Intern",
          description: "Worked in mint microservices migration and \n bobble.ai website code migration from angular.js to next.js.",
        },
        {
          postCompany: "Microfinance.ai",
          postDate: "2021 Feb - Present",
          post: "Backend Engineer",
          description: "Scaled the startup from building microservices, till designing system architecture in AWS.",
        },
        {
          postCompany: "TCS",
          postDate: "2021 May - Present",
          post: "Systems Engineer",
          description: "Work in EDG project as a developer from writing curation logics in JAVA, with test cases and deploying jobs in Spring XD",
        },
      ],
    };
  }
  render() {
    return (
      <section className="my-experience-section">
        <Row style={{ minHeight: "100vh" }}>
          {/*</section>style={{ height: "100vh", overflow: "hidden" }}>*/}
          <Col md={4} className="d-flex flex-column display-on-phone">
            <p className="heading p-2">My Experiences</p>
          </Col>
          <Col md={8} className="experiences-container py-3">
            <Container fluid className="m-auto" style={{ maxWidth: "700px" }}>
              <VerticalTimeline>
                {this.state.experiences.map((experience) => {
                  return (
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{ background: "transparent", color: "#fff" }}
                      contentArrowStyle={{ borderRight: "7px solid  #f23d4b" }}
                      date={experience.postDate}>
                      <h3 className="vertical-timeline-element-title">{experience.postCompany}</h3>
                      <h4 className="vertical-timeline-element-subtitle">{experience.post}</h4>
                      <p className="vertical-timeline-element-text">{experience.description}</p>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </Container>
          </Col>
          <Col md={4} className="d-flex flex-column display-not-on-phone">
            <p className="heading bg-red p-2">My Experiences</p>
          </Col>
        </Row>
      </section>
    );
  }
}

export default MyExperience;
