import React from "react";
import victor from "../images/victor.svg";

const skillsList = [
  { name: "Node" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "Typescript" },
  { name: "Javascript" },
  { name: "SQL" },
  { name: "Google cloud" },
  { name: "React" },
  { name: "css" },
  { name: "html" },
];

function Skills() {
  return (
    <section className="skills">
      <h3 className="skills__title">Skills</h3>
      <p className="skills__text">
        I enjoy turning complex problems into simple and beautiful code .
      </p>
      <ul className="skills__list list">
        {skillsList.map((skill) => (
          <li key={skill.name} className="skills__item">
            <img className="skills__icon" src={victor} />
            <span className="skill__name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
