import React from "react";
import Title from "./Title";
import Me from "./Me";
import Technologia from "./Technologia";
import About from "../About/About";
import projectsData from "../../Assets/Data";
import Card from "../Projects/Card";
import Tittle from "../Projects/Tittle";
import GlowingBall from "../Components/GlowingBall";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="relative">
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black pointer-events-none z-30"
          style={{ opacity: 0, transition: "opacity 0.3s ease-out" }}
        />
        <div className="grid lg:flex h-[850px]">
          <div className=" w-full lg:w-8/12 ">
            <Title />
            <Technologia />
            <Social />
          </div>
          <div className="lg:w-4/12">
            <Me />
          </div>
        </div>
        <div>
          <About isStandalone={false} />
        </div>
        <div className="hidden lg:block absolute left-[300px] top-[2600px] z-[-1]">
          <GlowingBall color="#d022d0" />
        </div>
        <div className="absolute right-[-100px] top-[2600px] z-[-1]">
          <GlowingBall color="#8425dc" />
        </div> 
        <div className="pt-30">
          <Tittle />
          <div className="flex flex-wrap justify-center gap-6 lg:gap-16 w-full">
            {projectsData.slice(0, 2).map((project, idx) => (
              <Card key={idx} project={project} />
            ))}
          </div>
          <div className="py-10 flex justify-center">
          <NavLink to={"/projects"} className={"px-4 py-3 bg-EPin rounded-2xl"}>View all<ArrowForwardIosIcon fontSize="small" className="pl-2"/></NavLink></div>
        </div>
      </div>
    </>
  );
};

export default Home;
