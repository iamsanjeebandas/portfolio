import React from "react";
import SkillsItem from "./skills-item";

const Skills = ({ data }) => {
  return (
    <section data-section id="skills" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Skills
      </h2>

      <div className="w-full max-w-4xl mx-auto px-5">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
          {data.skillsList?.map((skill, index) => (
            <SkillsItem
              key={`${skill.name}-${index}`}
              logo={skill.logo}
              name={skill.name}
              glow={skill.glow}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
