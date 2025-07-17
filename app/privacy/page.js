import React from "react";
import { promises as fs } from "fs";

export default async function PrivacyStatement() {
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
        <h2 className="mb-8 text-2xl font-medium tracking-widest">
          Privacy Statement
        </h2>
      </div>
      <div className="text-surface-600 space-y-4 leading-relaxed">
        <p>
          Your privacy is important to me. This website is intended solely to
          showcase my work and professional profile.
        </p>

        <p>
          <strong>1. Data Collection:</strong> I do not collect personal data
          unless you explicitly submit it via a contact form or email.
        </p>

        <p>
          <strong>2. Cookies & Analytics:</strong> Basic analytics (e.g., Vercel
          Insights or Google Analytics) may be used to track anonymous usage
          metrics such as page views and traffic sources. No personally
          identifiable information is collected.
        </p>

        <p>
          <strong>3. Contact Forms:</strong> If you contact me through a form,
          the data you provide (name, email, message) is used solely to respond
          to your message. It is not shared with any third parties.
        </p>

        <p>
          <strong>4. Third-Party Links:</strong> This site may link to external
          sites like GitHub or LinkedIn. I am not responsible for the privacy
          practices of those sites.
        </p>

        <p>
          <strong>5. Data Security:</strong> Any information submitted through
          this website is handled securely and is not stored on the server or
          shared externally.
        </p>

        <p>
          <strong>6. Updates:</strong> This policy may be updated periodically.
          Please check back to stay informed.
        </p>

        <p>
          If you have any questions, feel free to reach out to me at{" "}
          <a
            href="mailto:iamsanjeebandas@gmail.com"
            className="text-primary-500 underline"
          >
            iamsanjeebandas@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
