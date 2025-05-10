import React from "react";
import Title from "./Title";
import Me from "./Me";
import Logos from "./Logos";
import Technologia from "./Technologia";

const Home = () => {
  return (
    <>
    <Logos />
    <div className="grid md:flex">
      <div className="w-8/12">
        <Title />
        <Technologia />
      </div>
      <div className="w-4/12">
        <Me />
      </div>
    </div>
    </>
  );
};

export default Home;
