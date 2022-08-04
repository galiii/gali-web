import React from "react";
import profile from "../images/loui.jpeg";

function About() {
  return (
    <section className="about">
      <h2 className="about__title">About Me</h2>
      <img className="about__image" src={profile} alt="Profile Image"/>
      <div className="about__content">
        <p className="about__text">
          This section is the equivalent of your CV’s opening statement.
        </p>
        <p className="about__text">
          Write a little about yourself as a person, a little about yourself as
          a professional, and a little about yourself as a potential employee.
        </p>
        <p className="about__text">
          This would also be a good place to display a picture of yourself.
        </p>
      </div>
    </section>
  );
}

export default About;
