// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="maindiv">
      <h1>Will Rosenberg</h1>
      <h2>
        Mechanical Engineer → Full-Stack Developer, Business Owner, Accent Coach
      </h2>
      <p>
        Multilingual mechanical engineer with my own{" "}
        <a href="https://instagram.com/SimpleAmericanAccent" target="_blank">
          accent coaching company{" "}
        </a>
        (200k+ IG followers).
        <br />
        <br />
        Built a{" "}
        <a
          href="https://github.com/SimpleAmericanAccent/saa-app-web"
          target="_blank"
        >
          full-stack web app
        </a>{" "}
        that my accent coaching clients use.
        <div className="app-showcase">
          <div className="app-links">
            <a href="https://youtu.be/1I5FPCRFm7o" target="_blank">
              📹 Watch 5-min demo
            </a>
            <a
              href="https://github.com/SimpleAmericanAccent/saa-app-web"
              target="_blank"
            >
              🔍 Explore the repo
            </a>
          </div>

          <div className="app-demo-container">
            <button
              onClick={() =>
                window.open("https://app.simpleamericanaccent.com", "_blank")
              }
              className="demo-button"
            >
              <strong>Try the app</strong>
            </button>
            <div className="credentials">
              <div className="credential-item">
                <span className="credential-label">Email:</span>
                <code>demo@simpleamericanaccent.com</code>
              </div>
              <div className="credential-item">
                <span className="credential-label">Password:</span>
                <code>Demo123!</code>
              </div>
            </div>
          </div>
        </div>
      </p>

      <footer className="footer">
        <div className="footer-section">
          <h3>Personal</h3>
          <div className="footer-links">
            <a href="https://github.com/will-rosenberg" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/wrosenberg/" target="_blank">
              LinkedIn
            </a>
            {/* <a href="">Resume</a> */}
          </div>
        </div>

        <div className="footer-section">
          <h3>Business</h3>
          <div className="footer-links">
            <a href="https://github.com/SimpleAmericanAccent" target="_blank">
              GitHub
            </a>
            <a
              href="https://instagram.com/SimpleAmericanAccent"
              target="_blank"
            >
              Instagram
            </a>
            {/* <a href="">Accent Mentorship Sales Page</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
