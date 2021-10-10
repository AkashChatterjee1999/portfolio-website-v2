import React from "react";
import "./styles/getInTouch.scss";
import { Container, Row, Col } from "reactstrap";
import { Mail, MapPin, Phone, X } from "react-feather";
import SocialIconsRow from "./ui-elements/socialIcons";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";

const defaultProps = {
  options: ["Freelance Projects", "Just Interacting", "Other"],
  getOptionLabel: (option) => option,
};

class GetInTouch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedReason: "",
      snackBarOpen: false,
    };
    this.nameInputRef = React.createRef();
    this.emailInputRef = React.createRef();
    this.commentInputRef = React.createRef();
    this.reasonInputRef = React.createRef();

    this.nameInputRef1 = React.createRef();
    this.emailInputRef1 = React.createRef();
    this.commentInputRef1 = React.createRef();
    this.reasonInputRef1 = React.createRef();
  }

  encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  handleMobileFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ snackBarOpen: true });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "Get-in-Touch (Mobile)",
        name: this.nameInputRef1.value,
        email: this.emailInputRef1.value,
        comment: this.commentInputRef1.value,
        reason: this.reasonInputRef1.value,
      }),
    })
      .then(() => setTimeout((window.location.href = "/"), 4000))
      .catch((error) => alert(error));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ snackBarOpen: true });

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "Get-in-Touch (Desktop)",
        name: this.nameInputRef.value,
        email: this.emailInputRef.value,
        comment: this.commentInputRef.value,
        reason: this.reasonInputRef.value,
      }),
    })
      .then(() => setTimeout((window.location.href = "/"), 4000))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <section className="get-in-touch">
        <Container fluid className="display-not-on-phone d-flex">
          <Col md={5} className="p-3 d-flex flex-column p-4">
            <h3>Get In Touch</h3>
            <p style={{ fontSize: "14px", maxWidth: "500px" }}>
              Hi Friend,i am eager to get in touch with you, please fill this short form so that you cantact me for any Freelance projects
            </p>
            <div className="mx-auto d-flex flex-column my-3" style={{ maxWidth: "300px" }}>
              <Row className="px-3 my-2 d-flex">
                <Phone className="my-auto" />
                <p className="my-auto mx-3" style={{ fontSize: "13px" }}>
                  +91-8768559623
                </p>
              </Row>
              <Row className="px-3 my-2 d-flex">
                <Mail className="my-auto" />
                <p className="my-auto mx-3" style={{ fontSize: "13px" }}>
                  akashchatterjee1000@gmail.com
                </p>
              </Row>
              <Row className="px-3 my-2 d-flex">
                <MapPin className="my-auto" />
                <p className="my-auto mx-3" style={{ fontSize: "13px" }}>
                  Durgapur, WB, India
                </p>
              </Row>
            </div>
            <SocialIconsRow />
          </Col>
          <Col md={7} className="d-flex flex-column">
            <Container className="m-auto p-3 bg-red" style={{ borderRadius: "20px", maxWidth: "650px" }}>
              <form onSubmit={this.handleFormSubmit}>
                <div className="d-flex justify-content-between px-3">
                  <TextField
                    id="filled-name"
                    label="Your Name"
                    type="text"
                    variant="standard"
                    required
                    minlength="3"
                    inputRef={(el) => {
                      this.nameInputRef = el;
                    }}
                    sx={{
                      width: "200px",
                      maxWidth: "200px",
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                      "& label": {
                        color: "#fff",
                      },
                      "& label.Mui-focused": {
                        color: "#fff",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#fff",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#fff",
                      },
                    }}
                  />
                  <TextField
                    id="filled-email"
                    label="Email id"
                    type="email"
                    variant="standard"
                    required
                    className="w-50"
                    inputRef={(el) => {
                      this.emailInputRef = el;
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                      "& label": {
                        color: "#fff",
                      },
                      "& label.Mui-focused": {
                        color: "#fff",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#fff",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#fff",
                      },
                    }}
                  />
                </div>
                <br />
                <div className="d-flex justify-content-between px-3">
                  <TextField
                    id="outlined-multiline-static"
                    label="Your comment"
                    inputRef={(el) => {
                      this.commentInputRef = el;
                    }}
                    multiline
                    required
                    minlength="10"
                    rows={3}
                    className="w-50"
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "white",
                        borderColor: "white",
                      },
                      "& label": {
                        color: "#fff",
                      },
                      "& label.Mui-focused": {
                        color: "#fff",
                      },
                    }}
                  />
                  <Autocomplete
                    {...defaultProps}
                    sx={{
                      width: "200px",
                      maxWidth: "200px",
                    }}
                    id="disable-close-on-select"
                    onChange={(e) => this.setState({ selectedReason: e.target.innerText })}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Reason"
                        inputRef={(el) => {
                          this.reasonInputRef = el;
                        }}
                        required
                        variant="standard"
                        sx={{
                          "& .MuiInputBase-root": {
                            color: "white",
                            borderColor: "white",
                          },
                          "& label": {
                            color: "#fff",
                          },
                          "& label.Mui-focused": {
                            color: "#fff",
                          },
                        }}
                      />
                    )}
                  />
                </div>
                <br />
                <div className="m-auto" style={{ width: "max-content", height: "max-content" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    className="d-block bottom-btn-text-color"
                    disabled={
                      this.nameInputRef.value !== "" &&
                      this.reasonInputRef.value !== "" &&
                      this.commentInputRef.value !== "" &&
                      this.emailInputRef.value !== ""
                        ? true
                        : false
                    }
                    sx={{
                      background: "white",
                    }}>
                    Submit
                  </Button>
                </div>
              </form>
            </Container>
          </Col>
          <Snackbar
            open={this.state.snackBarOpen}
            autoHideDuration={6000}
            onClose={(e) => this.setState({ snackBarOpen: false })}
            message={"Thanks for connecting!"}
            action={
              <React.Fragment>
                <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={(e) => this.setState({ snackBarOpen: false })}>
                  <X />
                </IconButton>
              </React.Fragment>
            }
          />
        </Container>

        <Container fluid className="display-on-phone d-flex flex-column">
          <Col md={5} className="p-3 d-flex flex-column p-4">
            <h3>Get In Touch</h3>
            <p style={{ fontSize: "14px", maxWidth: "500px" }}>
              Hi Friend,i am eager to get in touch with you, please fill this short form so that you cantact me for any Freelance projects
            </p>
            <div className="mx-auto d-flex flex-column my-3" style={{ maxWidth: "300px" }}>
              <Row className="px-3 my-2 d-flex">
                <Phone className="my-auto" />
                <p className="my-auto mx-3" style={{ fontSize: "13px" }}>
                  +91-8768559623
                </p>
              </Row>
              <Row className="px-3 my-2 d-flex">
                <Mail className="my-auto" />
                <p className="my-auto mx-3" style={{ fontSize: "13px" }}>
                  akashchatterjee1000@gmail.com
                </p>
              </Row>
              <Row className="px-3 my-2 d-flex">
                <MapPin className="my-auto" />
                <p className="my-auto mx-3" style={{ fontSize: "13px" }}>
                  Durgapur, WB, India
                </p>
              </Row>
            </div>
          </Col>
          <Container className="m-auto p-3 bg-red" style={{ borderRadius: "20px", maxWidth: "650px" }}>
            <form onSubmit={this.handleMobileFormSubmit}>
              <TextField
                id="filled-name"
                label="Your Name"
                type="text"
                minlength="3"
                required
                variant="standard"
                className="w-100 my-2"
                inputRef={(el) => {
                  this.nameInputRef1 = el;
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                  "& label": {
                    color: "#fff",
                  },
                  "& label.Mui-focused": {
                    color: "#fff",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#fff",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#fff",
                  },
                }}
              />
              <br />
              <TextField
                id="filled-email"
                label="Email id"
                type="email"
                variant="standard"
                required
                className="w-100 my-2"
                inputRef={(el) => {
                  this.emailInputRef1 = el;
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                  "& label": {
                    color: "#fff",
                  },
                  "& label.Mui-focused": {
                    color: "#fff",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#fff",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#fff",
                  },
                }}
              />
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Your comment"
                className="w-100 my-2"
                multiline
                required
                minlength="10"
                inputRef={(el) => {
                  this.commentInputRef1 = el;
                }}
                rows={3}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                    borderColor: "white",
                  },
                  "& label": {
                    color: "#fff",
                  },
                  "& label.Mui-focused": {
                    color: "#fff",
                  },
                }}
              />
              <br />
              <Autocomplete
                {...defaultProps}
                id="disable-close-on-select"
                className="w-100 my-2"
                onChange={(e) => this.setState({ selectedReason: e.target.innerText })}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Reason"
                    variant="standard"
                    required
                    inputRef={(el) => {
                      this.reasonInputRef1 = el;
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "white",
                        borderColor: "white",
                      },
                      "& label": {
                        color: "#fff",
                      },
                      "& label.Mui-focused": {
                        color: "#fff",
                      },
                    }}
                  />
                )}
              />
              <br />
              <div className="m-auto" style={{ width: "max-content", height: "max-content" }}>
                <Button
                  type="submit"
                  disabled={
                    this.nameInputRef1.value !== "" &&
                    this.reasonInputRef1.value !== "" &&
                    this.commentInputRef1.value !== "" &&
                    this.emailInputRef1.value !== ""
                      ? true
                      : false
                  }
                  variant="contained"
                  className="d-block bottom-btn-text-color"
                  sx={{
                    background: "white",
                  }}>
                  Submit
                </Button>
              </div>
            </form>
          </Container>
          <Snackbar
            open={this.state.snackBarOpen}
            autoHideDuration={6000}
            onClose={(e) => this.setState({ snackBarOpen: false })}
            message={"Thanks for connecting!"}
            action={
              <React.Fragment>
                <IconButton aria-label="close" color="inherit" sx={{ p: 0.5 }} onClick={(e) => this.setState({ snackBarOpen: false })}>
                  <X />
                </IconButton>
              </React.Fragment>
            }
          />
          <p className="my-3" style={{ fontWeight: 400, fontSize: "12px" }}>
            Please do connect with me from the above links and do checkout thgem. It will be appreciated if you want to send me a personalized message
            from the in-site mailer
          </p>
          <SocialIconsRow className="my-3 mx-auto" />
        </Container>
        <p style={{ fontWeight: 600, fontSize: "16px", width: "max-content" }} className="ml-auto mx-5">
          crafted by @Akash Chatterjee, 2021
        </p>
      </section>
    );
  }
}

export default GetInTouch;
