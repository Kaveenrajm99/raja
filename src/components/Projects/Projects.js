import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Projects/Particle";

import brewery from "../../Assets/brewery.jpg";
import rental from "../../Assets/rental.jfif";
import shopping from "../../Assets/shopping.jfif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brewery}
              isBlog={false}
              title="Brewery Api"
              description="By using DOM manipulation fetching data from third party API's to display their details and using filter to filter the specific key value to disply on screen.In this project learn to get data form api's."
              link="https://github.com/Kaveenrajm99/HACKATHON"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Rental App"
              description="Renting, also known as hiring or letting, is an agreement where a payment is made for the temporary use of a good, service or property owned by another. A gross lease is when the tenant pays a flat rental amount and the landlord pays for all property charges regularly incurred by the ownership.We provide our service to explore the thinks to know."
              link="https://github.com/Kaveenrajm99/HACKATHON2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="RJ Catalog"
              description="Item catalog view  with react.js. Product catalogs are tremendously useful marketing and sales assets that organize all your product information in one place.Since its main objective is to categorize product information."
              link="https://github.com/Kaveenrajm99/capstone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;