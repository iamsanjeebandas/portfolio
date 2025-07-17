"use client";

import React, { useState, useEffect } from "react";

const roles = ["Full-Stack Developer", "Backend focused", "AI-Integrations"];

const MobileHeadline = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 150);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      key={index}
      className={`text-surface-600 pt-2 text-base font-normal tracking-wider break-words text-center sm:hidden transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {roles[index]}
    </h2>
  );
};

export default MobileHeadline;
