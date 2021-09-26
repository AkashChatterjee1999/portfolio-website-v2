import React from "react";
import "./styles/home.scss";
import { Row, Col } from "reactstrap";
import Typical from "react-typical";
import { ArrowDown } from "react-feather";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="home-section">
        <p className="top-title">Akash Chatterjee</p>
        <Row className="px-2">
          <Col md={7} className="left-col-banner">
            <div className="banner p-3">
              <p>Hey!, I am Akash.</p>
              <p className="moving-title">
                I am a&nbsp;
                <Typical
                  className="bg-red"
                  steps={["Full Stack Developer.", 1500, "Devops Engineer.", 1500, "Competitve Coder.", 1500]}
                  loop={Infinity}
                  wrapper={"span"}
                />
              </p>
              <p className="subtitle">
                Working in web development from development to deployment, from designing systems to end-to-end delivery, from simple web pages to
                complex websockets applications, i have variety of experiences in web development, devops, and scaling a startup.
              </p>
            </div>
          </Col>
        </Row>
        <div className="bouncing-div">
          <p className="bouncing-text">
            Scroll Down
            <ArrowDown className="mt-2 mx-auto" />
          </p>
        </div>
      </section>
    );
  }
}

export default Home;
