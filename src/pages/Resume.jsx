// import { Link } from "react-router-dom";

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
            align-items: top;
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
            text-align: center;
            margin-bottom: 0.3in;
            display: flex;
            flex-direction: row;
            border: 1px solid #000000;
          }
          .resume-header-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
            width: 65%;
          }
          .resume-header-right {
          text-align: left;
            
          }
          .resume-body {
            display: flex;
            flex-direction: column;
            gap: 0.2in;
          }
        `}
      </style>
      <div className="resume-container">
        <div className="resume-header">
          <div className="resume-header-left">
            {" "}
            <h1 style={{ margin: 0 }}>Will Rosenberg</h1>
            Full-Stack Engineer - Chicago, IL
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
          <div className="resume-section">
            <h2>Experience</h2>
            <div className="resume-item">
              <p>
                Founder & Full-Stack Engineer - Simple American Accent -
                Chicago, IL - 2018-Present
              </p>
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
            </div>
            <div className="resume-item">
              <p>
                Systems Engineer - Boeing Commercial Airplanes - Everett, WA -
                2015-2018
              </p>
              <ul>
                <li>
                  Led design & testing of automated control system for 777X
                  airplane air conditioning system
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <p>
                Engineering Internships - Ethicon Endo-Surgery, Case New
                Holland, GE Aviation - 2012-2013
              </p>
            </div>
          </div>
          <div className="resume-section">
            <h2>Skills</h2>
            <div className="resume-item">
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
            </div>
          </div>
          <div className="resume-section">
            <h2>Education</h2>
            <div className="resume-item">
              <p>
                BS in Mechanical Engineering - Iowa State University - Ames, IA
                - 2010-2015
              </p>
            </div>
          </div>
          <div className="resume-section">
            <h2>Certifications</h2>
            <div className="resume-item">
              <p>
                Architecture and Systems Engineering: Models and Methods to
                Manage Complex Systems - MIT Professional Education - 2017
              </p>
              <p>Spanish Level C2 - Instituto Cervantes - 2014</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
