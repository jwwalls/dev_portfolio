
import React, { Suspense } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  color: white;
  width: 100%;
  height: 100%;
 

  border-radius: 17px;

  img {
    height: 300px;
    width: 100%;
    border-radius: 17px 17px 0px 0px;
  }
`;
const Container = styled.div`
  height: 100%;
  border-top: 2px solid #af40ff;
  border-radius: 0px 0px 17px 17px;
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    gap: 20px;
    margin: 0px;
    height: 80%;
    padding: 10px;
   
    
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  height: 20%;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    font-size: 20px;
    height: 30%;
    
  }
`;
const ProjectDescription = styled.label`
  height: 40%;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    height: auto;
    
  }
`;

const Description = styled.div`
  padding-left: 10px;
  font-size: 17px;
  margin-bottom: 10px;
  color: #da4ea2;
  font-weight: 500;
`;
const ProjectDescriptionText = styled.div`
  font-size: 15px;
  padding-right: 20px;
  padding-left: 20px;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    padding: 0px;
    font-size: 15px;
    
    
  }
`;
const Technologies = styled.div`
  height: 40%;
  @media only screen and (max-width: 768px) {
    margin: 0px;
   display: none;
    
  }
  
`;
const TechnoList = styled.ul`
  padding-left: 40px;
  font-size: 15px;
