import React from "react";

function SocialLinks({ social = "" }) {
  return (
    <a className="link" href="#">
      <img className="link__image" src={`${social}`} />
    </a>
  );
}

export default SocialLinks;
