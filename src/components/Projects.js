import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projimg4 from "../assets/img/Untitled3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const allProjects = [
    {
    title: "Krishi Setu",
    description: "Smart farming dashboard with AI insights and weather integration.",
    imgUrl: projimg4,
  },
  

  {
    title: "DevSecOps AI",
    description: "A DevSecOps AI tool that helps in automating security checks",
    imgUrl: projImg2,

  },
  {
    title: "TeekaSarthi",
    description: "A digital vaccination tracking system for rural India, enabling Anganwadi workers to record immunization with GPS and photo proof using a mobile-friendly interface.",
    imgUrl: projImg3,
    link: "https://github.com/Vishesh-04/TeekaSarthi"
  },
  {
  title: "JWT Authentication",
  description: "SpringBoot Backend for JWT Authentication",
  imgUrl: projImg1,
  link: "https://github.com/Singh-Aviraj/springboot-jwt-auth"
  },
  {
    title: "Portfolio Website",
    description: "React + Bootstrap based responsive personal portfolio.",
    imgUrl: projImg2,
  },
  
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce platform with cart and checkout.",
    imgUrl: projImg1,
  },
  
  
];

const projectsTab1 = allProjects.slice(0, 3);
const projectsTab2 = allProjects.slice(3, 6);
const projectsTab3 = allProjects.slice(6, 9);


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I love building real-world applications that solve meaningful problems using modern full-stack technologies. From secure authentication systems to AI-powered DevSecOps tools and rural healthcare platforms, each project reflects my passion for clean architecture, scalable code, and purposeful design.

Explore some of the projects I've worked on — combining Java Spring Boot, React.js, PostgreSQL, and cloud-native tools to build solutions that are secure, responsive, and user-friendly.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
  <Tab.Pane eventKey="first">
    <Row>
      {projectsTab1.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  </Tab.Pane>

  <Tab.Pane eventKey="second">
    <Row>
      {projectsTab2.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  </Tab.Pane>

  <Tab.Pane eventKey="third">
    <Row>
      {projectsTab3.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  </Tab.Pane>
</Tab.Content>

                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
