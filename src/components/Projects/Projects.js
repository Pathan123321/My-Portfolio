import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import your project images
import solid from "../../Assets/Projects/solid.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import notes from "../../Assets/Projects/notes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* PROJECT 1 - Solid Waste Management */}
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={solid}
    isBlog={false}
    title="Solid Waste Management"
    description="A digital platform to aggregate secondary resources such as used clothes, e-waste, and leftover food at the household level. Enables distribution to underprivileged communities while promoting environmental cleanliness and awareness."
    ghLink="https://github.com/Pathan123321/solid-waste-managemnet"
    demoLink=""   // Add if you deploy later
  />
</Col>



          {/* PROJECT 2 - Portfolio Website */}
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={portfolio}
    isBlog={false}
    title="Personal Portfolio Website"
    description="A modern personal portfolio website built using React, featuring interactive animations, a responsive UI, custom components, and a fully integrated projects showcase. Designed to demonstrate my development skills and present my work in a clean and professional way."
    ghLink="https://github.com/pathan123321/My-Portfolio"
    demoLink="" // Add your deployed link here when you host your portfolio
  />
</Col>

          {/* PROJECT 3 - Notes Manager */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Student Notes Manager"
              description="A simple and clean notes management app that allows users to create, save, and organize notes using LocalStorage. Perfect for students."
              ghLink="https://github.com/yourusername/notes-app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
