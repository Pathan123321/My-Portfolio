import React from "react";
import { Container } from "react-bootstrap";

// PDF path from public folder (must be after imports)

function ResumeNew() {
  const pdf = "/PATHAN_BABA_FAKRUDDIN.pdf";

  return (
    <div className="resume-outer-container">
      <Container className="resume-inner-container">

        <h1 className="resume-title">My Resume</h1>
        <p className="resume-subtitle">Download my updated resume</p>

        {/* Elegant Resume Card */}
        <div className="resume-display-card resume-fade-in">

          <img
            src="/resume-icon.png"
            alt="resume icon"
            className="resume-icon-big"
          />

          <h2 className="resume-card-title">Resume Available</h2>
          <p className="resume-card-text">
            Click the button below to download my complete resume in PDF format.
          </p>

          <button className="resume-download-button">
            <a href={pdf} target="_blank" rel="noreferrer">
              ⬇ Download Resume
            </a>
          </button>

        </div>

      </Container>
    </div>
  );
}
export default ResumeNew;