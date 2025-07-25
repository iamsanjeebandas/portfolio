import React from "react";
import { promises as fs } from "fs";

export default async function Imprint() {
  const file = await fs.readFile(
    process.cwd() + "/public/translations/en.json",
    "utf-8"
  );
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen font-mono text-sm flex-col p-24">
      <div className="flex flex-col">
        <a
          href="/"
          className="mr-4 transition-all flex flex-row mb-6 hover:text-primary-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>{data.general.name} / Home</span>
        </a>
        <h2 className="mb-8 text-2xl font-medium tracking-widest">Imprint</h2>
      </div>
      <div className="text-surface-600 space-y-4 leading-relaxed">
        <p>
          <strong>Imprint (Legal Disclosure)</strong>
        </p>

        <p>
          <strong>Site Owner:</strong>
          <br />
          Sanjeeban Das
        </p>

        <p>
          <strong>Contact Information:</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:iamsanjeebandas@gmail.com"
            className="text-primary-500 underline"
          >
            iamsanjeebandas@gmail.com
          </a>
          <br />
          Phone: +91 9861545192 (India)
        </p>

        <p>
          <strong>Website Purpose:</strong>
          <br />
          This personal website serves as a digital resume and project
          portfolio. It is non-commercial and intended for showcasing software
          engineering experience, personal projects, and relevant professional
          achievements.
        </p>

        <p>
          <strong>Copyright Notice:</strong>
          <br />
          All content and code snippets on this site are © Sanjeeban Das unless
          otherwise stated. Reuse or reproduction is not permitted without prior
          permission.
        </p>

        <p>
          <strong>Liability for Links:</strong>
          <br />
          This website contains links to external websites (such as GitHub,
          LinkedIn). I am not responsible for the content or data practices of
          those sites.
        </p>
      </div>
    </main>
  );
}
