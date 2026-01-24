import Image from "../../Assets/Images/main-pic.webp";
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import ThreeDCard from "../../Components/ThreeDCard/ThreeDCard";

export default function About() {

  return (
    <div className="about section" id="about">
      <div className="section_header">
        <p className="section_intro-text">Get to know more</p>
        <h2 className="section_intro-title">About me</h2>
      </div>
      <div className="about_cards-wrapper">

        <div>

          <ThreeDCard
            active
            children={
              <div className="about_card">
                <AiOutlineLineChart size={48}/>
                <p className="about_card-title">Experience</p>
                <p className="about_card-text">Frontend developer</p>
                <p className="about_card-text">3+ years</p>
                <br/>
                <p className="about_card-text">Mobile developer</p>
                <p className="about_card-text">1 year</p>
              </div>
            }
          />
        </div>
        <div>
        <ThreeDCard
          active
          children={
            <img
              src={Image}
              alt="Alex and Agatha anime style AI generated"
              width={320}
              height={320}
              className="about_image"
            />
          }
        />

        </div>
        <div>

        <ThreeDCard
          active
          children={
            <div className="about_card">
              <AiOutlineDatabase size={48}/>
              <p className="about_card-title">Tech Stack</p>

              <p className="about_card-text">
                React, Redux, TypeScript, JavaScript (ES6+)
              </p>

              <p className="about_card-text">
                HTML5, CSS3, SASS / SCSS, responsive design
              </p>

              <p className="about_card-text">
                React Native, Expo, Firebase, REST APIs
              </p>

              <p className="about_card-text">
                Git, GitHub, Webpack, Gulp
              </p>
            </div>
          }
        />

        </div>

      </div>
    </div>
  );
}
