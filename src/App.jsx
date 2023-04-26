import styled from "styled-components";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    
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

      <div id="home">
        <Hero handleClick={handleClick} />
      </div>
      <div id="about">
        <Who handleClick={handleClick} />
      </div>
      <div id="projects">
        <Works handleClick={handleClick} />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Container>
  );
}

export default App;
