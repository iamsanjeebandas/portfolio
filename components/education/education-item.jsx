import React from "react";

function EducationItem(props) {
  return (
    <div className="group flex flex-row items-start mb-4 p-5 transition-all bg-background hover:bg-surface-200 hover:rounded-lg">
      <div className="basis-1/4 pr-4 text-surface-600 text-xs leading-relaxed">
        {props.startDate} {checkEndDate(props)}
      </div>
      <div className="basis-3/4">
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-base block mb-1 leading-tight"
        >
          {props.subject}
        </a>
        <div className="text-surface-600 text-sm mb-1 leading-tight italic">
          ({props.degree})
        </div>
        <div className="text-surface-600 text-sm mb-1 leading-tight">
          {props.university}
        </div>
        <div className="text-surface-600 text-sm leading-snug">
          {props.description}
        </div>
      </div>
    </div>
  );
}

function checkEndDate(props) {
  return props.endDate ? `- ${props.endDate}` : "";
}

export default EducationItem;
