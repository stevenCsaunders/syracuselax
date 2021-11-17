import React from "react";

const Hamburger: React.FC = () => {
  return (
    <button className="hamburger hamburger--boring" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
