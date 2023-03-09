import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              A highly motivated person, dynamic, persevering and rigorous.
              <br />
              <br /> I'm{" "}
              <b className="purple">Software Developer Intern </b>
              at BAABTA Technologies. 
              <br />
              <br />
              I’m familiar with
              <b className="purple"> Front-end Developement</b>, Using
              <b className="purple"> Angular</b> and 
              <b className="purple"> Back-end Developement</b>, Using
              <b className="purple"> Django</b>
              <br />
              <br /> 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ paddingTop: "40px"}}>FIND ME ON</h1>
            <p>
              Feel free to say<span className="purple"> Hi ! </span>to me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:murshid9873@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/murshd_vp/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Murshid9873"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
