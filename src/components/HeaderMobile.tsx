import React from "react";
import Links from "./SocialLinks";
import close from "../images/mobile/close.svg";
import open from "../images/mobile/menu_mobile.svg";

const sectionList = [
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

function HeaderMobile({ isMenuOpen = false , toggleMenu = () => console.log("Default")}) {
  return (
    <header
      className={`header-mobile ${isMenuOpen ? "header-mobile_open" : ""}`}
    >
      <nav
        className={`header-mobile__nav ${
          isMenuOpen ? "header-mobile__nav_open" : ""
        }`}
      >
       
        <div className="header-mobile__image"></div>
        <button className="header-mobile__button" onClick={toggleMenu}>
        <img src={isMenuOpen ? close : open} className="header-mobile__icon" />
        </button>
       
      
       
        <ul
          className={`header-mobile__list ${
            isMenuOpen ? "header-mobile__list_open" : ""
          }`}
        >
          {sectionList.map((section) => (
            <li className="header-mobile__item" key={section.section}>
              <a className="header-mobile__link">{section.section}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMobile;
