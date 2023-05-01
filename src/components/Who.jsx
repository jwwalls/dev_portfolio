import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 1%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: none;
  }
`;
const Left = styled.div`
  
  flex: 1;
 
  width: 50%;
  display: flex;
  align-items: center
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    flex-direction: column;
    scroll-snap-align: center;
    justify-content: center;
    padding: 0;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 0px;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    marigin-bottom: 15px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;

    width: 100%;
    height: 50%;

    gap: 20px;
    scroll-snap-align: center;
  }
`;

const WhatIDo = styled.div`
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
  @media only screen and (max-width: 768px) {
    margin: 0px;
    padding: 10px;
    
  }
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
  width: 15%;
  height: 20%;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #da4ea2);

  @media only screen and (max-width: 768px) {
    width: 70px;
    height: 90px;
  }
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
    height: 50%;
    @media only screen and (max-width: 768px) {
      height: 45px;
    }
  }
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  width: 600px;

  align-items: center;
  justify-content: center;

  gap: 10px;

  @media only screen and (max-width: 768px) {
    height: 600px;
    width: 300px;
  }
`;

const Name = styled.div`
  color: white;
  margin-top: 5px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const SkillsMobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    font-size: 20px
    padding: 10px;
  }

`;

const SkillsData = [
  { name: "JavaScript", src: "./img/javascript.png" },
  { name: "Python", src: "./img/python.png" },
  { name: "C", src: "./img/c.png" },
  { name: "Linux", src: "./img/linux.png" },
  { name: "Docker", src: "./img/docker.png" },
  { name: "Git", src: "./img/git.png" },
  { name: "MongoDB", src: "./img/mongodb.png" },
  { name: "Node.js", src: "./img/nodejs.png" },
  { name: "PostgreSQL", src: "./img/psql.png" },
  { name: "Flask", src: "./img/flask.png" },
  { name: "HTML", src: "./img/html.png" },
  { name: "CSS", src: "./img/css.png" },
  { name: "React.js", src: "./img/reactjs.png" },
  { name: "Three.js", src: "./img/three.png" },
  { name: "Tailwind", src: "./img/tailwind.png" },
];

const Who = ({ handleClick }) => {
  const handleButtonClick = () => {
    handleClick("projects");
  };

  return (
    <Section className="studio">
      <Container>
        <Left>
          {" "}
          <SkillsMobile>Technologies</SkillsMobile>
          <SkillsContainer>
            {SkillsData.map((skill, index) => (
              <Skills key={index}>
                <Box>
                  <img src={skill.src} alt={skill.name} />
                  <Name>{skill.name}</Name>
                </Box>
              </Skills>
            ))}
          </SkillsContainer>
        </Left>
        <Right>
          <Title>Fullstack Developer</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatIDo>
          <Desc>
            Confident in my abilities to handle both front-end and back-end
            development tasks. I have a strong proficiency in adapting to new
            languages and situations, allowing me to quickly learn and apply new
            technologies to meet project requirements.
          </Desc>
          <Button href="#projects" onClick={handleButtonClick}>
            See My Projects
          </Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
