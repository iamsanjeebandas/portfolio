import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
  return (
    <div data-section id="projects" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {props.data.map((object) => (
          <ProjectItem
            key={object.name}
            name={object.name}
            lib={object.framework}
            description={object.description}
            href={object.href}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/sanjeeban-das" // Replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary-dark transition-colors duration-300"
        >
          View More Projects on GitHub →
        </a>
      </div>
    </div>
  );
};

export default Projects;
