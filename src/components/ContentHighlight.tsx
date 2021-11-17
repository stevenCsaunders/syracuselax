import React from "react";

const ContentHighlight: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 pb-20 my-20 text-center bg-blue text-white rounded-bl-xxl rounded-tr-xxl">
      <img
        src="https://via.placeholder.com/150"
        alt="Youth Lacrosse Player"
        className="relative -top-10"
      />
      <h3 className="text-3xl pb-4 font-bold">
        Title Here for SYLAX Additional Info
      </h3>
      <p>
        The Syracuse Youth LAX Program has expanded and there is a great need
        for community involvement. Increased youth players and parents are key
        to success.
      </p>
    </div>
  );
};

export default ContentHighlight;
