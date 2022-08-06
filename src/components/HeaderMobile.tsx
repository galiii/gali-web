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

function HeaderMobile({ isMenuOpen = false}) {
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
        <img src={isMenuOpen ? close : open} className="header-mobile__icon" />
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
/*
import "./NavMobile.css";
import menuWhite from "../../images/nav/menu_mobile_white.svg";
import menuBlack from "../../images/nav/menu_mobile.svg";
import closeMenuWhite from "../../images/nav/close.svg";
import closeMenuBlack from "../..//images/nav/close_black.svg";
import logoutWhite from "../../images/nav/logout_white.svg";
import logoutBlack from "../../images/nav/logout.svg";
import Icon from "../Icon/Icon";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const NavMobile = ({
  isLoggedIn,
  onLoginClick,
  toggleOpenMenu,
  isMenuOpen,
  onLogoutClick,
}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const location = useLocation().pathname;
  const navBlack = location === "/saved-news" ? "nav-mobile__light" : "";
  const itemLight = location === "/saved-news" ? "nav-mobile__light_open " : "";
  const menuIcon = location === "/" ? menuWhite : menuBlack;
  const closeMenu = location === "/" ? closeMenuWhite : closeMenuBlack;
  const btnColor = location === "/saved-news" ? "nav-mobile__button_light" : "";

  return (
    <div className={`nav-mobile  ${isMenuOpen ? "nav-mobile_open" : ""}`}>
      <nav
        className={`nav-mobile__navigation ${navBlack} ${
          isMenuOpen ? "nav-mobile__navigation_open" : ""
        }`}
      >
        <div className={`nav-mobile__news-explorer`}>{"NewsExplorer"}</div>

        <button className="nav-mobile__button-icon" onClick={toggleOpenMenu}>
          <Icon url={isMenuOpen ? closeMenu : menuIcon} alt={"menu"} />
        </button>

        <ul
          className={`nav-mobile__list  ${navBlack} ${
            isMenuOpen ? "nav-mobile__list_open" : ""
          } ${itemLight}`}
        >
          <li className="nav-mobile__item-list ">
            <Link to="/" className={`nav-mobile__link ${itemLight}`}>
              {"Home"}
            </Link>
          </li>

          {isLoggedIn && (
            <li className="nav-mobile__item-list">
              <Link
                to="/saved-news"
                className={`nav-mobile__link ${itemLight}`}
              >
                {"Saved articles"}
              </Link>
            </li>
          )}

          {isLoggedIn ? (
            <li className={`nav-mobile__item-list `}>
              <button
                onClick={onLogoutClick}
                className={`nav-mobile__button nav-mobile__button_logout ${itemLight} ${btnColor}`}
              >
                {currentUser.username}
                <Icon
                  url={location === "/" ? logoutWhite : logoutBlack}
                  src={"logout"}
                />
              </button>
            </li>
          ) : (
            <li className="nav-mobile__item-list">
              <button
                onClick={onLoginClick}
                className={`nav-mobile__button ${navBlack} ${btnColor}`}
              >
                {"Sign in"}
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavMobile;
*/
