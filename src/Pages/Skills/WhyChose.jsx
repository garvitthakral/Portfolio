import React from "react";
import Typewriter from "typewriter-effect";

const WhyChose = () => {
  const reasons = ["", "", "", "", ""];

  return (
    <div className="px-50 pt-10 pb-12">
      <div className="text-6xl pb-8">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Why Chose Me...").pauseFor(5000).start();
          }}
          options={{
            autoStart: true,
            loop: true,
            delay: 200,
            cursor: "|",
          }}
        />
      </div>
      <ul className="list-disc ml-12 pb-6 font-light text-3xl">
        <li>
          You’ll get someone who’s actually hands-on —{" "}
          <span className="text-EPin font-semibold">
            not just tutorial-trained.{" "}
          </span>
        </li>
        <li>
          I won’t ghost or drop out midway —{" "}
          <span className="text-EPin font-semibold">
            I finish what I start{" "}
          </span>
        </li>
        <li>
          I keep communication{" "}
          <span className="text-EPin font-semibold">simple and straight </span>
        </li>
        <li>
          If I don’t know something,{" "}
          <span className="text-EPin font-semibold">
            I’ll learn it fast without drama.{" "}
          </span>
        </li>
        <li>
          I’m not just looking to 'get hired' —{" "}
          <span className="text-EPin font-semibold">
            I want to build things that matter.{" "}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WhyChose;
