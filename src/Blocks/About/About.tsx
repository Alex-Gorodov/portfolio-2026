import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import ThreeDCard from "../../Components/ThreeDCard/ThreeDCard";

export default function About() {

  return (
    <div className="about section" id="about">
      <div className="section__header">
        <p className="section__intro-text">Get to know more</p>
        <h2 className="section__intro-title">About me</h2>
      </div>
      <div className="about__cards-wrapper">

        <ThreeDCard
          active
          children={
            <div className="about__card">
              <AiOutlineLineChart size={48}/>
              <p className="about__card-title">Experience</p>
              <p className="about__card-text">Frontend developer</p>
              <p className="about__card-text">3+ years</p>
              <br/>
              <p className="about__card-text">Mobile developer</p>
              <p className="about__card-text">1 year</p>
            </div>
          }
        />

        <ThreeDCard
          active
          children={
            <div className="about__card about__card--stack">
              <AiOutlineDatabase size={48} />

              <p className="about__card-title">Tech Stack</p>

              {/* Frontend */}
              <div className="about__card-section">
                <p className="about__card-section-title">Frontend</p>
                <p className="about__card-text">
                  React, Redux, TypeScript, JavaScript, ThreeJS
                </p>
                <br/>
                <p className="about__card-text">
                  HTML5, CSS3, SASS / SCSS, responsive design
                </p>
              </div>

              {/* Mobile */}
              <div className="about__card-section">
                <p className="about__card-section-title">Mobile</p>
                <p className="about__card-text">
                  React Native, Expo
                </p>
              </div>

              {/* Backend */}
              <div className="about__card-section">
                <p className="about__card-section-title">Backend</p>
                <p className="about__card-text">
                  Go (Golang), REST APIs, Firebase
                </p>
              </div>

              {/* Dev Tools */}
              <div className="about__card-section">
                <p className="about__card-section-title">Development & Build Tools</p>
                <p className="about__card-text">
                  Git, GitHub, Webpack, Vite, Gulp
                </p>
              </div>

              {/* UI/UX Tools */}
              <div className="about__card-section">
                <p className="about__card-section-title">UI/UX Tools</p>
                <p className="about__card-text">
                  Figma, Photoshop, Gimp, Blender
                </p>
              </div>

              {/* AI Tools */}
              <div className="about__card-section">
                <p className="about__card-section-title">AI Tools</p>
                <p className="about__card-text">
                  ChatGPT, Gemini, Cursor, Copilot, Claude Code
                </p>
              </div>

            </div>
          }
        />
      </div>
    </div>
  );
}
