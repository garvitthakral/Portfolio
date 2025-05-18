import React from "react";
import Tittle from "./Tittle";
import Card from "./Card";
import GlowingBall from "../Components/GlowingBall";
import projectsData from "../../Assets/Data";

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
      <div className="flex flex-wrap justify-center gap-6 lg:gap-16 w-full">
        {projectsData.map((project, idx) => (
          <Card key={idx} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
