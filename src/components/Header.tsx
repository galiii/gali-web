import React from "react";
import Links from "./SocialLinks";

const contactList = [
  { section: "about" },
  { section: "skills" },
  { section: "projects" },
  { section: "contact me" },
];

const socialList = [
  { name: "github", link: "../images/github.svg" },
  { name: "linkedin", link: "../images/linkedin.svg" },
  { name: "resume", link: "../images/file.svg" },
];

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="list header__social-links">
          {socialList.map((social) => (
            <li key={social.name} className="header__social-link">
              <Links social={social.link} />
            </li>
          ))}
        </ul>
      </nav>
      <nav className="header__nav">
        <ul className="list header__sections">
          {contactList.map((section) => (
            <li key={section.section} className="header__section">
              <a className="header__section-link" href="#">
              {section.section}
              </a>
             
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
