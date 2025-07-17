import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import MobileHeadline from "./MobileHeadline";
import Image from "next/image";

const Header = (props) => {
  return (
    <div className="lg:fixed h-screen basis-1.5/4 flex flex-col justify-start pb-48 self-center lg:self-auto">
      <div className="relative flex flex-col items-center lg:items-start">
        {/* Profile Image */}
        <div className="mb-6 flex justify-center lg:justify-start w-full">
          <Image
            src={props.data.profileImage}
            alt="Sanjeeban's Photo"
            width={160}
            height={160}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Name and Headline */}
        <div className="w-full text-left sm:text-center">
          <h1 className="text-4xl md:text-5xl sm:text-3xl font-semibold tracking-wide subpixel-antialiased text-white">
            {props.data.name}
          </h1>

          {/* Desktop headline */}
          <h2 className="text-surface-600 pt-2 text-base font-normal tracking-wider break-words max-w-sm w-full hidden sm:block">
            {props.data.headline}
          </h2>

          {/* Mobile headline */}
          <div className="sm:hidden flex justify-center w-full">
            <MobileHeadline />
          </div>

          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-block px-2 py-1 text-xs font-medium text-white bg-primary-300 hover:bg-primary-400 rounded transition-colors duration-200"
          >
            📄 Download Resume
          </a>
        </div>
      </div>

      <Navigation />
      <Socials data={props.data.socials} />
    </div>
  );
};

export default Header;
