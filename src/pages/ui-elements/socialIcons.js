import React from "react";
import { Row } from "reactstrap";
const iconSize = "35px";

class SocialIconsRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`d-flex mt-2 ${this.props.className ? this.props.className : ""}`}>
        <a
          href="https://www.facebook.com/profile.php?id=100044855328540"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}>
          <div className="mx-2" style={{ width: "max-content", height: "max-content", fontSize: iconSize, cursor: "pointer" }}>
            <i className="fab fa-facebook"></i>
          </div>
        </a>
        <a
          href="https://github.com/AkashChatterjee1999?tab=repositories"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}>
          <div className="mx-2" style={{ width: "max-content", height: "max-content", fontSize: iconSize, cursor: "pointer" }}>
            <i class="fab fa-github"></i>
          </div>
        </a>
        <a href="mailto:akashchatterjee1000@gmail.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>
          <div className="mx-2" style={{ width: "max-content", height: "max-content", fontSize: iconSize, cursor: "pointer" }}>
            <i class="fab fa-google-plus"></i>
          </div>
        </a>
        <a
          href="https://linkedin.com/in/akash-chatterjee-27024719b"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}>
          <div className="mx-2" style={{ width: "max-content", height: "max-content", fontSize: iconSize, cursor: "pointer" }}>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </a>
        <a
          href="https://www.hackerrank.com/2020_CSE_3B_07?hr_r=1"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}>
          <div className="mx-2" style={{ width: "max-content", height: "max-content", fontSize: iconSize, cursor: "pointer" }}>
            <i class="fab fa-hackerrank"></i>
          </div>
        </a>
        <a href="https://www.codechef.com/users/akash12345678" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "white" }}>
          <div className="mx-1 d-block" style={{ width: "max-content", height: "max-content", fontSize: "40px", cursor: "pointer" }}>
            <span className="iconify m-auto" data-icon="simple-icons:codechef" style={{ color: "white" }}></span>
          </div>
        </a>
        <a
          href="https://codeforces.com/profile/akashchatterjee1000"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}>
          <div className="mx-1 d-block" style={{ width: "max-content", height: "max-content", fontSize: "40px", cursor: "pointer" }}>
            <span className="iconify m-auto" data-icon="simple-icons:codeforces" style={{ color: "white" }}></span>
          </div>
        </a>
      </div>
    );
  }
}

export default SocialIconsRow;
