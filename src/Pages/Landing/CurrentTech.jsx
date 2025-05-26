import React from "react";

const CurrentTech = () => {
  const Techs = [
    {
      src: "/SVG's/js-official-svgrepo-com.svg",
      title: "Java Script",
      discription: "Logical Language",
    },
    {
      src: "/SVG's/tailwind-svgrepo-com.svg",
      title: "Tailwind",
      discription: "CSS Framework",
    },
    {
      src: "/SVG's/react-javascript-js-framework-facebook-svgrepo-com.svg",
      title: "Rect",
      discription: "UI Based Js Framework",
    },
    {
      src: "/SVG's/mongo-svgrepo-com.svg",
      title: "No SQL",
      discription: "Flexible Database",
    },
    {
      src: "/SVG's/node-js-svgrepo-com.svg",
      title: "Node.js",
      discription: "Backend Js Library",
    },
    {
      src: "/SVG's/java-svgrepo-com.svg",
      title: "Java",
      discription: "Powerful Logical Language",
    },
    {
      src: "/SVG's/git-svgrepo-com.svg",
      title: "Git",
      discription: "version Control",
    },
    {
      src: "/SVG's/sql-database-sql-azure-svgrepo-com.svg",
      title: "SQL",
      discription: "Structured Database",
    },
  ];
  return (
    <div>
      <h1 className="text-7xl pb-5">Current technologies:</h1>
      <h3 className="font-light text-lg text-white/40">
        I am proficient in a range of modern technologies that empower me to
        build highly functional solutions.
      </h3>
      <h5 className="font-light text-lg text-white/40">These are some of my main technologies...</h5>

      <div className="flex flex-wrap gap-4 py-10">
        {Techs.map((tech, idx) => (
          <div className="flex bg-bgS rounded-2xl px-4 py-3 gap-5 w-[340px] hover:scale-103 duration-300 ease-in-out hover:bg-white/30">
            <img src={tech.src} alt={tech.title}  className="h-20"/>
            <div className="flex flex-col items-start justify-center">
              <h1>{tech.title}</h1>
              <h2 className="font-light text-white/40">{tech.discription}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentTech;
