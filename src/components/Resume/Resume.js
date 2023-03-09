import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Murshid_CV.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
      <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "1%", paddingTop: "2%"}}>
          <Button style = {{ borderRadius:"8px",borderWidth:1,height:"2.7em"}} variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer - QWQER"
              date="December 2021 - Present"
              content={[
                "Contributing to the developement of a online shopping application.",
                "BackEnd developement using Node.",
                "FrontEnd Developement using Vue",
                "Server management and deploy using GitHub CI/CD",
              ]}
            />
            <Resumecontent
              title="Security Analyst - BrizoTech labs"
              date="July 2020 - August 2021"
              content={[
                "Conduct Penetration Tests",
                "Create Detailed Vulnerability Assesment Report",
                "Give suggestions to close the Vulnerabilities",
              ]}
            />
            <Resumecontent
              title="Android developer - Freelance"
              date="2019-2020"
              content={[
                "Creating basic android application in JAVA using Android Studio"
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="College of Engineering Chengannur"
              date="2016 - 2020"
              content={["B-Tech Computer Science"]}
            />
            <Resumecontent
              title="R M Higher Secondary School"
              date="2014 - 2016"
              content={["Higher Secondary"]}
            />
            <Resumecontent
              title="R M Higher Secondary School"
              date="2015"
              content={["Matriculation"]}
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
