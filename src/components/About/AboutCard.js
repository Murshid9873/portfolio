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
            Hey There, I am <span className="purple">Murshid V P </span>,
            Software Developer Intern from{" "}
            <span className="purple"> Kozhikode</span> - Kerala, India.
            <br />
            <br />
            I'm familiar with 
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> HTML
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> CSS
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Bootstrap 
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Javascript
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Angular
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Python
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Github
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
