import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">PATHAN BABA FAKRUDDIN </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am a first-year student and a fresher passionate about learning technology, building real projects, and improving my skills every day..
            <br />
            Apart from coding, I enjoy doing a few activities that keep me active and creative.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Outdoor Activities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">PATHAN BABA FAKRUDDIN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
