import Image from "../../Assets/Images/main-pic.webp";
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { useEffect, useRef } from "react";
import { useResponsive } from "../../Context/responsive.context";

export default function Main() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useResponsive();

  useEffect(() => {
  const card = cardRef.current;
  if (!card) return;

  const maxRotate = 8;

  /* ---------- DESKTOP ---------- */
  const handleMouseMove = (e: MouseEvent) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const rotateY = ((e.clientX - centerX) / centerX) * maxRotate;
    const rotateX = -((e.clientY - centerY) / centerY) * maxRotate;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };



  // Some browsers (notably iOS Safari) require an explicit permission request
  // for DeviceOrientationEvent. Request it on first user gesture and then
  // register the `deviceorientation` listener.
  const D = (DeviceOrientationEvent as unknown) as any;
  let onFirstGesture: ((e?: Event) => Promise<void>) | undefined;

  const addOrientationListener = () => {
    if (typeof D !== "undefined" && typeof D.requestPermission === "function") {

      // listen for the first user gesture (tap/click) to request permission
      window.addEventListener("touchstart", onFirstGesture as EventListener, { once: true });
      window.addEventListener("click", onFirstGesture as EventListener, { once: true });
    }
  };

  if (window.matchMedia("(hover: hover)").matches) {
    window.addEventListener("mousemove", handleMouseMove);
  } else {
    addOrientationListener();
  }

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    if (onFirstGesture) {
      window.removeEventListener("touchstart", onFirstGesture as EventListener);
      window.removeEventListener("click", onFirstGesture as EventListener);
    }
  };
}, []);


  return (
    <div className="main section">
      <div className="section_header">
        <p className="section_intro-text">Get to know more</p>
        <h2 className="section_intro-title">About me</h2>
      </div>

      <div className="main_content-wrapper">
          <div ref={cardRef} className={`main_image-wrapper ${isMobile && 'visually-hidden'}`}>
            <img
              src={Image}
              alt="Alex and Agatha anime style AI generated"
              width={320}
              height={320}
              className="main_image"
            />
          </div>

        <div className="main_content">

          <div className="main_cards-wrapper">
            <div className="main_card">
              <AiOutlineLineChart size={48}/>
              <p className="main_card-title">Experience</p>
              <p className="main_card-text">Frontend developer</p>
              <p className="main_card-text">3+ years</p>
              <br/>
              <p className="main_card-text">Mobile developer</p>
              <p className="main_card-text">1 year</p>
            </div>

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
          </div>
          {/* <div>
            <p className="main_about-text">
              Frontend developer. React, Redux, TypeScript.
              Web & Mobile — React Native, Expo, Firebase, REST APIs.
            </p>

          </div> */}
        </div>

      </div>
    </div>
  );
}
