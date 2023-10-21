import "./Contact.scss";
import myPicture from '../../../../assets/images/profile_pic.jpg'
import githubImg from '../../../../assets/images/github.png'
import linkedinImg from '../../../../assets/images/linkedin.png'
import Particles from "../../../../components/Particles/Particles";
export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      <Particles />
      <img className="my-image right-on-scroll" alt='profile' src={myPicture} />
      <h1 className="heading-secondary u-center-text u-margin-bottom-small right-on-scroll">Contact</h1>
      <p className="u-margin-bottom-small left-on-scroll"><b>Best way to Contact: </b>Email or Phone</p>
      <p className="u-margin-bottom-small left-on-scroll"><b>Email: </b>sam404kim@gmail.com</p>
      <p className="u-margin-bottom-small left-on-scroll"><b>Phone number: </b>(510) 589 - 8123</p>
      <p className="u-margin-bottom-small left-on-scroll"><b>Other ways to connect:</b></p>
      <div className="icons left-on-scroll">
        <a href="https://github.com/IllSmithDa" target="_blank" rel="noopener noreferrer">
          <img alt="linkedin_link" src={githubImg} className="image-icon" />
        </a>
        <a href="https://www.linkedin.com/in/samuel-kim-1336ab112/" target="_blank" rel="noopener noreferrer">
          <img alt="linkedin_link" src={linkedinImg} className="image-icon" />
        </a>
      </div>
    </section>
  )
}