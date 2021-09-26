import React from "react";
import { Row, Col } from "reactstrap";
import "../styles/aboutMe.scss";

class ExperienceTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h3 className="experience-heading my-2">{this.props.experienceName}</h3>
        <Row className="experience-tool-row px-2">
          {this.props.tools.map((tool) => {
            return (
              <Col sm={6} md={3} lg={2} className="px-2" style={{ width: "max-content", display: "flex", flexDirection: "column" }}>
                <div className="experience-icon" style={{ backgroundImage: `url("${tool.icon}")` }}></div>
                <p className="mx-auto">{tool.name}</p>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default ExperienceTools;
