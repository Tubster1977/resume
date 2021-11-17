import React from "react";
import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="fi-rr-magic-wand option-icon"></i>Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <i class="fi-rr-archive option-icon"></i>Work
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <i class="fi-rr-user option-icon"></i>Contact
        </a>
      </div>
      <div className="web-option">
        <img
          src={require("../../../assets/Toby.png").default}
          alt="what Toby looks like"
          className="Toby"
        />
      </div>
    </div>
  );
}

export default Web;
