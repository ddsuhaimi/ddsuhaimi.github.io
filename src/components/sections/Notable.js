import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Notable = () => {
  const projects = [
    {
      title: "Beach Resort",
      desc:
        "Interactive resort website which listed all available rooms. Feature includes room filtering and room-wise page.",
      stacks: ["React", "Context", "Contentful"],
      links: ["https://github.com/dediacc/react-beach-resort-recording", ""],
    },
    {
      title: "Jobify",
      desc:
        "Searching for has never been easier. Jobify collects job post from various websites based on user's search and location.",
      stacks: ["React", "API", "Bootstrap"],
      links: ["#", "#"],
    },
    {
      title: "Mamah Dedeh",
      desc:
        "Mamah Dedeh recommends a recipe for available ingredients using machine learning algorithm called cosine similarity.",
      stacks: ["Python", "Sklearn", "BS4"],
      links: ["https://github.com/BimaAdi/Rekom-Resep-Mamah-Dedeh", ""],
    },
    {
      title: "Scholarshipee",
      desc:
    `A script I used to scrape scholarships and filter them based on spesific criteria. Feature includes exporting to csv`,
      stacks: ["Python", "BeautifulSoup", ],
      links: ["#", ""],
    },
  ];
  return (
    <Col data-aos="fade-up" className="mb-5" lg={8} >
      <h2 className="title-color">
        <span className="mono text-primary"></span> ... and other notable
        projects
      </h2>
      <Row className="d-flex flex-wrap">
        {projects.map((project) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="project-desc my-4">
              <Card.Header>
                <ul className="mb-0 d-flex align-items-center float-right list-unstyled">
                  {project.links[0] && <li className="ml-4">
                    <a className="text-light" href={project.links[0]}>
                      <FaGithub />
                    </a>
                  </li>}
                  {project.links[1] && <li className="ml-4">
                    <a className="text-light" href={project.links[1]}>
                      <FaExternalLinkAlt />
                    </a>
                  </li>}
                </ul>
              </Card.Header>
              <Card.Body>
                <Card.Title className="title-color">{project.title}</Card.Title>
                <Card.Text>
                  {project.desc}
                </Card.Text>
                <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-between mono ">
                  {project.stacks.map(stack => (
                    <li>{stack}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default Notable;
