import React from "react";
import Tittle from "./Tittle";
import Card from "./Card";
import GlowingBall from "../Components/GlowingBall";

const Projects = () => {
  return (
    <div>
      <div className="absolute left-[-100px] z-[-1]">
      <GlowingBall color="#d022d0"/>
      </div>
      <div className="absolute top-[1300px] right-[-100px] z-[-1]">
      <GlowingBall color="#d022d0"/>
      </div>
      <div className="absolute left-[-100px] top-[2200px] z-[-1]">
      <GlowingBall color="#d022d0"/>
      </div>
      <Tittle />
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Projects;
