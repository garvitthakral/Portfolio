import React from "react";
import Title from "./Title";
import Me from "./Me";
import Logos from "./Logos";
import Technologia from "./Technologia";
import About from "../About/About";

const Home = () => {

  return (
    <>
      <div className="relative">
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black pointer-events-none z-30"
          style={{ opacity: 0, transition: "opacity 0.3s ease-out"  }}
        />
        <Logos />
        <div className="grid lg:flex h-[850px]">
          <div className=" md:w-full lg:w-8/12 ">
            <Title />
            <Technologia />
          </div>
          <div className="lg:w-4/12">
            <Me />
          </div>
        </div >
        <div>
        <About isStandalone={false} />
        </div>
      </div>
    </>
  );
};

export default Home;
