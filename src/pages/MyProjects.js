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
      myProjects: [
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
        {
          name: "Microfinance.ai (Building & Setup)",
          description: "Building and setting up a startup as a perspective of a full stack engineer & architect",
          imageLink: microfinanceAiImage,
          category: "Live Experience",
          liveLink: "https://microfinance.ai",
        },
        {
          name: "Bobble.ai Website",
          description: "Migrating bobble.ai codebase from angular.js to react.js",
          imageLink: bobbleAiImage,
          category: "Live Experience",
          liveLink: "https://bobble.ai",
        },
        {
          name: "Bobble.ai (Mint Service migration)",
          description: "Migrating mint microservice from laravel to golang (echo)",
          imageLink: bobbleAiImage,
          category: "Live Experience",
          liveLink: "https://bobble.ai",
        },
      ],
    };
  }
  render() {
    return (
      <section className="my-projects-section">
        <Row style={{ minHeight: "100vh" }}>
          <Col md={4} className="d-flex flex-column">
            <p className="heading p-2">My Projects</p>
          </Col>
          <Col md={8} className="my-projects-container py-3">
            <p>Here are some ofmy projects includes both my personal projects as well as live projects that i have worked on</p>
            <Row>
              {this.state.myProjects.map((project) => {
                return (
                  <Col md={4} style={{ maxWidth: "300px" }}>
                    <MyProjectCard {...project} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </section>
    );
  }
}

export default MyProjects;
