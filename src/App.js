import React from "react";
import "./App.scss";
import Menu from "./components/Menu";
import Hero from './components/sections/Hero';
import Project from './components/sections/Project'
import Work from './components/sections/Work'
import Technology from './components/sections/Technology'
import Contact from './components/sections/Contact'
import { Container } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <Container fluid className="px-0">
      <div className="App">
        <Menu />
        <Hero />
        <Work />
        <Project />
        <Technology />
        <Contact />
      </div>
    </Container>
  );
}

export default App;
