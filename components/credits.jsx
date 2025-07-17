import React from "react";

const Credits = (props) => {
  return (
    <div data-section id="credits" className="group mt-32">
      <div className="text-surface-600">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-row justify-between gap-4">
            <a
              href="/imprint"
              rel="noopener noreferrer"
              className="scroll-auto transition-all hover:text-on-background"
            >
              Imprint
            </a>
            <a
              href="/privacy"
              rel="noopener noreferrer"
              className="scroll-auto transition-all hover:text-on-background"
            >
              Privacy Statement
            </a>
          </div>
          <span className="mt-2 sm:mt-0 sm:text-left text-center w-full sm:w-auto">{props.data.name}⚡| 2025</span>

        </div>
      </div>
    </div>
  );
};

export default Credits;
