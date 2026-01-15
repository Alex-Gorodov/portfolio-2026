import Image from "../../Assets/Images/main-pic.webp";
import { AiOutlineLineChart } from "react-icons/ai";
import { useEffect, useRef } from "react";

export default function Main() {
  const cardRef = useRef<HTMLDivElement | null>(null);

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

  /* ---------- MOBILE ---------- */
  const handleOrientation = (e: DeviceOrientationEvent) => {
    if (e.beta === null || e.gamma === null) return;

    const rotateX = Math.max(-maxRotate, Math.min(maxRotate, e.beta / 5));
    const rotateY = Math.max(-maxRotate, Math.min(maxRotate, e.gamma / 5));

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  if (window.matchMedia("(hover: hover)").matches) {
    window.addEventListener("mousemove", handleMouseMove);
  } else {
    window.addEventListener("deviceorientation", handleOrientation);
  }

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("deviceorientation", handleOrientation);
  };
}, []);


  return (
    <div className="main">
      <div className="main_header">
        <p className="main_intro-text">Get to know more</p>
        <h2>About me</h2>
      </div>

      <div className="main_content">
        <div ref={cardRef} className="main_image-wrapper">
          <img
            src={Image}
            alt="Alex"
            width={320}
            height={320}
            className="main_image"
          />
        </div>

        <div className="main_card">
          <AiOutlineLineChart size={48}/>
          <p className="main_card-title">Experience</p>
          <p className="main_card-text">3+ years</p>
          <p className="main_card-text">Frontend developer</p>
        </div>
        <div className="main_card">text</div>
      </div>
    </div>
  );
}
