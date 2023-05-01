
import React, { Suspense } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
 
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
  flex-direction: column;
`;


const ProjectHeader = styled.section`
  display: flex;
  justify-content: center;
  
  height: 20%;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
  
  @media only screen and (max-width: 768px) {
    gap: 5px;
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
  width: 50%;
 
  @media only screen and (max-width: 768px) {
    margin: 0px;
    font-size: 20px;
    
   
    
  }
`;
const ProjectDescription = styled.label`
  height: 50%;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    margin: 0px;
    height: auto;
    font-size: auto;
    
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
    font-size: 14px;
    
    
  }
`;
const Technologies = styled.div`
  height: 50%;
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
    gap: 5px;
    margin: 0px;
    height: 80%;
    padding: 10px;
    
    display: flex;
    flex-direction: column;
    
      
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10%;
  width: 40%;
  padding-left: 5%;
  padding-right 5%;
 
  align-items: center;
  @media only screen and (max-width: 768px) {
    gap: 10px;
    
    margin-bottom: 0px;
    width: 30%;
   
    
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
    
   
    
  }
`;

const Challenges = styled.div`
  height: 50%;
  @media only screen and (max-width: 768px) {
    margin: 0px;
   display: none;
   
    
  }
  
`;
const ChallengesText = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Lessons = styled.div`
  height: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
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

const DescriptionsSection = styled.section`
display: flex;
height: 100%;
overflow: hidden;


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
    deployed: "https://ds-visual.netlify.app/",
    code: "https://github.com/jwwalls/DS_Visualizer",
    projectTitle: "Data Structure Visualizer",
    projectDescription:
      "A React application that dynamically renders 3-dimensional data structures as the user types in values. This application is a great teaching tool for those new to programming.",
    technologies: ["JavaScript", "Three.js", "React", "Bootstrap", "CSS", "HTML"],
    challenges:
      "Refactoring this code from Python/Js into JSX introduced a whole slew of issues, most notably objects not clearing from the scene or being rendered multipile times upon load.",
    lessons:
      "Improved file structure, more efficient use of existing code, dramatically improved react experience. The reason for programming best practices is becoming glaringly obvious as projects get larger. ",
  },
  {
    id: "e-commerce",
    src: "./img/dsv_ss.PNG",
    deployed: "https://ds-visual.netlify.app/",
    code: "https://github.com/jwwalls/DS_Visualizer",
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
    id: "coffee",
    src: "./img/coffee.PNG",
    deployed: "https://jwwcoffe.netlify.app",
    code: "https://github.com/jwwalls/coffee_clicker",
    projectTitle: "Coffee Clicker",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit sapiente placeat illum doloribus ipsam, ratione sed delectus quia autem aliquid facilis eveniet, mollitia, animi consequatur. Ad labore incidunt dolorem.",
    technologies: ["React", "Javascript", "Node.js", "HTML", "CSS"],
    challenges:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis dolore odit sapiente deleniti natus doloremque error ut architecto suscipit dignissimos voluptatum, quas id at, ratione autem pariatur facere porro.",
    lessons:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam blanditiis qui architecto temporibus dolorem distinctio vero soluta praesentium velit aspernatur ad laboriosam excepturi illum saepe nesciunt, rerum consectetur et odit.",
  },
  {
    id: "things",
    src: "./img/things.PNG",
    deployed: "https://stranger-things-jj.netlify.app",
    code: "https://github.com/jwwalls/Stranger",
    projectTitle: "Strangers Things",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit sapiente placeat illum doloribus ipsam, ratione sed delectus quia autem aliquid facilis eveniet, mollitia, animi consequatur. Ad labore incidunt dolorem.",
    technologies: ["React", "Redux", "Node.js", "Express.js"],
    challenges:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat veritatis dolore odit sapiente deleniti natus doloremque error ut architecto suscipit dignissimos voluptatum, quas id at, ratione autem pariatur facere porro.",
    lessons:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam blanditiis qui architecto temporibus dolorem distinctio vero soluta praesentium velit aspernatur ad laboriosam excepturi illum saepe nesciunt, rerum consectetur et odit.",
  },
  {
    id: "legacy",
    src: "./img/dsv.png",
    deployed: "https://youtu.be/kKr9-E7kS6M",
    code: "https://github.com/jwwalls/final_project",
    projectTitle: "Legacy Visualizer",
    projectDescription:
      "A Web Application that allows users to visualize data structures. Users can select sample datasets, upload csv files, or type in the  values to be displayed. Flask was used for routing and server-side calucaltion of data.",
    technologies: ["Javascript", "Python", "Flask", "Three.js", "Bootstrap", "HTML", "CSS"],
    challenges:
      "Struggled with poor design decisions at the beginning of the project. Started teaching myself Three.js half way through this project because I wasnt satisfied with the visuals. Unable to get site deployed.",
    lessons:
      "Definitely my most enlighting lesson so far, over complicated design, not reusing existing code(css, javascript), not planning enough. I chose to rebuild this App in React.",
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
    deployed,
    code,
  } = project;

  return (
    <Card>
      <img src={src} alt={projectTitle} />
      <Container>
        <ProjectHeader>
      <ProjectTitle >{projectTitle}</ProjectTitle>
      <Buttons>
            <Button href={deployed} target="_blank">
              Deployed
            </Button>
            <Button
              href={code}
              target="_blank"
            >
              Code
            </Button>
          </Buttons>
      </ProjectHeader>
      <DescriptionsSection>
        <Left>
         
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
          
          <Challenges>
            <Description>Challenges:</Description>
            <ChallengesText>{challenges}</ChallengesText>
          </Challenges>
          <Lessons>
            <Description>Lessons Learned:</Description>
            <LessonsText>{lessons}</LessonsText>
          </Lessons>
          <MobileTechnologies>
            <Description> Technolgies:</Description>
            <TechnoList>
              {technologies.map((tech, index) => (
                <Techs key={index}>{tech}</Techs>
              ))}
            </TechnoList>
          </MobileTechnologies>
        </Right>
        </DescriptionsSection>
      </Container>
    </Card>
  );
};

export default ProjectCard;
