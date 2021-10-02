import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, CardFooter, Container, Row } from "reactstrap";
import { Code, Airplay } from "react-feather";
import projectWaveSvg from "../../assets/images/projectCardWave.svg";

class MyProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <Card className="bg-red" style={{ minHeight: "250px" }}>
      //   <CardBody>
      //     <CardTitle tag="h5">{this.props.name}</CardTitle>
      //     <CardSubtitle tag="h6" className="mb-2">
      //       {this.props.description}
      //     </CardSubtitle>
      //     <CardText>{this.props.longDescription}</CardText>
      //   </CardBody>
      //   <CardFooter>
      //     {this.props.repoLink ? (
      //       <Button className="d-flex bg-white">
      //         <Code color="black" strokeWidth={"3px"} />
      //         <a href={this.props.repoLink} className="ml-2" style={{ textDecoration: "none", color: "black" }}>
      //           Code
      //         </a>
      //       </Button>
      //     ) : null}
      //   </CardFooter>
      // </Card>
      <Container
        className="bg-red py-3 px-0"
        fluid
        style={{
          maxWidth: "300px",
          height: "100%",
          overflow: "hidden",
          fontFamily: "Google Sans",
          borderRadius: "10px",
          backgroundImage: `url("${projectWaveSvg}")`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div
          className="p-0"
          style={{
            width: "100%",
            height: "max-content",
            overflow: "hidden",
            minHeight: "100px",
          }}>
          <img src={`${this.props.imageLink}`} style={{ width: "inherit" }} />
        </div>
        <br />
        <Container fluid>
          <h2 style={{ fontSize: "16px" }}>{this.props.name}</h2>
          <p style={{ fontSize: "12px" }}>{this.props.description}</p>
          <br />
          <Row className="d-flex px-3 justify-content-between">
            {this.props.liveLink ? (
              <Button className="d-flex bg-white" style={{ border: "none" }}>
                <Airplay color="black" strokeWidth={"3px"} size="18px" />
                <a href={this.props.liveLink} className="ml-2" style={{ textDecoration: "none", color: "black", fontSize: "12px" }}>
                  View Live
                </a>
              </Button>
            ) : null}
            {this.props.repoLink ? (
              <Button className="d-flex bg-white" style={{ border: "none" }}>
                <Code color="black" strokeWidth={"3px"} size="18px" />
                <a href={this.props.repoLink} className="ml-2" style={{ textDecoration: "none", color: "black", fontSize: "12px" }}>
                  Code
                </a>
              </Button>
            ) : null}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default MyProjectCard;
