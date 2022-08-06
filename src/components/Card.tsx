import React from "react";

function Card({ project = { title: "", text: "", src: "" } }) {
  return (
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
