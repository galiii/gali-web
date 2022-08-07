import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__menu">
        <ul className="footer__list list">
          <li className="footer__item">
            <a
              href="https://github.com/galiii/"
              target="_blank"
              className="link footer__link"
            >
              <img
                className="footer__image"
                src={"../images/social/github.svg"}
              />
            </a>
            <span className="footer__social-name">GitHub</span>
          </li>
          <li className="footer__item">
            <a
              href="https://yandex.com/maps"
              target="_blank"
              className="link footer__link"
            >
              <img
                className="footer__image"
                src={"../images/social/email-round.svg"}
              />
            </a>
            <span className="footer__social-name">Email</span>
          </li>
          <li className="footer__item">
            <a
              href="https://yandex.com/maps"
              target="_blank"
              className="link footer__link"
            >
              <img
                className="footer__image"
                src={"../images/social/linkedin.svg"}
              />
            </a>
            <span className="footer__social-name">LinkedIn</span>
          </li>
        </ul>
      </nav>
      <p className="footer__copyright"> 2022. Gali</p>
    </footer>
  );
}

export default Footer;
