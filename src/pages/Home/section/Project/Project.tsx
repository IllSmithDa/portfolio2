import { useId } from "react";
import theologianspenImg from '../../../../assets/images/theologianspen.png';
import kloakImg from '../../../../assets/images/gokloak.png';
import fireStormImg from '../../../../assets/images/firestorm.png';
import ironCodeImg from '../../../../assets/images/ironcodeman.png';
import "./Project.scss";


export default function Project() {

  const projects = [
    {
      projectName: 'Theologian\'s Pen',
      projectDesc:'Enjoy the richest theological writings of church history made easily accessible and readable.',
      projectLink:'https://www.theologianspen.com',
      shortLink: theologianspenImg,
      projectTech:'React.js Node.js MongoDB, Express.js',
      imageSrc: theologianspenImg,
      id: useId(),
    },
    {
      projectName: 'Kloak',
      projectDesc: `Cloud storage vault service where your memories are stored on an encrypted server. 
      Your photos and videos are only for your love ones and for your eyes only.`,
      projectLink: 'https://www.gokloak.com',
      shortLink: 'gokloak.com',
      projectTech:'React.js Node.js MongoDB, Express.js',
      imageSrc: kloakImg,
      id: useId(),
    },
    {
      projectName: 'Infinite Firestorm',
      projectDesc: 'Firestorm is a database for video games and includes many generations of both consoles and pc titles.',
      projectLink:'https://firestorm.surge.sh',
      shortLink: 'Firestorm.com',
      projectTech: 'React.js, TypeScript, Styled-Components, JavaScript, HTML, CSS, Node.js, MongoDB', 
      imageSrc: fireStormImg,
      id: useId(),
    },
    {
      projectName:'Ironcodeman',
      projectDesc:`Ironcodeman is a simple to use application which lists commands from various different frameworks including
      Git, Heroku and Django.`,
      projectLink:'https://www.ironcodeman.com/',
      shortLink: 'ironcodeman.com',
      projectTech:'Javascript, Es6, React',
      imageSrc:ironCodeImg,
      id: useId(),
    },
  ];

  const listProjects = projects.map((project) => {
    return (
      <div key={project.id} className="projects--card">
        <h3 className="set-font set-margin">{project.projectName}</h3>
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
         <img src={project.imageSrc} alt="project-src" className="image-item"/>
        </a>
        <p className="u-margin-bottom-medium">{project.projectDesc}</p>
        <a className="btn-black" href={project.projectLink} target="_blank" rel="noopener noreferrer">
          Link &rarr;
        </a>
      </div>
    );
  })

  return (
    <section className="project" id="projects">
      <div className="main-content">
        <h1 className="u-margin-bottom-medium right-on-scroll">My Projects and Demos</h1>
        <div className="projects left-on-scroll">
          {listProjects}
        </div>
      </div>
    </section>
  );
}

