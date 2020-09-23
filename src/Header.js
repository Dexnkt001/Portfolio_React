import React from "react";
import Navigation from "./heder/Navigation";
import Language from "./heder/Language";
import photo from "./photo/DN.jpg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header_content">
          <img className="logo" src={photo} alt="lol"></img>
          <Navigation />
          <Language />
        </div>
      </div>
    </header>
  );
}

export default Header;
