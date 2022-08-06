import React from "react";
import Card from "./Card";

function Cards() {
  const cards = [
    {
      title: "News Explorer",
      text: "An app that you can register to , then sign in and some basic data about you (avatar, name, profession ) and some images saved by all the users will appear on your page. You can update your data, add images to the database, like/unlike ( once the like button is pressed, the amount of likes will be updated ) and delete your own images. If you don’t sign out, next time you visit the app your page will open without signing in again.",
      src:  "../images/projects/2.jpeg"
    },
    {
      title: "Around the U.S.",
      text: "The API of 'Around the U.S.' with authorization and registration handled by the back-end server.Contains the full API of 'Around the U.S.' project that features user authorization and user registration and handles cards and users.",
      src:  "../images/projects/angrey.jpeg"
    },
    {
      title: "Around the U.S.",
      text: "The API of 'Around the U.S.' with authorization and registration handled by the back-end server.Contains the full API of 'Around the U.S.' project that features user authorization and user registration and handles cards and users.",
      src:  "../images/projects/3.jpeg"
    },
  ];
  return (
    <section className="cards">
      <ul className="cards__list list">
        {cards.map((card, index) => (
          <Card project={card} key={card.title} />
        ))}
      </ul>
      <button className="cards__button">Show more</button>
    </section>
  );
}

export default Cards;
