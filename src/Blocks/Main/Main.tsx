import Image from "../../Assets/Images/main-pic.webp";
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useResponsive } from "../../Context/responsive.context";

export default function Main() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { isMobile } = useResponsive();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const inner = card?.querySelector(".main_image-inner") as HTMLDivElement;
    if (!card || !inner) return;
    // if (!card) return;


    const maxRotate = 16;
    const maxXRotate = 45;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const rotateY = ((e.clientX - centerX) / centerX) * maxRotate;
      const rotateX = -((e.clientY - centerY) / centerY) * maxRotate;

      inner.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;

      card.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;

      const shadowX = rotateY * 2;
      const shadowY = rotateX * -2;

      inner.style.boxShadow = `
        ${shadowX}px ${shadowY + 30}px 60px rgba(0,0,0,0.35)
      `;

    };

      const handleScroll = () => {
        const rect = card.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // карточка вне зоны интереса
        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        const totalScroll = viewportHeight + rect.height;
        const scrolled = viewportHeight - rect.top;

        const progress = Math.max(0, Math.min(scrolled / totalScroll, 1));

        // от +maxRotate (смотрит вверх) → -maxRotate (смотрит вниз)
        const rotateX = maxXRotate - progress * maxXRotate * 2;

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
        `;
      };


    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(card);

    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
      // Initial call to set starting position
      handleScroll();
    } else {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isMobile, isVisible]);

  return (
    <div className="main section" id="about">
      <div className="section_header">
        <p className="section_intro-text">Get to know more</p>
        <h2 className="section_intro-title">About me</h2>
      </div>

      <div className="main_content-wrapper">

        {/* <div ref={cardRef} className="main_image-wrapper">
          <div className="main_image-inner">
            <img
              src={Image}
              alt="Alex and Agatha anime style AI generated"
              width={320}
              height={320}
              className="main_image"
            />
          </div>
        </div> */}

        {/* <div className="main_content"> */}

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

            <div ref={cardRef} className="main_image-wrapper">
              <div className="main_image-inner">
                <img
                  src={Image}
                  alt="Alex and Agatha anime style AI generated"
                  width={320}
                  height={320}
                  className="main_image"
                />
              </div>
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
        {/* </div> */}

      </div>
    </div>
  );
}
