import photo from "../assets/fabian.jpg";

export default function AccentApp() {
  return (
    <div className="maindiv">
      <div className="skinnierdiv">
        <h1>Accent App Demo</h1>
        <p>
          I built an MVP full stack web app for my accent coaching business.
        </p>
        <p>
          It&apos;s a tool for me to give better accent feedback to my clients,
          and to help them practice their accent work in between sessions with
          me.
        </p>
        <p>
          To help protect sensitive client info, I&apos;ve created a demo
          version of the app.
        </p>
        <a href="https://app.williamrosenberg.com" target="_blank">
          <button
            style={{ fontSize: "1.3em", display: "block", margin: "auto" }}
          >
            Click here to log in and try it out.
          </button>
        </a>

        <h2>Business Impact</h2>
        <p>
          I&apos;ve used this app to annotate over 2224 accent issue instances
          <br />
          across 1790 words for 8 different clients (so far).
        </p>
        <p>
          It&apos;s a work in progress, but it&apos;s already being used by at
          least 8 paying clients (most of whom paid in the thousands of
          dollars).
        </p>
        <p>
          There&apos;s initial feedback from clients that this app is already
          helping them.
        </p>
        <p>
          Here&apos;s what Fabian had to say about our first session using this
          app:
        </p>
        <blockquote
          style={{
            backgroundColor: "#444444",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          “That initial feedback... capturing all those metrics, identifying the
          key points where I need to improve, and giving me the mechanism to
          improve on those... man, that was amazing.
          <br />
          <br />
          Just that first session, when I gave you the recording and you gave me
          that table with all those points and the classes for the points that
          you need to exercise...{" "}
          <b>
            That alone was worth the price of the full program{" "}
            <i>($2000 USD)</i>
          </b>
          .
          <br />
          <br />I didn&apos;t have that map. I knew that my English was slipping
          here and there. But a map that is going to give me those targets where
          I should focus on and HOW to focus on them? You are building that map
          for me. That was extremely beneficial for me.”
          <br />
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1a1a1a",
              borderRadius: "10px",
            }}
          >
            <img
              src={photo}
              style={{
                height: "60px",
                borderRadius: "50px",
                border: "1px solid gray",
                margin: "10px 10px 10px 10px",
              }}
            />
            Fabian Martins Da Silva
            <br />
            Principal Solutions Architect
            <br />
            AWS (Amazon)
          </div>
        </blockquote>
        <p>
          According to my time tracking software, I believe I&apos;ve spent 200+
          hours building this app so far, since August 2024. That&apos;s a
          pretty high cost, but:
        </p>
        <ol>
          <li>
            A lot of this has been ignorance debt. Learning. This is my first
            time learning many of the skills I needed to build this app (see
            below). I pay this cost once, and all my future effort will be
            faster, higher quality, and can sometimes directly reuse what
            I&apos;ve already built.
          </li>
          <li>
            I believe this software project will unlock significant long term
            value in my business and is worth a significant upfront investment.
          </li>
          <li>
            Yet, I have continued to prioritize the business (customer
            acquisition and fulfillment, independent of software) over software
            development, to make sure the bills get paid. And I have distributed
            the software development over time, accordingly.
          </li>
          <li>
            Anyone who hires me to develop software for them will benefit from
            me already having paid down significant ignorance debt on my own
            time, and my focus on creating business value above all.
          </li>
        </ol>
      </div>

      <br />

      <div>
        <h2>Tech, Features, Future Features, & Challenges</h2>
        <p>
          Here&apos;s a bit more info about the app and my experience building
          it, so far.
        </p>
        <p>Tech stack:</p>
        <ul>
          <li>
            Frontend:
            <ul>
              <li>Vanilla JavaScript, HTML, and CSS</li>
              <li>Currently updating to React</li>
              <li>Future: native mobile app</li>
            </ul>
          </li>
          <li>
            Backend:
            <ul>
              <li>Express (started in vanilla Node, then updated)</li>
              <li>Deployed from GitHub to Render</li>
              <li>Airtable as a database</li>
              <li>Amazon S3 to store audio & JSON</li>
              <li>Auth0 for authentication</li>
              <li>Soon: Postgres and better testing</li>
            </ul>
          </li>
        </ul>
        <p>Features:</p>
        <ul>
          <li>User login/logout, password set/reset via email</li>
          <li>
            Rough first version of in-app onboarding for how to use the app (the
            default transcript itself is an explanation of the app)
          </li>
          <li>See which transcriptions you have access to</li>
          <li>
            Select & load transcription and associated audio & accent feedback
          </li>
          <li>
            View accent feedback from coach via auto-highlighted words and
            details on mouseover
          </li>
          <li>Listen to audio</li>
          <li>Navigate transcription/audio using mouse and/or keyboard</li>
          <li>Hear & compare/contrast audios of key target vowel sounds</li>
          <li>Synthesize vowel sounds in 2D vowel space</li>
          <li>
            See possible spellings (& examples) for key vowels and consonants
          </li>
          <li>
            Outside of app: view Airtable interface to:
            <ul>
              <li>Discover your most frequent accent issues</li>
              <li>See which exact words these issues occurred in</li>
              <li>
                See videos explaining some of the main issues and how to
                &quot;fix&quot; them
              </li>
            </ul>
          </li>
          <li>Admin user only: Add/edit accent feedback to transcription</li>
        </ul>

        <p>Future features:</p>
        <ul>
          <li>
            Better Data Design
            <ul>
              <li>
                Finer-grained and more flexible data approach, to allow issue
                attribution to arbitrary sequences of letters/symbols (to notate
                which exact part of the word or phrase had the issue)
              </li>
              <li>
                Map multiple layers together: orthographic, phonemic, phonetic,
                etc
              </li>
              <li>Include data about severity of each accent issue instance</li>
            </ul>
          </li>
          <li>
            Better Audio & Transcript Prep
            <ul>
              <li>Record/upload audio in-app</li>
              <li>Automatic in-app transcription</li>
              <li>
                In-app transcription editing (including adjusting segmentation
                and alignment)
              </li>
            </ul>
          </li>
          <li>
            Better Measurement/Annotation
            <ul>
              <li>
                More rigorous measurement of severity of each accent issue
                instance
              </li>
              <li>
                AI/ML assistance when desired (default to human expert feedback
                as more valuable)
              </li>
            </ul>
          </li>
          <li>
            Better Stats/Visualization
            <ul>
              <li>
                Bring accent stats in-app, so Airtable interface not needed
              </li>
              <li>Apply statistics/data science to get better insights</li>
              <li>Create visualizations/dashboard & filtering</li>
              <li>Stoplight system (green, yellow, red)</li>
              <li>Show progress over time</li>
            </ul>
          </li>
          <li>
            Better Testing & Training
            <ul>
              <li>
                Show interactive success path & link to training (in the app and
                outside the app)
              </li>
              <li>Automated testing & training</li>
              <li>More practice tools</li>
            </ul>
          </li>

          <li>Better in-app onboarding for how to use the app</li>
        </ul>

        <p>Challenges:</p>
        <ul>
          <li>
            Learning to build a full stack app
            <ul>
              <li>
                My first time setting up authentication and authorization, Node,
                Express, environment variables, Git/GitHub, deploying to the
                web, my own API, subdomain etc.
              </li>
            </ul>
          </li>
          <li>
            Learning to organize the project and code, & improve DX
            <ul>
              <li>
                DRY: need to continue revising and refactoring... smarter
                functions, modules, etc
              </li>
            </ul>
          </li>
          <li>
            Learning to stay focused on business value & let small fires burn
            <ul>
              <li>
                Client acquisition and fulfillment must always come first,
                independent of the software itself (no matter how much I want to
                obsess over it)
              </li>
            </ul>
          </li>
        </ul>

        {/* <p>Lessons learned:</p>

        <p>Current status:</p>
        <ul>
          <li>Being used by clients</li>
          <li>Continuing to build</li>
          <li>Continuing to learn</li>
        </ul>

        <p>Future goals:</p>
        <ul>
          <li>Improve the app</li>
          <li>Improve my skills</li>
          <li>Improve my business</li>
        </ul> */}
      </div>
    </div>
  );
}
