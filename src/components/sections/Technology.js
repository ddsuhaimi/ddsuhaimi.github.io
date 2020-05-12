import React from "react";
import { Col, Row } from "react-bootstrap";
const Technology = () => {
  const skills = [
    { title: "language", stacks: ["Javascript", "HTML", "CSS/Sass", "Python", "SQL", "Matlab", "Actionscript 3.0"] },
    { title: "framework", stacks: ["React", "Redux",  "Boostrap", "Bulma", "Chart.js", "Leaflet", "BeautifulSoup"] },
    { title: "tools", stacks: ["Visual Studio Code", "Git & Github", "Chrome Dev Tools", "NPM"] },
  ];
  return (
    <section id="technology" className="full-vh d-flex justify-content-center align-items-center">
      <Col data-aos="fade-up" lg={8}>
        <h2 className="title-color">
          <span className="mono text-primary">02.</span> Things I am familiar
          with
        </h2>
        <hr className="border-light" />
        <Row className="d-flex justify-content-between">
          {skills.map((skill) => (
            <Col md={4}>
              <h4 className="text-uppercase text-primary">{skill.title}</h4>
              <ul className="technology list-unstyled">
                {skill.stacks.map(stack=>(
                  <li>{stack}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Col>
    </section>
  );
};

export default Technology;
