import React from "react";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <header className="text-white text-center bg-intro bg-cover px-5 pt-10 mb-16 rounded-bl-xxl">
      <NavBar />
      <h1 className="text-4xl text-white pb-4">Syracuse Youth Lacrosse</h1>
      <h2 className="text-lg font-light pb-12 text-white">
        The Syracuse Youth LAX Program is for boys and gilrs grades K-8
      </h2>
      <div className="flex gap-4 justify-center pb-32">
        <button className="px-6 py-2 bg-white text-blue rounded-full">
          Register
        </button>
        <button className="border border-solid border-white px-6 py-2 rounded-full">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
