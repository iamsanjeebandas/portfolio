import React from "react";
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Skills from "@/components/skills/skills";
import Header from "@/components/header";
import Projects from "@/components/projects/projects";
import Credits from "@/components/credits";
import DarkVeil from "@/components/DarkVeil";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/public/translations/en.json",
    "utf-8"
  );
  const data = JSON.parse(file);

  return (
    <div className="relative min-h-screen">
      {/* 🔮 Animated Background Layer */}
      <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden sm:scale-100 xs:scale-[1.3] transform-gpu transition-transform duration-1000 ease-out">
        <DarkVeil
          hueShift={0}
          speed={0.8}
          warpAmount={0.1}
          noiseIntensity={0.02}
          resolutionScale={1.2}
        />
      </div>

      {/* 🌟 Foreground Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center py-12 px-6 lg:px-24">
        <div className="w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
          <Header data={data.general} />
          <div className="lg:pl-[50%]">
            <About data={data.general} />
            <Experiences data={data.experiences} />
            <Skills data={data.general} />
            <Education data={data.education} />
            <Projects data={data.projects} />
            <Credits data={data.general} />
          </div>
        </div>
      </main>
    </div>
  );
}
