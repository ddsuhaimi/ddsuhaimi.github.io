import React from "react";
import { Col, Button } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id="contact" className="full-vh d-flex justify-content-center align-items-center">
      <Col data-aos="fade-up" lg={4}>
        <h2 className="title-color">
          <span className="mono text-primary">04.</span> Let's get to work
        </h2>
        <hr className="border-light" />
        <div className="d-flex align-items-center flex-column">
          <p>Great news! I am available. Let's discuss your idea.</p>
          <p>
            
              <Button href="mailto:dedisuhaimiacc@gmail.com" className="d-flex align-items-center" size="lg" variant="outline-primary">
                <MdEmail></MdEmail>&nbsp;Get in touch
              </Button>
          
          </p>
          <p>or if you prefer contacting by other means</p>
          <ul className="list-unstyled d-flex justify-content-between ">
            <li className="mx-2">
              <Button href="https://www.github.com/ddsuhaimi" variant="outline-primary">
                <FaGithub />
              </Button>
            </li>
            <li className="mx-2">
              <Button href="https://www.twitter.com/dsuhaimiid" variant="outline-primary">
                <FaTwitter />
              </Button>
            </li>
            <li className="mx-2">
              <Button href="https://linkedin.com/in/dedi-suhaimi" variant="outline-primary">
                <FaLinkedin />
              </Button>
            </li>
            <li className="mx-2">
              <Button href="https://instagram.com/dediacc" variant="outline-primary">
                <FaInstagram />
              </Button>
            </li>
          </ul>
        </div>
      </Col>
    </section>
  );
};

export default Contact;
