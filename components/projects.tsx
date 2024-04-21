"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const totalProjects = projectsData.length;

  const showMoreProjects = () => {
    setVisibleProjects(totalProjects);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      {visibleProjects < totalProjects && (
        <div className="flex justify-center">
          <button
            className="mt-3 group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            onClick={showMoreProjects}
          >
            Show more projects
          </button>
        </div>
      )}
    </section>
  );
}
