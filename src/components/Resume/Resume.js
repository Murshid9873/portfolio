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
              title="Software Developer Intern - BAABTA Technologies"
              date="september 2022 - Present"
              content={[
                "Contributing to the developement of landing pages and dashboards.",
                "Frontend developement using HTML,CSS,Bootstrap and Angular.",
                "BackEnd Developement using Python"
              ]}
            />
            
          </Col>
          <Col md={6} className="resume-right">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Awh Engineering College"
              date="2018 - 2022"
              content={["B-Tech Computer Science"]}
            />
            <Resumecontent
              title="Auxilium Nava Jyoti School"
              date="2016 - 2018"
              content={["Higher Secondary"]}
            />
            <Resumecontent
              title="Markaz English Medium School"
              date="2016"
              content={["Matriculation"]}
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
