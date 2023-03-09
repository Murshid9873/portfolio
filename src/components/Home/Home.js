import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/murshid.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header"><Row>
              <h1 style={{ paddingBottom: 35, fontSize:"50rem"}} className="heading">
                <span className="wave">Hello !</span>
              </h1>
              </Row>
              <Row>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Murshid V P</strong>
              </h1>
              </Row>
              <Row>
              <div style={{ padding: 4, textAlign: "left" }}>
                <Type />
              </div>
              </Row>
            </Col>

            <Col md={6} className="m-auto">
              <div className="pro_photo">
              <img
                src={homeLogo}
                style={{
                  marginTop:"2em",
                  width: 350,
                  height: 350,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  borderWidth: 5,
                  borderColor: 'red',
                }}
                alt="home pic"
                className="d-block mx-auto img-fluid"
              />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
