import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;

  color: ${(props) => (props.selected ? "#da4ea2" : "transparent")};
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #da4ea2;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Projects = styled.div`
  width: 100%;

  height: 700px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #da4ea2);
`;
const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(5, 6, 45);
  border-radius: 17px;
  width: 100%;
  height: 100%;
`;
const Button = styled.a`
  display: flex;
  align-self: flex-start;
  margin-left: 70px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
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

const Works = ({handleClick}) => {
  const [work, setWork] = useState("");
  const [data, setData] = useState([
    { name: "Data-Structure Visualizer", selected: true },
    { name: "Stock Trading API", selected: false },
    { name: "Social Media App", selected: false },
    { name: "Arcade App", selected: false },
    { name: "Flight Tracker App", selected: false },
  ]);

  const handleItemClick = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.forEach((item, i) => {
        if (i === index) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      
      return newData;
    });
    setWork(data[index].name);
  };
  const handleButtonClick = () => {
    handleClick("contact");
  };
  
  return (
   
      <Section>
        <Container>
          <Left>
            <List>
              {data.map((item, index) => (
                <ListItem
                  selected={item.selected}
                  key={item.name}
                  text={item.name}
                  onClick={() => handleItemClick(index)}
                >
                  {item.name}
                </ListItem>
              ))}
            </List>
            <Button href="#contact" onClick={handleButtonClick}>Contact Me</Button>
          </Left>
          <Right>
            <Projects>
              <ProjectBox>
                {work === "Data-Structure Visualizer" ? (
                  <ProjectCard projectId="ds-visualizer" />
                ) : work === "Stock Trading API" ? (
                  <ProjectCard projectId="e-commerce" />
                ) : work === "Social Media App" ? (
                  <ProjectCard projectId="social-media" />
                ) : work === "Arcade App" ? (
                  <ProjectCard projectId="arcade" />
                ) : work === "Flight Tracker App" ? (
                  <ProjectCard projectId="flight" />
                ) : (
                  <ProjectCard projectId="ds-visualizer" />
                )}
              </ProjectBox>
            </Projects>
          </Right>
        </Container>
      </Section>
   
  );
};

export default Works;
