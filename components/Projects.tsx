import React from "react";
import Link from "node_modules/next/link";
import Image from "node_modules/next/image";
import ProjectCard from "./ProjectCard";
import { type Project } from "contentlayer/generated";

interface Projects {
  projects: Project[]
}

const Projects: React.FC<Projects> = ({ projects }: Projects) => {
  return (
    <div className="border-t py-36 border-stone-700 flex container flex-col mx-auto mt-24 2xl:mt-24 text-center">
      <div className="text-6xl 2xl:text-8xl font-bold">Projects</div>
      <div className="mt-4 text-xl 2xl:text-2xl text-stone-400 font-poppins">
        Here is a selections of my favorite projects
      </div>
      <div className="flex flex-col gap-4 mt-20">
        {projects &&
          projects.map((project) => {
            return (
              <ProjectCard key={project.title} project={project} />
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
