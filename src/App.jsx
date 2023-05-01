import styled from "styled-components";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
  
`;

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <Container>
      <Navbar activeLink={activeLink} handleClick={handleClick} />
      <section id="home">
        <Hero handleClick={handleClick} />
      </section>
      <section id="about">
        <Who handleClick={handleClick} />
      </section>
      <section id="projects">
        <Works handleClick={handleClick} />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Container>
  );
}

export default App;
