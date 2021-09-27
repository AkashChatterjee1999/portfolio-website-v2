import React from "react";
import "./styles/aboutMe.scss";
import { Row, Col } from "reactstrap";
import ExperienceTools from "./ui-elements/ExperienceTools";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontEndTools: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          name: "React Js",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          name: "Redux",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          name: "Angular Js",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          name: "Sass",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
          name: "Bootstrap",
        },
      ],
      backEndTools: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          name: "Node Js",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
          name: "MySql",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
          name: "Sequelize",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
          name: "Go-lang",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          name: "Python3",
        },
      ],
      cloudTechAnddeploymentTools: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",
          name: "Docker",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
          name: "Nginx",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
          name: "AWS",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          name: "GCP",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
          name: "Heroku",
        },
      ],
      sourceControlAndCiUsed: [
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          name: "Git",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          name: "Github",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
          name: "Gitlab",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
          name: "BitBucket",
        },
        {
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
          name: "JIRA",
        },
      ],
    };
  }
  render() {
    return (
      <section className="about-me-section py-2">
        <Row>
          {/* <Row> style={{ height: "100vh", overflow: "hidden" }}> */}
          <Col md={5} className="d-flex flex-column">
            <p className="heading bg-red p-2">About Me</p>
          </Col>
          <Col md={7} className="about-me-container">
            <div className="about-me-text p-3">
              <p className="my-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim.
              </p>
              <br />
              <ExperienceTools experienceName={"Front-end languages & Frameworks Used"} tools={this.state.frontEndTools} />
              <br />
              <ExperienceTools experienceName={"Back-end languages & Frameworks Used"} tools={this.state.backEndTools} />
              <br />
              <ExperienceTools experienceName={"Cloud Technologies & Deployment Tools Used"} tools={this.state.cloudTechAnddeploymentTools} />
              <br />
              <ExperienceTools experienceName={"Source Control and Management Tools Used"} tools={this.state.sourceControlAndCiUsed} />
              <br />
              <p className="my-3">
                These are some of the technologies i have used during my experience and i am comfortable with. Though i am open to learn new
                technologies and also keen to learn any new things.
              </p>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}

export default AboutMe;
