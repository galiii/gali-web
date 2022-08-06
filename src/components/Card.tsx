import React from "react";
import profile from "../images/2.jpeg";

function Card({ project = { title: "", text: "", src:"" } }) {
  const cards = [
    {
      title: "News Explorer",
      text: "An app that you can register to , then sign in and some basic data about you (avatar, name, profession ) and some images saved by all the users will appear on your page. You can update your data, add images to the database, like/unlike ( once the like button is pressed, the amount of likes will be updated ) and delete your own images. If you don’t sign out, next time you visit the app your page will open without signing in again.",
    },
    {
      title: "Around the U.S.",
      text: "The API of 'Around the U.S.' with authorization and registration handled by the back-end server.Contains the full API of 'Around the U.S.' project that features user authorization and user registration and handles cards and users.",
    },
    {
      title: "Around the U.S.",
      text: "The API of 'Around the U.S.' with authorization and registration handled by the back-end server.Contains the full API of 'Around the U.S.' project that features user authorization and user registration and handles cards and users.",
    },
  ];

  return (
    /*<ul className="cards list">
      {projects.map((project) => (
        <li className="card" key={project.title}>
          <img className="card__image" src={profile} alt="Profile Image" />
          <h3 className="card__title">{project.title}</h3>
          <p className="card__text">
            {project.text}
          </p>
        </li>
      ))}
    </ul>*/
    <li className="card" key={project.title}>
      <img className="card__image" src={project.src} alt="Profile Image" />
      <div className="card__row">
      <h3 className="card__title">{project.title}</h3>
      <button
            type="button"
            aria-label="Like"
            className="card__github"
           
          ></button>
      </div>
      
    </li>
  );
}

export default Card;
