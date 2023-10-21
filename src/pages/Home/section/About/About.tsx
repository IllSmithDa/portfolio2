import reactImg from "../../../../assets/images/react.png";
import reduxImg from "../../../../assets/images/redux.png"
import nodeImg from "../../../../assets/images/node.png";
import mongoImg from "../../../../assets/images/mongo.png";
import html5Img from "../../../../assets/images/HTML5.png";
import css3Img from '../../../../assets/images/Css3.png';
import cypressImg from '../../../../assets/images/cypress.png';
import sassImg from '../../../../assets/images/sass.png';
import expressImg from '../../../../assets/images/express.png';
import sqlImage from '../../../../assets/images/SQL.png';
import typescriptImg from '../../../../assets/images/typescript.png';
import apolloImg from "../../../../assets/images/apollo.png";
import "./About.scss";
import Particles from "../../../../components/Particles/Particles";

export default function About() {
  return (
    <section className="about-container" id="tech-stack">
      <Particles />
      <h2 className="heading-secondary u-center-text right-on-scroll">
        Tech Stack:
      </h2>
      <div className="row left-on-scroll">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Front End</h3>
          <div className="grid">
              <a className="composition" href="https://react.dev/" target="_blank">
                <img className="composition__photo composition__photo--p1" src={reactImg} alt="react.js link" />
              </a>
              <a className="composition" href="https://redux-toolkit.js.org/" target="_blank">
                <img className="composition__photo composition__photo--p3" src={reduxImg} alt="redux link" />
              </a>
              <a className="composition" href="https://www.cypress.io/" target="_blank">
                <img className="composition__photo composition__photo--p3" src={cypressImg} alt="cypress link" />
              </a>
              <a className="composition" href="https://sass-lang.com/" target="_blank">
                <img className="composition__photo composition__photo--p3" src={sassImg} alt="sass link" />
              </a>
              <a className="composition" href="https://www.typescriptlang.org/" target="_blank">
                <img className="composition__photo composition__photo--p3" src={typescriptImg} alt="typescript link" />
              </a>
              <a className="composition" href="https://html.spec.whatwg.org/multipage/" target="_blank">
                <img className="composition__photo composition__photo--p3" src={html5Img} alt="html link" />
              </a>
              <a className="composition" href="https://www.css3.info/" target="_blank">
                <img className="composition__photo composition__photo--p3" src={css3Img} alt="css3 link" />
              </a>
              <a className="composition" href="https://www.apollographql.com/docs/react/" target="_blank">
                <img className="composition__photo composition__photo--p3" src={apolloImg} alt="apollo link"/>
              </a>
          </div>
          <h3 className="heading-tertiary u-margin-bottom-small u-margin-top-medium">Back End</h3>
          <div className="grid">
              <a className="composition" href="https://nodejs.org/en" target="_bank">
                <img className="composition__photo composition__photo--p2" src={nodeImg} alt="node.js link"/>
              </a>
              <a className="composition" href="https://www.mongodb.com/" target="_blank">
                <img className="composition__photo composition__photo--p2" src={mongoImg} alt="mongodb link"/>
              </a>
              <a className="composition" href="https://expressjs.com/" target="_blank">
                <img className="composition__photo composition__photo--p2" src={expressImg} alt="express.js link"/>
              </a>
              <a className="composition" href="https://www.mysql.com/" target="_blank">
                <img className="composition__photo composition__photo--p2" src={sqlImage} alt="my sql link"/>
              </a>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="paragraph">
            Building a website is not an easy task. This is why I spent years honing my craft 
            to learn the MERN stack as well as testing frameworks like Cypress to 
            build web applications that are responsive and easy to use. See 
            some of my projects and demos below.
          </p>
          <a href="#projects" className="btn-text">My Projects &rarr;</a>
        </div>
      </div>
    </section>
  )
}