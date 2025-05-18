import React from "react";
import { NavLink, useParams } from "react-router-dom";
import projectsData from "../../Assets/Data";
import PageNotFound from "../Components/PageNotFound";
import ReactPlayer from "react-player";
import GlowingBall from "../Components/GlowingBall";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projectsData.find((p) => p.id === id);

  if (!project) return <PageNotFound />;

  return (
    <>
      <div className="absolute left-[-100px] top-[550px] z-[-1]">
        <GlowingBall color="#8425dc" />
      </div>
      <div className="pt-20 px-35 pb-10">
        <h1 className="text-6xl pb-9">{project.title}</h1>
        <div className="grid grid-cols-1 lg:flex gap-6">
          {/* left side */}
          <div className="px-5 lg:w-8/12">
            <h1 className="text-3xl pb-3">Discription:</h1>
            <p className="font-light text-md pb-6">{project.description}</p>
            <div>
              <h1 className="text-3xl pb-3">Chalanges faced:</h1>
              <ul className="list-disc ml-6 pb-6 font-light text-md ">
                {project.challengesFaced.map((challange, idx) => (
                  <li key={idx}>{challange}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-3xl pb-3">What I have Learned</h1>
              <ul className="list-disc ml-6 pb-6 font-light text-md ">
                {project.whatILearned.map((learn, idx) => (
                  <li key={idx}>{learn}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-3xl pb-3 ">Tech used:</h1>
              <div className="flex flex-wrap gap-6">
                {project.techUsed.map((tech, idx) => (
                  <h1 key={idx} className="bg-EPin rounded-3xl py-2 px-3">
                    {tech}
                  </h1>
                ))}
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="px-5 lg:w-4/12 lg:h-[400px] sm:h-[550px] bg-bgS rounded-4xl hover:shadow-EPin shadow-2xl duration-300">
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
            <h1 className="text-3xl pb-3 px-6 pt-4">Links:</h1>
            <div className="flex gap-6 px-6 pt-3 pb-6 flex-wrap">
              {project.links.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <NavLink to={link.to} key={idx}>
                    <Icon
                      fontSize="large"
                      className="hover:scale-120 hover:text-EPin transition-transform duration-200"
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
