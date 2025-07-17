import React from "react";

const SkillsItem = ({ logo, name, glow }) => {
  return (
    <div
      className={`px-3 py-2 rounded-lg bg-surface-200 shadow-sm transition-transform duration-300 hover:scale-105 ${glow} flex items-center gap-2`}
      style={{
        willChange: "transform",
        transformOrigin: "center",
        backfaceVisibility: "hidden",
        minWidth: "120px",
        maxWidth: "160px",
      }}
    >
      <img
        src={logo}
        alt={`${name} Logo`}
        className="object-contain block"
        width={24}
        height={24}
        style={{ pointerEvents: "none" }}
      />
      <span className="text-sm font-medium text-surface-800">{name}</span>
    </div>
  );
};

export default SkillsItem;

/* <div
      className={`p-3 rounded-lg bg-surface-200 shadow-md transition-transform duration-300 hover:scale-105 ${glow} flex items-center justify-center`}
      style={{
        width: "72px",
        height: "72px",
        willChange: "transform",
        transformOrigin: "center",
        backfaceVisibility: "hidden",
      }}
    >
      <img
        src={logo}
        alt="Skill Logo"
        className="w-10 h-10 object-contain block"
        width={40}
        height={40}
        style={{
          willChange: "transform",
          transformOrigin: "center",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />
    </div> */
