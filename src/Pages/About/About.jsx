import React from "react";
import Typewriter from "typewriter-effect";

const About = ({ isStandalone = false }) => {
  const AboutMePoints = [
    "Born and brought up in Hisar, Haryana.",
    "Always interested in computers and tech — when I tried it, it came naturally to me.",
    "Solved __ LeetCode questions.",
    "Activly particited in weekly, biweekly contests and hackathons.",
    "Contributed to __ open-source projects.",
    "t’s been 1 year since I started learning to code, and I’ve become pretty good at it.",
    "Overall, a hardworking and practical learner.",
  ];
  return (
    <div className="">
      <img
        src="https://res.cloudinary.com/dtntjxdio/image/upload/v1747398882/frame_2.2_h5rqip.png"
        alt="background"
        className={`${
          isStandalone
            ? "absolute top-0 left-0 w-full h-screen object-cover z-[-1]"
            : "absolute sm:top-[1100px] lg:top-[953px] left-0 w-full h-screen object-cover z-[-1]"
        }`}
      />
      <div
        className={`${
          isStandalone
            ? "p-10 lg:p-30 lg:pt-45 w-[500px] lg:w-[900px] xl:w-[1100px]"
            : "p-10 lg:p-30 sm:pt-90 lg:pt-110 w-[500px] lg:w-[900px] xl:w-[1100px]"
        }`}
      >
        <div className="text-7xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("About Me...").pauseFor(2000).start();
            }}
            options={{
              autoStart: true,
              loop: true,
              delay: 400, // typing speed in ms per character
              cursor: "|",
            }}
          />
        </div>
        {isStandalone ? (
          <p className="pt-8 font-extralight text-2xl pb-25">
            I approach coding like solving a puzzle one piece at a time, with
            clarity and logic. I don’t rush to copy solutions; I focus on
            understanding what’s breaking, why it’s breaking, and how to fix it
            in a way that improves the system. Whether it’s secure
            authentication, clean REST APIs, debugging MongoDB issues, or
            optimizing React data flow, I enjoy breaking problems down and
            getting things right. In my solo hackathon project, StyleShare, I
            built the full stack from protected routes to donor dashboards with
            a focus on clean structure and usability. I care about writing code
            that works, is easy to maintain, and scales well. That’s the mindset
            I bring to every project
          </p>
        ) : (
          <ul className="list-disc ml-4 pb-6 mt-8 font-light text-2xl">
            {AboutMePoints.map((points, idx) => (
              <li key={idx} className="mt-7">
                {points}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default About;
