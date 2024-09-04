import { useId } from "react";
import theologianspenImg from '../../../../assets/images/theologianspen.webp';
import kloakImg from '../../../../assets/images/gokloak.webp';
import ironCodeImg from '../../../../assets/images/ironcodeman.webp';
// Simport snowflakeImg from '../../../../assets/images/snowflake.webp';
// Simport ghostedOnImg from '../../../../assets/images/ghostedon.webp';
import forestMain from '../../../../assets/images/forest_main_com.webp';
import forestMedium from '../../../../assets/images/forest_main_com_2000.webp';
import forestSmall from '../../../../assets/images/forest_main_com_1000.webp';
import "./Project.scss";
import Particles from "../../../../components/Particles/Particles";


export default function Project() {

  const projects = [
    {
      projectName:'Ironcodeman',
      projectDesc:`Ironcodeman is a reference for programmers for various programming languages using easy to use and user friendly interface. I built this application from the ground up using the PERN stack.`,
      projectLink:'https://www.ironcodeman.com/',
      shortLink: 'ironcodeman.com',
      projectTech:'Javascript, Es6, React',
      imageSrc:ironCodeImg,
      id: useId(),
    },
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
    /*
    { 
      projectName: 'GhostedOn',
      projectDesc:`GhostedOn is a social media application for anyone who wishes to share their work related stories. This web application is built solely by me from the ground up using the PERN stack. `,
      projectLink:'https://www.ghostedon.com/',
      shortLink: 'ghostedon.com',
      projectTech:'Javascript, Es6, React, Next.js, Postgresql, Node.js, Express.js',
      imageSrc:ghostedOnImg,
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
    */
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

  const scrollDiv = (xSpeed: number) => {
    const projectList =  document.getElementById('project-listing');
    if (projectList) {
      projectList.scrollLeft += xSpeed;
    }
  }
  return (
    <section className="project" id="projects">
      <Particles />
      {
      <img
        className='bg-img'
        src={forestMain}
        srcSet={`
          ${forestSmall} 600w,
          ${forestMedium} 1200w,
          ${forestMedium} 2000w`}
        sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
        loading='lazy'
      />

      }
      <h1 className="u-margin-bottom-large right-on-scroll">My Projects and Demos</h1>
      {
      /*
        <div className="project-display left-on-scroll">
          {listProjects}
        </div>
      */}

      <section className='arrow-container'>
        <div className='arrow-btn-cont' onClick={() => scrollDiv(-420) }> 
          <button className="arrow-btn" onClick={() => scrollDiv(-420) }>
            &#11164;  
          </button>
        </div>
        <div
          id='project-listing'
          className="project-display left-on-scroll"
        >
          {listProjects}
        </div>
        <div className='arrow-btn-cont' onClick={() => scrollDiv(420) }>
          <button className="arrow-btn" onClick={() => scrollDiv(420) }>
            &#11166;
          </button>
        </div>
      </section>

      {<div className='bg-gradient'></div>}
    </section>
  );
}

