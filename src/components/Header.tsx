import React from "react";

const contactList = [
  { section: "about" },
  { section: "skills" },
  { section: "projects" },
  { section: "contact me" },
];

const socialList = [
  { link: "github" },
  { link: "linkedin" },
  { link: "resume" },
  
];

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="list header__social-links">
          {socialList.map((social) => (
            <li key={social.link} className="header__social-link">
              {social.link}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="header__nav">
        <ul className="list header__sections">
          {contactList.map((section) => (
            <li key={section.section} className="header__section">
              {section.section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
