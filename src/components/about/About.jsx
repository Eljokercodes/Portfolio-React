import ImageMe from '../../assets/me-about.jpg'
import './about.css'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about-container">

        <div className="about-me">
          <div className="about-me-image">
            <img src={ImageMe} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </div>
            <div className="about-card">
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>200+ worldwides</small>
            </div>
            <div className="about-card">
              <VscFolderLibrary className='about-icon'/> 
              <h5>Projects</h5>
              <small>80+ completed</small>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nulla neque error corporis, placeat pariatur odit!</p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About