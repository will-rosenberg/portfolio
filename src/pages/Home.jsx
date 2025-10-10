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
        <ul>
          <li>
            <a href="https://youtu.be/1I5FPCRFm7o" target="_blank">
              Watch the demo
            </a>
          </li>
          <li>
            <a href="https://app.simpleamericanaccent.com" target="_blank">
              Try the app
            </a>{" "}
            (username: demo@simpleamericanaccent.com, password: Demo123!)
          </li>
        </ul>
      </p>
      <h3>Personal Stuff</h3>
      <a href="https://github.com/will-rosenberg" target="_blank">
        GitHub
      </a>
      <br />
      <a href="https://www.linkedin.com/in/wrosenberg/" target="_blank">
        LinkedIn
      </a>
      {/* <br />
      <a href="">Resume</a> */}
      <h3>Business Stuff (Simple American Accent)</h3>
      <a href="https://github.com/SimpleAmericanAccent" target="_blank">
        GitHub
      </a>
      <br />
      <a href="https://instagram.com/SimpleAmericanAccent" target="_blank">
        Instagram
      </a>
      {/* <br />
      <a href="">Accent Mentorship Sales Page</a> */}
    </div>
  );
}
