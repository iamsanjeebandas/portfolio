import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import MobileHeadline from "./MobileHeadline";
import Image from "next/image";
import AnimatedContent from "./AnimatedContent";

const Header = (props) => {
  return (
    <div className="lg:fixed h-screen basis-1.5/4 flex flex-col justify-start pb-48 self-center lg:self-auto">
      <div className="relative flex flex-col items-center lg:items-start">
        {/* Profile Image */}
        <div className="mb-6 flex justify-center lg:justify-start w-full">
          {/* Profile Image with swipe-down effect */}
          <AnimatedContent
            distance={150} // Swipe down by 150px
            direction="vertical" // Vertical animation
            reverse={true} // Normal downward motion
            duration={1.2} // Smooth timing
            ease="power3.out" // Playful easing
            initialOpacity={0.5} // Start slightly faded
            animateOpacity={true} // Fade-in while sliding
            scale={1.0} // Slight zoom-in during entrance
            threshold={0.3} // Triggers when 30% visible
            delay={0.1} // Slight delay to pace the intro
          >
            <Image
              src={props.data.profileImage}
              alt="Sanjeeban's Photo"
              width={160}
              height={160}
              className="rounded-full border-4 border-white shadow-md"
            />
          </AnimatedContent>
        </div>

        {/* Name and Headline */}
        <div className="w-full text-left">
          <h1 className="text-center sm:text-left text-4xl md:text-5xl font-semibold tracking-wide subpixel-antialiased text-white">
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
            href="/SanjeebanDas_Official_Resume.pdf"
            download="SanjeebanDas_Official_Resume.pdf"
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
