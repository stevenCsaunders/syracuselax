import React from "react";
import Nav from "./Nav";
import logo from "../images/LogoSm.png";
import Hamburger from "./Hamburger";

const NavBar: React.FC = () => {
  return (
    <div className="flex justify-between pb-16">
      <img
        src={logo}
        alt="Titan sword logo with no text"
        className="w-16 h-16"
      />
      <Nav />
      <Hamburger />
    </div>
  );
};

export default NavBar;
