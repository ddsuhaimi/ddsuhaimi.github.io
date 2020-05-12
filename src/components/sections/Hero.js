import React from "react";
import { Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
  return (
    <section id="about" className="full-vh section d-flex align-items-center justify-content-center">
      <Col data-aos="fade-up" lg={8}>
        <h6 className="text-primary mono">Hi my name is</h6>
        <h1 className="display-1 title-color">Dedi Suhaimi</h1>
        <h2 className="display-4 lighter mb-5"> and I'll build your web apps.</h2>
        <p className="col-sm-8 pl-0 mb-5">
          I am a web developer from Indonesia focusing on developing exceptional
          web apps and everything in web development.
        </p>
        <Button variant="outline-primary">Get in touch</Button>{' '}
      </Col>
    </section>
  );
};

export default Hero;
