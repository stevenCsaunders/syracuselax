import React from "react";

const ContentLeft: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 pb-10 text-center">
      <h3 className="text-3xl pb-4 font-bold">
        Title Here for SYLAX Additional Info
      </h3>
      <img
        src="https://via.placeholder.com/150"
        alt="Youth Lacrosse Player"
        className="mb-10"
      />
      <h4 className="text-2xl pb-4 font-bold">
        Title Here for SYLAX Additional Info
      </h4>
      <p>
        The Syracuse Youth LAX Program has expanded and there is a great need
        for community involvement. Increased youth players and parents are key
        to success.
      </p>
    </div>
  );
};

export default ContentLeft;
