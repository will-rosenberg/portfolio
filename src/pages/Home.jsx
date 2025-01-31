import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Will Rosenberg</h1>
      <h2>
        Mechanical Engineer → Accent Coach, Business Owner, Software Developer
      </h2>
      <p>
        Multilingual mechanical engineer with my own{" "}
        <a href="https://instagram.com/SimpleAmericanAccent" target="_blank">
          accent coaching company
        </a>
        , learning web development. <br />
        <br />
        Already built an <Link to="/accentapp">MVP web app</Link> for my
        business which my clients are using. <br />
        <br />
        Seeking a front-end web development job (10-30 hrs/wk) while continuing
        to run my business, to:
        <ol>
          <li>build my skills further</li>
          <li>stabilize my income.</li>
        </ol>
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
