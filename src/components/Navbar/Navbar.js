import React, { useState } from "react";

import "./Navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Navbar = () => {
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  const handleClick = () => {
    console.log(toggleMenu);

    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  // Scroll

  return (
    <div
      className={`nav ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparant"
      } ${toggleMenu && "show"} `}
    >
      <button onClick={handleClick} className="nav__burger">
        ---
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="logo netflix" />
      <nav className="nav__links">
        <a href="/" className="nav__link">
          Accueil
        </a>
        <a href="/" className="nav__link">
          Séries
        </a>
        <a href="/" className="nav__link">
          Films
        </a>
      </nav>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          DIRECT
        </a>
        <a href="/" className="nav__action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          <NotificationsIcon />
        </a>
        <a href="/" className="nav__action">
          <img
            src="./images/avatar.png"
            className="avatar"
            alt="logo avatar utilisateur"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
