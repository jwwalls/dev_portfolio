import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  padding-top: 200px;
  padding-right: 100px;
  padding-left: 50px;
  padding-bottom: 100px;
  flex: 1;

  display: flex;
  max-width: 40%;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.a`
  text-decoration: none;
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Skills = styled.div`
  width: 90px;
  height: 120px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #da4ea2);
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(5, 6, 45);
  border-radius: 17px;
  width: 100%;
  height: 100%;

  img {
    height: 60px;
  }
`;

const Name = styled.div`
  color: white;
  margin-top: 5px;
`;

const SkillsData = [
  { name: "JavaScript", src: "src/assets/tech/javascript.png" },
  { name: "Python", src: "src/assets/tech/python.png" },
  { name: "C", src: "src/assets/tech/c.png" },
  { name: "Linux", src: "src/assets/tech/linux.png" },
  { name: "React.js", src: "src/assets/tech/reactjs.png" },
  { name: "Git", src: "src/assets/tech/git.png" },
  { name: "MongoDB", src: "src/assets/tech/mongodb.png" },
  { name: "Node.js", src: "src/assets/tech/nodejs.png" },
  { name: "PostgreSQL", src: "src/assets/tech/psql.png" },
  { name: "Docker", src: "src/assets/tech/docker.png" },
  { name: "HTML", src: "src/assets/tech/html.png" },
  { name: "CSS", src: "src/assets/tech/css.png" },
  { name: "Flask", src: "src/assets/tech/flask.png" },
  { name: "Three.js", src: "src/assets/tech/three.png" },
  { name: "Tailwind", src: "src/assets/tech/tailwind.png" },

];

const Who = () => {
  return (
    <div id="about">
      <Section className="studio">
        <Container>
          <Left>
            {SkillsData.map((skill, index) => (
              <Skills key={index}>
                <Box>
                  <img src={skill.src} alt={skill.name} />
                  <Name>{skill.name}</Name>
                </Box>
              </Skills>
            ))}
          </Left>
          <Right>
            <Title>Fullstack Developer</Title>
            <WhatWeDo>
              <Line src="./img/line.png" />
              <Subtitle>What I Do</Subtitle>
            </WhatWeDo>
            <Desc>
              Confident in my abilities to handle both front-end and back-end
              development tasks. I have a strong proficiency in adapting to new
              languages and situations, allowing me to quickly learn and apply
              new technologies to meet project requirements.
            </Desc>
            <Button href="#projects">See My Projects</Button>
          </Right>
        </Container>
      </Section>
    </div>
  );
};

export default Who;
