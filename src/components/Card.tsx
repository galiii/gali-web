import React from 'react';
import profile from "../images/2.jpeg";


function Card() {
    return (
        <ul className="cards list">
    
     
        <li className="card">
        <img className="card__image" src={profile} alt="Profile Image"/>
          <h3 className="card__title">Portfolio / Projects </h3>
          <p className="card__text">
            This section should include any projects you already have worked on,
            with a link to the corresponding GitHub repository, as well as a URL
            to the project itself if it is hosted somewhere.
          
          </p>
        </li>
        <li className="card">
        <img className="card__image" src={profile} alt="Profile Image"/>
        <h3 className="card__title">Portfolio / Projects </h3>
          <p className="card__text">
            If you do not yet have any projects, you can mock these for now with
            made-up descriptions and placeholder images, but make sure you
            remember not to upload the mocked projects when you launch your site
            publicly - this is a bad look for obvious reasons.
          </p>
          
        </li>
        </ul>
    )
}

export default Card
