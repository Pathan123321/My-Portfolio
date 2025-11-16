import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

  <Col xs={4} md={2} className="tech-item">
    <CgCPlusPlus className="tech-icon" />
    <p className="tech-name">C++</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <DiJavascript1 className="tech-icon" />
    <p className="tech-name">JavaScript</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <SiNextdotjs className="tech-icon" />
    <p className="tech-name">Next.js</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <DiNodejs className="tech-icon" />
    <p className="tech-name">Node.js</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <DiReact className="tech-icon" />
    <p className="tech-name">React</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <DiGit className="tech-icon" />
    <p className="tech-name">Git</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <SiPostgresql className="tech-icon" />
    <p className="tech-name">PostgreSQL</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <DiPython className="tech-icon" />
    <p className="tech-name">Python</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <DiJava className="tech-icon" />
    <p className="tech-name">Java</p>
  </Col>

</Row>


    </Row>
  );
}

export default Techstack;
