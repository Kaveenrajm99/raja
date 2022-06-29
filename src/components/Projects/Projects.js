import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../components/Projects/Particle";

import spotify from "../../Assets/spotify.png"
import rental from "../../Assets/rental.jfif";
import food from "../../Assets/food.png"
import todo from "../../Assets/images.jfif"

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
              imgPath={spotify}
              isBlog={false}
              title="Spotify UI Clone"
              description="listen music with some functions of small features"
              link="https://github.com/Kaveenrajm99/SpotitifyUiClone"
              view="https://spotify-ui-clone-rj.netlify.app/"
              tech="HTML, Css, Bootstrap and Reactjs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rental}
              isBlog={false}
              title="Rental App"
              description="Renting, also known as hiring or letting, is an agreement where a payment is made for the temporary use of a good, service or property owned by another. A gross lease is when the tenant pays a flat rental amount and the landlord pays for all property charges regularly incurred by the ownership.We provide our service to explore the thinks to know."
              link="https://github.com/Kaveenrajm99/HACKATHON2"
              view="https://rajahackathon2.netlify.app/"
              tech=" HTML, Css, Bootstrap, Reactjs, Expressjs, Nodejs, Mongodb Atlas, NPM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Italian Foods"
              description="Food order apps are the new favorite of the people and that is the final verdict. The ease food delivery apps offer to the people who don’t want to cook at the end of the day is what makes it more loved than any other apps out there."
              link="https://github.com/Kaveenrajm99/italians-food"
              view="https://italians-food.netlify.app/"
              tech="HTML, Css, Bootstrap, Reactjs, Expressjs, Nodejs, Mongodb Atlas, NPM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Pocket App"
              description="Just Anothoer Interactive,Nice beautiful and small to-do application (MERN),Does Everything."
              link="https://github.com/Kaveenrajm99/todo"
              view="https://to-do-rj.netlify.app/"
              tech="HTML, Css, Bootstrap, Reactjs, Expressjs, Nodejs, Mongodb Atlas, NPM"

            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
