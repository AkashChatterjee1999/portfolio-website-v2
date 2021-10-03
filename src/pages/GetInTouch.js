import React from "react";
import "./styles/getInTouch.scss";
import { Container, Row, Col } from "reactstrap";
import { Mail, MapPin, Phone } from "react-feather";

class GetInTouch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="get-in-touch">
        <Container fluid className="display-not-on-phone">
          <Col md={5} className="p-3 d-flex flex-column p-4">
            <h3>Get In Touch</h3>
            <p style={{ fontSize: "14px", maxWidth: "500px" }}>
              Hi Friend,i am eager to get in touch with you, please fill this short form so that you cantact me for any Freelance projects
            </p>
            <Col sm={8} className="mx-auto my-3">
              <Row className="my-3">
                <div style={{ height: "max-content", width: "max-content" }}>
                  <Phone />
                </div>
                <p className="mx-3" style={{ fontSize: "13px" }}>
                  +91-8768559623
                </p>
              </Row>
              <Row className="my-3">
                <div style={{ height: "max-content", width: "max-content" }}>
                  <Mail />
                </div>
                <p className="mx-3" style={{ fontSize: "13px" }}>
                  akashchatterjee1000@gmail.com
                </p>
              </Row>
              <Row className="my-3">
                <div style={{ height: "max-content", width: "max-content" }}>
                  <MapPin />
                </div>
                <p className="mx-3" style={{ fontSize: "13px" }}>
                  Durgapur, WB, India
                </p>
              </Row>
            </Col>
            <br />
            <br />
            <br />
            <br />
            <Row></Row>
          </Col>
          <Col md={7}></Col>
        </Container>
      </section>
    );
  }
}

export default GetInTouch;
