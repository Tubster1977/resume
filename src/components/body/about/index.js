import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div>
      <div className="about">
        <div className="about-top">
          <div className="about-info">
            Hello there 👋🏽, my name is <br />
            <span className="info-name">Toby</span>.
            <br /> I'm at the beginning of an exciting new career in web and
            software development.
          </div>
          <div>
            <img
              src={require("../../../assets/coding.png").default}
              alt="man coding"
              className="picture"
            />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-top">
          <div className="about-info">
            I have an interest in digital photography and visual design. <br />
            <br /> You'll often find me processing my own images so that they
            can be used on my websites.
          </div>
          <div>
            <img
              src={require("../../../assets/aperture.gif").default}
              alt="aperture gif"
              className="picture-2"
            />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-top">
          <div className="about-info">
            As a former science teacher, I have a passion for environmental
            issues such as climate change and biodiversity. <br />
            <br /> Many of my personal web projects center around these
            concerns.
          </div>
          <div>
            <img
              src={require("../../../assets/leaf.gif").default}
              alt="leaf gif"
              className="picture-2"
            />
          </div>
        </div>
        <SocialContact />
      </div>
    </div>
  );
}

export default About;
