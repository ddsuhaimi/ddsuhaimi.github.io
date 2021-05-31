import React from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import { FaCalendarAlt } from "react-icons/fa";


const Work = () => {
    return (
        <section id="work" className="full-vh mb-4 d-flex flex-column justify-content-center align-items-center">
            <Col data-aos="fade-up" lg={8}>
                <h2 className="title-color">
                    <span className="mono text-primary">01.</span> Places I've worked at{" "}
                </h2>
                <hr className="border-light" />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Formulatrix</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">MIM System</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Syiah Kuala University</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className="role">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h4 className="text-primary mb-0">Software Engineer</h4>
                                    <div className="d-flex align-items-center">
                                        <FaCalendarAlt></FaCalendarAlt>
                                        <span className="text-muted ml-2 mono text-light">November 2020 - present</span>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="pl-3 text-light">
                                            <li>Working on company's liquid handling product Flo i8's user interface using React.js</li>
                                            <li>Contributing to developing company's UI component and design system</li>
                                            <li>Collaborating with various member across the team such as UI/UX designer, quality analyst and other software engineers in tackling and solving UI problems</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h4 className="text-primary mb-0">Front End Developer</h4>
                                    <div className="d-flex align-items-center">
                                        <FaCalendarAlt></FaCalendarAlt>
                                        <span className="text-muted ml-2 mono text-light">June 2020 - July 2020</span>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="pl-3 text-light">
                                            <li>Working on company's internal management system built with React.js and DevExtreme and various other UI technologies</li>
                                            <li>Developing modules and pages while maintaining readability and extensiblity</li>
                                            <li>Migrating old web app to a new template</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h4 className="text-primary mb-0">Laboratory Assistant</h4>
                                    <div className="d-flex align-items-center">
                                        <FaCalendarAlt></FaCalendarAlt>
                                        <span className="text-muted ml-2 mono text-light">June 2017 - July 2019</span>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="pl-3 text-light">
                                            <li>Teaching computational mathematics courses: Algorithm and Programming, Introduction to Multimedia, Mathematics Software. All using ActionScript 3.0</li>
                                            <li>Grading and preparing examinations for said courses</li>
                                            <li>Preparing and maintaining laboratorium week the courses.</li>
                                        </ul>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
        </section>
    )
}

export default Work;
