import { useId } from "react";
import theologianspenImg from '../../../../assets/images/theologianspen.png';
import kloakImg from '../../../../assets/images/gokloak.png';
import ironCodeImg from '../../../../assets/images/ironcodeman.png';
import snowflakeImg from '../../../../assets/images/snowflake.png';
import "./Project.scss";


export default function Project() {

  const projects = [
    {
      projectName: 'Theologian\'s Pen',
      projectDesc:'Enjoy the richest theological writings of church history made easily accessible and readable.',
      projectLink:'https://www.theologianspen.com/test',
      shortLink: theologianspenImg,
      projectTech:'React.js Node.js MongoDB, Express.js, TypeScript, Sass',
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
      projectName:'Ironcodeman',
      projectDesc:`Ironcodeman is a simple to use application which lists commands from various different frameworks including
      Git, Heroku and Django.`,
      projectLink:'https://www.ironcodeman.com/',
      shortLink: 'ironcodeman.com',
      projectTech:'Javascript, Es6, React',
      imageSrc:ironCodeImg,
      id: useId(),
    },
    {
      projectName: 'Snowflake',
      projectDesc: 'A simple mock shopping app that is used to demonstrate front end and UI development skills using React, Sass and TypeScript',
      projectLink:'https://64853dd6ad38cc4cb31d3bce--mellifluous-paprenjak-ad1422.netlify.app/',
      shortLink: '64853dd6ad38cc4cb31d3bce--mellifluous-paprenjak-ad1422.netlify.app/',
      projectTech: 'React.js, TypeScript, Sass, JavaScript, HTML, CSS ', 
      imageSrc: snowflakeImg,
      id: useId(),
    },
  ];

  const listProjects = projects.map((project) => {
    return (
      <div key={project.id} className="project-display-card">
        <h3>{project.projectName}</h3>
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
         <img src={project.imageSrc} alt={`project link ${project.projectName}`} className="image-item"/>
        </a>
        <p className="u-margin-bottom-large">{project.projectDesc}</p>
        <a className="btn-black" href={project.projectLink} target="_blank" rel="noopener noreferrer">
          Link &rarr;
        </a>
      </div>
    );
  })

  return (
    <section className="project" id="projects">
      <h1 className="u-margin-bottom-large right-on-scroll">My Projects and Demos</h1>
      <div className="project-display left-on-scroll">
        {listProjects}
      </div>
    </section>
  );
}

