import React from "react";
import projectsData from "../../Assets/Data";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

const Card = () => {
  return (
    <div className="py-20 px-40 grid grid-cols-1 xl:grid-cols-2 gap-6 ">
      {projectsData.map((pro, idx) => (
        <NavLink
        to={`/projects/${pro.id}`}
          key={idx}
          className="bg-bgS rounded-4xl py-3 px-8 h-1200px] w-[580px] "
        >
          <h1 className="text-4xl py-3">{pro.title}</h1>
          <div className="py-5 flex justify-center h-[400px]">
            <ReactPlayer
              url={pro.demoLink}
              playing
              loop
              muted
              width="100%"
              height={"90%"}
            />
          </div>
          <div className="">
            <h1 className="text-3xl">Discription:</h1>
            <p className="py-2">{pro.description}</p>
          </div>
            <h1 className="text-2xl py-3">Tech used:</h1>
          <div className="flex flex-wrap gap-5 py-3 pb-6">
            {pro.techUsed.map((tech, idx) => (
              <h1 key={idx} className="bg-EPin rounded-3xl py-2 px-3">{tech}</h1>
            ))}
          </div>
          <div className="flex gap-5 pb-6">
            {pro.links.map((link, idx) => {
              const Icon = link.icon;
              return (
                <NavLink to={link.to} key={idx} className={""}>
                  <Icon fontSize="large" className="hover:scale-120 hover:text-EPin transition-transform duration-200"/>
                </NavLink>
              );
            })}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
