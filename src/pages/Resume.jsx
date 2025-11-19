export default function Resume() {
  return (
    <>
      <style>
        {`
          @page {
            size: 8.5in 11in;
            margin: 0in;
          }
          body {
            display: flex;
            justify-content: left;
            color: #000000;
            overflow-x: scroll;
            overflow-y: scroll;
          }
          .resume-container {
              width: 8.5in;
              height: 11in;
              padding: 0.5in;
              background-color: #ffffff;
              font-family: Arial, sans-serif;
              box-sizing: border-box;
          }
          .resume-header {
            margin-bottom: 0.3in;
            display: flex;
            flex-direction: row;
          }
          .resume-header-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 65%;
          }
          .resume-header-left > * {
            margin: 0;
          }
          .resume-header-right {
          text-align: left;
          }
          .resume-body {
            display: flex;
            flex-direction: column;
            gap: 0.1in;
          }
          .resume-body h2 {
            margin-bottom: 0.05in;
          }
          .resume-body p {
            margin-top: 0;
            margin-bottom: 0.05in;
          }
          .resume-body ul {
            margin-top: 0;
            margin-bottom: 0;
          }
          .resume-experience-item + .resume-experience-item {
            margin-top: 0.15in;
          }
        `}
      </style>
      <div className="resume-container">
        <div className="resume-header">
          <div className="resume-header-left">
            <h1 style={{ fontSize: "3.5em" }}>Will Rosenberg</h1>
            <p style={{ fontSize: "1.2em" }}>
              Full-Stack Engineer - Chicago, IL
            </p>
          </div>
          <div className="resume-header-right">
            <table>
              <tr>
                <td>Portfolio:</td>
                <td>
                  <a
                    href="https://williamrosenberg.com?utm_source=resume"
                    target="_blank"
                    rel="noopener"
                  >
                    williamrosenberg.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>LinkedIn:</td>
                <td>
                  <a
                    href="https://linkedin.com/in/will-rosenberg/"
                    target="_blank"
                    rel="noopener"
                  >
                    will-rosenberg
                  </a>
                </td>
              </tr>
              <tr>
                <td>GitHub:</td>
                <td>
                  <a
                    href="https://github.com/will-rosenberg/"
                    target="_blank"
                    rel="noopener"
                  >
                    will-rosenberg
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="resume-body">
          <ResumeSection title="Experience">
            <ResumeExperienceorEducationItem
              role="Founder & Full-Stack Engineer"
              company="Simple American Accent"
              location="Chicago, IL"
              dates="2018-Present"
            >
              <ul>
                <li>
                  Built a full-stack web app used in production by my accent
                  coaching clients
                </li>
                <li>200k+ Instagram followers, 400+ clients</li>
                <li>
                  Continuously getting client feedback & improving the app
                </li>
                <li>React, Node, Express, PostgreSQL - deployed on Render</li>
                <li>Starting to test with Jest & Storybook</li>
                <li>
                  <a
                    href="https://williamrosenberg.com?utm_source=resume"
                    target="_blank"
                    rel="noopener"
                  >
                    Click here for demo & repo access
                  </a>
                </li>
              </ul>
            </ResumeExperienceorEducationItem>
            <ResumeExperienceorEducationItem
              role="Systems Engineer"
              company="Boeing Commercial Airplanes"
              location="Everett, WA"
              dates="2015-2018"
            >
              <ul>
                <li>
                  Led design & testing of automated control system for 777X
                  airplane air conditioning system
                </li>
              </ul>
            </ResumeExperienceorEducationItem>
            <ResumeExperienceorEducationItem
              role="Engineering Internships"
              company="Ethicon Endo-Surgery, Case New Holland, GE Aviation"
              dates="2012-2013"
            ></ResumeExperienceorEducationItem>
          </ResumeSection>
          <ResumeSection title="Skills">
            <ul>
              <li>
                Frontend: React, JavaScript, TypeScript, HTML, CSS, Tailwind,
                shadcn, MDX, Vite
              </li>
              <li>Backend: Node.js, Express, PostgreSQL, Prisma</li>
              <li>Cloud & DevOps: AWS S3, Render, Cloudflare, Vercel</li>
              <li>
                Testing & Tooling: Git, GitHub, npm, pnpm, Jest, Storybook,
                Postman, Prettier, ESLint, CI/CD
              </li>
              <li>AI-Assisted Engineering: Cursor, ChatGPT</li>
              <li>Auth & Security: Auth0</li>
              <li>
                Languages: English (native), Portuguese & Spanish (near-native
                in both)
              </li>
            </ul>
          </ResumeSection>
          <ResumeSection title="Education">
            <ResumeExperienceorEducationItem
              role="BS in Mechanical Engineering"
              company="Iowa State University"
              location="Ames, IA"
              dates="2010-2015"
            ></ResumeExperienceorEducationItem>
          </ResumeSection>
          <ResumeSection title="Certifications">
            <ResumeCertificationItem
              certification="Architecture and Systems Engineering: Models and Methods to Manage Complex Systems"
              entity="MIT Professional Education"
              dates="2017"
            />
            <ResumeCertificationItem
              certification="Spanish Level C2"
              entity="Instituto Cervantes"
              dates="2014"
            />
          </ResumeSection>
        </div>
      </div>
    </>
  );
}

function ResumeSection({ title = "Add Title Here", children }) {
  return (
    <div className="resume-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function ResumeExperienceorEducationItem({
  role,
  company,
  location,
  dates,
  children,
}) {
  return (
    <div className="resume-experience-item">
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>
          {role} - {company} {location ? `- ${location}` : ""}
        </span>
        <span>{dates}</span>
      </p>
      {children}
    </div>
  );
}

function ResumeCertificationItem({ certification, entity, dates }) {
  return (
    <div className="resume-certification-item">
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>
          {certification} - {entity}
        </span>
        <span>{dates}</span>
      </p>
    </div>
  );
}
