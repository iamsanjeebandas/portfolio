"use client";

import React from "react";
import Image from "next/image";

const Socials = (props) => {
  const email = process.env.NEXT_PUBLIC_EMAIL;
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:flex-nowrap sm:justify-start sm:items-center sm:gap-0">
      {/* Get in Touch Button */}
      <a
        href={`mailto:${email}`}
        className="flex flex-row items-center justify-center px-3 py-1 text-sm font-bold text-surface-100 bg-primary-500 hover:bg-primary-300 rounded transition-all duration-500 transform hover:scale-x-105 sm:px-8 sm:py-2 sm:text-base sm:justify-start mr-0 sm:mr-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <span className="pl-2 leading-none">Get in touch</span>
      </a>

      {/* Social Links */}
      <div className="flex flex-row gap-4 sm:gap-10 items-center sm:items-start">
        <a
          href={props.data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center transform transition-transform duration-500 hover:-translate-y-2"
        >
          <Image
            src="/logos/github-mark-white.png"
            alt="GitHub Logo"
            width={20}
            height={20}
            className="object-contain mr-2"
          />
          <span>GitHub</span>
        </a>
        <a
          href={props.data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center transform transition-transform duration-500 hover:-translate-y-2"
        >
          <Image
            src="/logos/linkedin-mark-white.png"
            alt="LinkedIn Logo"
            width={20}
            height={20}
            className="object-contain mr-2"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
