import React from "react";
import styled from "styled-components";

import { useState, useEffect } from "react";
const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  position: fixed;
  z-index: 9999;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
  }

  &.active:after {
    width: 100%;
  }

  &:hover:after {
    width: 100%;
  }
`;


const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.a`
  text-decoration: none;
  display: flex;
  align-items:  center;
  justify-content: center;
  font-weight: 400;
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Navbar = ({ activeLink, handleClick }) => {
  

  return (
    <Section className="home">
      <Container>
        <Links>
          <Logo src="./img/logos.png" />
          <List>
            <ListItem
              href="#home"
              onClick={() => handleClick("home")}
              className={activeLink === "home" ? "active" : ""}
            >
              Home
            </ListItem>
            <ListItem
              href="#about"
              onClick={() => handleClick("about")}
              className={activeLink === "about" ? "active" : ""}
            >
              About
            </ListItem>
            <ListItem
              href="#projects"
              onClick={() => handleClick("projects")}
              className={activeLink === "projects" ? "active" : ""}
            >
              Projects
            </ListItem>
            <ListItem
              href="#contact"
              onClick={() => handleClick("contact")}
              className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </ListItem>
          </List>
        </Links>
        <Icons>
         
          <Button href="./img/Jeremie_Walls_Resume.docx" >Resume</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
