import React from "react";
import Typewriter from "typewriter-effect";

const Tittle = () => {
  return (
    <div>
      <div className="text-7xl px-40 pt-40 pb-30">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Projects...").pauseFor(2000).start();
          }}
          options={{
            autoStart: true,
            loop: true,
            delay: 400, // typing speed in ms per character
            cursor: "|",
          }}
        />
      </div>
    </div>
  );
};

export default Tittle;
