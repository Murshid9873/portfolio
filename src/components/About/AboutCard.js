import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey There, I am <span className="purple">Abhiram V V </span>,
            Software Engineer from{" "}
            <span className="purple"> Malappuram</span> - Kerala, India.
            <br />
            <br />
            Apart from being a BackEnd, I'm also familiar with 
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Server Deployment
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> FrontEnd Developement using Vue
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Github CI/CD
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Penetration Testing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
