import React from "react";
import { Terminal, Code, User, Flag } from "react-feather";
import { Container, Row, Col } from "reactstrap";
import "./styles/myProjects.scss";
import MyProjectCard from "./ui-elements/MyProjectCard";
import microfinanceAiImage from "../assets/images/microfinance-aiImage.png";
import bobbleAiImage from "../assets/images/bobble-aiImage.png";

class MyProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myProjects: {
        personalProjects: [
          {
            name: "Code-Collaborate",
            description: "The platform for collaborative coding",
            category: "Personal Project",
            imageLink: "https://code-collaborate.netlify.app/code-collaborate-meta-image.png",
            repoLink: "https://github.com/AkashChatterjee1999/code-collaborate",
            liveLink: "https://code-collaborate.netlify.app/",
          },
          {
            name: "Code-Collaborate Compiler",
            description: "A simple yet scalable online judge for providing output for multiple coding languages",
            category: "Personal Project",
            imageLink: "https://code-collaborate.netlify.app/code-collaborate-meta-image.png",
            repoLink: "https://github.com/AkashChatterjee1999/code-collaborate-codeCompiler",
            liveLink: "https://code-collaborate.netlify.app/",
          },
          {
            name: "Portfolio Website",
            description: "A portfolio website for a full-stack-developer in react.js",
            liveLink: "https://code-collaborate.netlify.app/",
            category: "Personal Project",
            repoLink: "https://github.com/AkashChatterjee1999/portfolio-website-v2",
          },
        ],
        liveProjects: [
          {
            name: "Microfinance.ai (Building & Setup)",
            description: "Building and setting up a startup as a perspective of a full stack engineer & System Architect",
            imageLink: microfinanceAiImage,
            category: "Live Experience",
            liveLink: "https://microfinance.ai",
          },
          {
            name: "Bobble.ai Website",
            description: "Migrating bobble.ai website codebase from angular.js to react.js",
            imageLink: bobbleAiImage,
            category: "Live Experience",
            liveLink: "https://bobble.ai",
          },
          {
            name: "Bobble.ai (Mint Service migration)",
            description: "Migrating mint microservice from laravel to golang (echo)",
            imageLink: bobbleAiImage,
            category: "Live Experience",
          },
        ],
      },
    };
  }
  render() {
    return (
      <section className="my-projects-section">
        <Row style={{ minHeight: "100vh" }}>
          <Col md={4} className="d-flex flex-column">
            <p className="heading bg-red p-2">My Projects</p>
          </Col>
          <Col md={8} className="py-3 d-flex flex-column">
            <br />
            <Container fluid className="m-auto">
              <h3>Personal Projects</h3>
              <p className="project-category-desc">
                These are some of my <b>greatest</b> personal projects that i have made in my leisure time or out of interest. Please check my github
                profile for more projects
              </p>
              <Row className="py-2 justify-content-between my-3" style={{ maxWidth: "1000px" }}>
                {this.state.myProjects["personalProjects"].map((project) => {
                  return (
                    <Col md={4} className="my-projects-container ">
                      <MyProjectCard {...project} />
                    </Col>
                  );
                })}
              </Row>
              <hr style={{ borderColor: "white" }} />
              <h3 className="mt-3">Live Projects</h3>
              <p className="project-category-desc">
                These are some of my projects that i have handled either completely or as a team member, during my professional work.
              </p>
              <Row className="py-2 justify-content-between my-3" style={{ maxWidth: "1000px" }}>
                {this.state.myProjects["liveProjects"].map((project) => {
                  return (
                    <Col md={4} className="my-projects-container">
                      <MyProjectCard {...project} />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </section>
    );
  }
}

export default MyProjects;
