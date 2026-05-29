import css from "../../assets/css3.svg";
import xpressjs from "../../assets/expressjs.svg";
import figma from "../../assets/figma.svg";
import javaScript from "../../assets/javascript.svg";
import mongodb from "../../assets/mongodb.svg";
import nodeJs from "../../assets/nodejs.svg";
import reactJs from "../../assets/react.svg";
import tailwind from "../../assets/tailwindcss.svg";
import "./the-skills.css";

const SkillData = [
  {
    id: 1,
    image: xpressjs,
    title: "ExpressJs",
    desc: "Node Framework",
  },
  {
    id: 2,
    image: javaScript,
    title: "javascript",
    desc: "Interaction",
  },
  {
    id: 3,
    image: reactJs,
    title: "React",
    desc: "Framework",
  },
  {
    id: 4,
    image: tailwind,
    title: "TailwindCSS",
    desc: "User Interface",
  },
  {
    id: 5,
    image: nodeJs,
    title: "NodeJs",
    desc: "Web Server",
  },
  {
    id: 6,
    image: figma,
    title: "Figma",
    desc: "Design tool",
  },
  {
    id: 7,
    image: mongodb,
    title: "MongoDB",
    desc: "Database",
  },
  {
    id: 8,
    image: css,
    title: "CSS",
    desc: "User Interface",
  },
];
function TheSkills() {
  return (
    <section className="skills" id="skills">
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container-skills">
        {SkillData.map(({ id, image, title, desc }) => {
          return (
            <article key={id} className="card-skill">
              <div className="icon">
                <img src={image} alt="" />
              </div>
              <div className="content">
                <h4>{title}</h4>
                <p className="text-light">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default TheSkills;
