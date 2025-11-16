import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

  <Col xs={4} md={2} className="tech-item">
    <SiVisualstudiocode className="tech-icon" />
    <p className="tech-name">VS Code</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <SiPostman className="tech-icon" />
    <p className="tech-name">Postman</p>
  </Col>

  <Col xs={4} md={2} className="tech-item">
    <SiVercel className="tech-icon" />
    <p className="tech-name">Vercel</p>
  </Col>

</Row>

  );
}

export default Toolstack;
