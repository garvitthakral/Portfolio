import React from "react";
import Hero from "./Hero";
import WhyChose from "./WhyChose";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import Intrested from "./Intrested";
import GlowingBall from "../Components/GlowingBall";

const Skills = () => {
  return (
    <div>
      <Hero />
      <WhyChose />
      <Frontend />
      <Backend />
      <Tools />
      <Intrested />
      <div className="absolute left-[-100px] top-100 z-[-1]">
        <GlowingBall color="#d022d0" />
      </div>
      <div className="absolute top-[1300px] right-[-100px] z-[-1]">
        <GlowingBall color="#d022d0" />
      </div>
      <div className="absolute left-[-100px] top-[2200px] z-[-1]">
        <GlowingBall color="#d022d0" />
      </div>
    </div>
  );
};

export default Skills;
