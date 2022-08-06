import React from "react";
import profile from "../images/about/loui.jpeg";

function About() {
  const about = {
    text: "I have a degree in Computer Science and  a strong technical background. I have high motivation to learn and grow as a Web Developer. Recently I strengthened my skills in this field during an exclusive program by Practicum100, and I am currently looking for my next challenge.",
  };
  return (
    <section className="about">
       <h2 className="about__title">About Me</h2>
      <img className="about__image" src={profile} alt="Profile Image" />
      <div className="about__content">
     
        <p className="about__text">
          {
            "I have a degree in Computer Science and  a strong technical background. I have high motivation to learn"
          }
        </p>
        <p className="about__text">
         {"and grow as a Web Developer. Recently I strengthened my skills in this field during an exclusive program "}
        </p>
        <p className="about__text">
          {"by Practicum100, and I am currently looking for my next challenge."}
        </p>
      </div>
    </section>
  );
}

export default About;
