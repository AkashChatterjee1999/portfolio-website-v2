import React from "react";
import { Terminal, Code, User, Flag } from "react-feather";
import "./styles/myProjects.scss";

class MyProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myProjects: [
        {
          name: "Code-Collaborate",
          description: "The platform for collaborative coding",
          projectIcon: <Terminal />,
          category: "Personal Project",
          repoLink: "https://github.com/AkashChatterjee1999/code-collaborate",
        },
        {
          name: "Code-Collaborate Code Compiler",
          description: "A simple yet scalable online judge for providing output for multiple coding languages",
          projectIcon: <Code />,
          category: "Personal Project",
          repoLink: "https://github.com/AkashChatterjee1999/code-collaborate-codeCompiler",
        },
        {
          name: "Portfolio Website",
          description: "A portfolio website for a full-stack-developer in react.js",
          projectIcon: <User />,
          category: "Personal Project",
          repoLink: "https://github.com/AkashChatterjee1999/portfolio-website-v2",
        },
        {
          name: "Microfinance.ai (Building & Setup)",
          description: "Building and setting up a startup as a perspective of a full stack engineer & architect",
          projectIcon: <Flag />,
          category: "Live Experience",
        },
        {
          name: "Bobble.ai Website",
          description: "Migrating bobble.ai codebase from angular.js to react.js",
          projectIcon: <Flag />,
          category: "Live Experience",
        },
        {
          name: "Bobble.ai (Mint Service migration)",
          description: "Migrating mint microservice from laravel to golang (echo)",
          projectIcon: <Flag />,
          category: "Live Experience",
        },
      ],
    };
  }
  render() {
    return <section className="my-projects-section" style={{ minWidth: "100vh" }}></section>;
  }
}

export default MyProjects;
