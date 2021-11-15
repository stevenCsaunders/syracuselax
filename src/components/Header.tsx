import React from "react";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <header className="text-white text-center bg-intro bg-cover px-5 pt-10 rounded-bl-xxl">
      <NavBar />
      <h1 className="text-4xl text-white pb-4">Syracuse Youth Lacrosse</h1>
      <h2 className="text-lg font-light pb-12 text-white">
        The Syracuse Youth LAX Program is for boys and gilrs grades K-8
      </h2>
      <div className="flex gap-4 justify-center pb-10">
        <button className="px-6 py-3 bg-white text-blue rounded-full">
          Register
        </button>
        <button className="border border-solid border-white px-6 py-3 rounded-full">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
