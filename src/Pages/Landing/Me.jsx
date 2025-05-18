import React from "react";
import GlowingBall from "../Components/GlowingBall";

const Me = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dtntjxdio/image/upload/v1747355025/seating_mthyrf.png"
        alt="bg"
        className="sm:-translate-x-85 lg:-translate-x-0 lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-screen object-cover z-[-1]"
      />
      <div className="absolute z-[-2] top-170 left-110 lg:top-70 lg:left-260 xl:left-335">
      <GlowingBall color="#d022d0" size={100}/>
      </div>
    </div>
  );
};

export default Me;
