import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Notable from './Notable'
import tagihanku from '../../assets/image/tagihanku.png'
import covid19 from '../../assets/image/covid19.png'
import tutor from '../../assets/image/tutor.png'
import noteed from '../../assets/image/noteed.png'
const Project = () => {
  const works = [
    {
      featured: true,
      title: "Noteed",
      image: noteed,
      desc:
        "Noteed is a note-taking web app that allows user to create note with full CRUD functionality. It also allows login or register for a new user.",
      stacks: ["Node.js", "MongoDB", "Express", "React", "Redux", "Material UI"],
      links: [
        "https://github.com/ddsuhaimi/noteed",
        "https://noteed.herokuapp.com",
      ],
    },
    {
      featured: true,
      title: "Tagihanku",
      image: tagihanku,
      desc:
        "Tagihanku is web app that generate an invoice in seconds. Features include logo (any size you want), various custom fields, save to jpeg etc.",
      stacks: ["React", "Bootstrap", "Redux"],
      links: [
        "https://github.com/ddsuhaimi/tagihanku",
        "https://tagihanku.now.sh/",
      ],
    },
    {
      featured: true,
      title: "Covid-19 World Stats",
      image: covid19,
      desc:
        "An interactive dashboard displaying Corona Virus infection statistics across the world. Features include worldwide and country-wise dashobard, interactive charts and maps.",
      stacks: ["React", "Chart.js", "Context API", "NovelCovid API", "Leaflet", "Bulma"],
      links: [
        "https://github.com/ddsuhaimi/coronavirus-dashboard-react",
        "https://covid19worldstatsxyz.netlify.app/",
      ],
    },
    {
      featured: true,
      title: "Tutor Management System",
      image: tutor,
      desc:
        "An admin dashoard for managing tutor in a school system. Admin can perfom CRUD (Create, Read, Update and Delete) functionality.",
      stacks: ["React", "Redux", "Bulma"],
      links: [
        "https://github.com/ddsuhaimi/tutor-management",
        "https://tutor-management.now.sh/",
      ],
    },
  ];

  return (
    <section id="project" className="full-vh mb-4 d-flex flex-column justify-content-center align-items-center">
      <Col lg={8}>
        <h2 className="title-color">
          <span className="mono text-primary">02.</span> Things I've built{" "}
        </h2>
        <hr className="border-light"/>
        {works.map((work, i) => (
          <Row data-aos={`${i%2===0 ? "fade-left" : "fade-right"}`}
            className={`mb-4 py-4 d-flex ${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <Col md={6} className="mb-4">
              <Image className="project-image" src={work.image} />
            </Col>
            <Col
              md={6}
              className={`${
                i % 2 === 0 ? "text-right" : "text-left"
              } d-flex align-items-center`}
            >
              <div className="d-flex flex-column">
                <h6 className="mono text-primary">Featured projects</h6>
                <h3 className="title-color">{work.title}</h3>
                <p
                  className={`${
                    i % 2 === 0 ? "float-right" : "float-left"
                  } project-desc text-light py-4 px-2 mb-4`}
                >
                  {work.desc}
                </p>
                <ul
                  className={`${
                    i % 2 === 0
                      ? "justify-content-end"
                      : "justify-content-start"
                  } d-flex flex-wrap list-unstyled mono mb-4`}
                >
                  {work.stacks.map((tech) => (
                    <li className={`${i % 2 === 0 ? "ml-4" : "mr-4"}`}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <p>
                  <ul
                    className={`${
                      i % 2 === 0
                        ? "justify-content-end"
                        : "justify-content-start"
                    } d-flex list-unstyled`}
                  >
                    <li className={`${i % 2 === 0 ? "ml-4" : "mr-4"}`}>
                      <a className="text-light" href={work.links[0]}>
                        <FaGithub></FaGithub>
                      </a>
                    </li>
                    <li className={`${i % 2 === 0 ? "ml-4" : "mr-4"}`}>
                      <a className="text-light" href={work.links[1]}>
                        <FaExternalLinkAlt></FaExternalLinkAlt>
                      </a>
                    </li>
                  </ul>
                </p>
              </div>
            </Col>
          </Row>
        ))}
      </Col>



      <Notable />

    </section>
  );
};

export default Project;
