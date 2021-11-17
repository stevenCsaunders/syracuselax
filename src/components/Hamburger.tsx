import { FC } from "react";

const Hamburger: FC = () => {
  // TODO
  //Make nav slightly smaller
  
  return (
    <button className="hamburger hamburger--boring z-10 relative" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
