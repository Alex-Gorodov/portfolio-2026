import Image from "../../Assets/Images/main-pic.webp";
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
{/*
        <ThreeDCard
          active
          children={
            <img
              src={Image}
              alt="Alex and Agatha anime style AI generated"
              width={320}
              height={320}
              className="about__image"
            />
          }
        /> */}

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
                  React, Redux, TypeScript, JavaScript (ES6+)
                </p>
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

              {/* Tools */}
              <div className="about__card-section">
                <p className="about__card-section-title">Tools</p>
                <p className="about__card-text">
                  Git, GitHub, Webpack, Gulp
                </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
