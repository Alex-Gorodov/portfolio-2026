import Image from "../../Assets/Images/main-pic.webp";
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import ThreeDCard from "../../Components/ThreeDCard/ThreeDCard";

export default function Main() {

  const cardsData = [
    {

    }
  ]

  return (
    <div className="main section" id="about">
      <div className="section_header">
        <p className="section_intro-text">Get to know more</p>
        <h2 className="section_intro-title">About me</h2>
      </div>

      <div className="main_content-wrapper">

          <div className="main_cards-wrapper">

            <ThreeDCard
              children={
                <div className="main_card">
                  <AiOutlineLineChart size={48}/>
                  <p className="main_card-title">Experience</p>
                  <p className="main_card-text">Frontend developer</p>
                  <p className="main_card-text">3+ years</p>
                  <br/>
                  <p className="main_card-text">Mobile developer</p>
                  <p className="main_card-text">1 year</p>
                </div>
              }
            />

            <ThreeDCard
              children={
                <img
                  src={Image}
                  alt="Alex and Agatha anime style AI generated"
                  width={320}
                  height={320}
                  className="main_image"
                />
              }
            />

            <ThreeDCard
              children={
                <div className="main_card">
                  <AiOutlineDatabase size={48}/>
                  <p className="main_card-title">Tech Stack</p>

                  <p className="main_card-text">
                    React, Redux, TypeScript, JavaScript (ES6+)
                  </p>

                  <p className="main_card-text">
                    HTML5, CSS3, SASS / SCSS, responsive design
                  </p>

                  <p className="main_card-text">
                    React Native, Expo, Firebase, REST APIs
                  </p>

                  <p className="main_card-text">
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