`;
const Techs = styled.li``;

const Right = styled.div`
  width: 50%;

  
  @media only screen and (max-width: 768px) {
    margin: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin:0px;  
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  height: 20%;
  align-items: center;
  @media only screen and (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    margin-bottom: 0px;
   
    
  }
`;
const Button = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  width: 50%;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    margin: 0px;
   height: 5%;
    
  }
`;

const Challenges = styled.div`
  height: 40%;
  @media only screen and (max-width: 768px) {
    margin: 0px;
   display: none;
   
    
  }
  
`;
const ChallengesText = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
`;
const Lessons = styled.div`
  height: 40%;
  @media only screen and (max-width: 768px) {
    margin: 0px;
   display: none;
    
  }
  
`;
const LessonsText = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
`;

const MobileTechnologies = styled.ul`
display:none;

@media only screen and (max-width: 768px) {
  
  height: 80%;
  display: block;
  margin-top: 

  
}
`;

const projectData = [
  {
    id: "ds-visualizer",
    src: "./img/dsv_ss.PNG",
    projectTitle: "Data Structure Visualizer",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit sapiente placeat illum doloribus ipsam, ratione sed delectus quia autem aliquid facilis eveniet, mollitia, animi consequatur. Ad labore incidunt dolorem.",
    technologies: ["JavaScript", "Three.js", "React", "CSS", "HTML"],
    challenges:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis dolore odit sapiente deleniti natus doloremque error ut architecto suscipit dignissimos voluptatum, quas id at, ratione autem pariatur facere porro.",
    lessons:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam blanditiis qui architecto temporibus dolorem distinctio vero soluta praesentium velit aspernatur ad laboriosam excepturi illum saepe nesciunt, rerum consectetur et odit.",
  },
  {
    id: "e-commerce",
    src: "./img/dsv_ss.PNG",
    projectTitle: "E-commerce Website",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit sapiente placeat illum doloribus ipsam, ratione sed delectus quia autem aliquid facilis eveniet, mollitia, animi consequatur. Ad labore incidunt dolorem.",
    technologies: ["React", "Redux", "Node.js", "Express.js"],
    challenges:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis dolore odit sapiente deleniti natus doloremque error ut architecto suscipit dignissimos voluptatum, quas id at, ratione autem pariatur facere porro.",
    lessons:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam blanditiis qui architecto temporibus dolorem distinctio vero soluta praesentium velit aspernatur ad laboriosam excepturi illum saepe nesciunt, rerum consectetur et odit.",
  },
  {
    id: "social-media",
    src: "./img/dsv_ss.PNG",
    projectTitle: "Social Media App",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit sapiente placeat illum doloribus ipsam, ratione sed delectus quia autem aliquid facilis eveniet, mollitia, animi consequatur. Ad labore incidunt dolorem.",
    technologies: ["React", "Redux", "Node.js", "Express.js"],
    challenges:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis dolore odit sapiente deleniti natus doloremque error ut architecto suscipit dignissimos voluptatum, quas id at, ratione autem pariatur facere porro.",
    lessons:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam blanditiis qui architecto temporibus dolorem distinctio vero soluta praesentium velit aspernatur ad laboriosam excepturi illum saepe nesciunt, rerum consectetur et odit.",
  },
  {
    id: "arcade",
    src: "./img/dsv_ss.PNG",
    projectTitle: "Arcade App",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit sapiente placeat illum doloribus ipsam, ratione sed delectus quia autem aliquid facilis eveniet, mollitia, animi consequatur. Ad labore incidunt dolorem.",
    technologies: ["React", "Redux", "Node.js", "Express.js"],
    challenges:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis dolore odit sapiente deleniti natus doloremque error ut architecto suscipit dignissimos voluptatum, quas id at, ratione autem pariatur facere porro.",
    lessons:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam blanditiis qui architecto temporibus dolorem distinctio vero soluta praesentium velit aspernatur ad laboriosam excepturi illum saepe nesciunt, rerum consectetur et odit.",
  },
  {
    id: "flight",
    src: "./img/dsv_ss.PNG",
    projectTitle: "Flight Tracker App",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit sapiente placeat illum doloribus ipsam, ratione sed delectus quia autem aliquid facilis eveniet, mollitia, animi consequatur. Ad labore incidunt dolorem.",
    technologies: ["React", "Redux", "Node.js", "Express.js"],
    challenges:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis dolore odit sapiente deleniti natus doloremque error ut architecto suscipit dignissimos voluptatum, quas id at, ratione autem pariatur facere porro.",
    lessons:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam blanditiis qui architecto temporibus dolorem distinctio vero soluta praesentium velit aspernatur ad laboriosam excepturi illum saepe nesciunt, rerum consectetur et odit.",
  },
];

const ProjectCard = ({ projectId }) => {
  const project = projectData.find((p) => p.id === projectId);
  const {
    projectTitle,
    projectDescription,
    technologies,
    challenges,
    lessons,
    src,
  } = project;

  return (
    <Card>
      <img src={src} alt={name} />
      <Container>
        <Left>
          <ProjectTitle >{projectTitle}</ProjectTitle>
          <ProjectDescription className="projectDesc">
            <Description> Description:</Description>
            <ProjectDescriptionText>
              {projectDescription}
            </ProjectDescriptionText>
          </ProjectDescription>
          <Technologies>
            <Description> Technolgies Used:</Description>
            <TechnoList>
              {technologies.map((tech, index) => (
                <Techs key={index}>{tech}</Techs>
              ))}
            </TechnoList>
          </Technologies>
        </Left>
        <Right>
          <Buttons>
            <Button href="https://ds-visual.netlify.app/" target="_blank">
              Deployed
            </Button>
            <Button
              href="https://github.com/jwwalls/DS_Visualizer"
              target="_blank"
            >
              Code
            </Button>
          </Buttons>
          <Challenges>
            <Description>Challenges:</Description>
            <ChallengesText>{challenges}</ChallengesText>
          </Challenges>
          <Lessons>
            <Description>Lessons Learned:</Description>
            <LessonsText>{lessons}</LessonsText>
          </Lessons>
          <MobileTechnologies>
            <Description> Technolgies Used:</Description>
            <TechnoList>
              {technologies.map((tech, index) => (
                <Techs key={index}>{tech}</Techs>
              ))}
            </TechnoList>
          </MobileTechnologies>
        </Right>
      </Container>
    </Card>
  );
};

export default ProjectCard;
