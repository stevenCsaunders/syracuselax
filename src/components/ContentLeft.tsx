import React from "react";
import logo from "../images/logo.svg";

export default function ContentLeft() {
  return (
    <div className="flex flex-col items-center px-4">
      <h3 className="text-2xl text-black pb-4">Title Here for SYLAX Intro</h3>
      <img src={logo} alt="Youth Lacrosse Player" className="" />
      <h3 className="text-2xl text-black pb-4">Title Here for SYLAX Intro</h3>
      <p className="text-center">
        The Syracuse Youth LAX Program has expanded and there is a great need
        for community involvement. Increased youth players and parents are key
        to success.
      </p>
    </div>
  );
}
