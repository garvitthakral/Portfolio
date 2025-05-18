import React from "react";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

const Card = ({ project }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 bg-bgS rounded-4xl py-3 px-6">
      <h1 className="text-4xl py-3">{project.title}</h1>
      <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl">
        <ReactPlayer
          url={project.demoLink}
          playing
          loop
          muted
          width="100%"
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="pt-6">
        <h1 className="text-3xl">Discription:</h1>
        <p className="py-2">{project.description}</p>
      </div>
      <h1 className="text-2xl py-3">Tech used:</h1>
      <div className="flex flex-wrap gap-5 py-3 pb-6">
        {project.techUsed.map((tech, idx) => (
          <h1 key={idx} className="bg-EPin rounded-3xl py-2 px-3">
            {tech}
          </h1>
        ))}
      </div>
      <div className="flex gap-5 pb-6">
        {project.links.map((link, idx) => {
          const Icon = link.icon;
          return (
            <NavLink to={link.to} key={idx} className={""}>
              <Icon
                fontSize="large"
                className="hover:scale-120 hover:text-EPin transition-transform duration-200"
              />
            </NavLink>
          );
        })}
      </div>
      <div className="pb-6 pt-3">
        <NavLink
          to={`/projects/${project.id}`}
          className={
            "bg-EPin py-3 px-5 rounded-3xl hover:shadow-2xl hover:shadow-EPin transition-shadow duration-300"
          }
        >
          View details
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
