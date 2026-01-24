import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import Image from "../../Assets/Images/Alex.webp";
import CV from "../../Assets/Files/alex_gorodov_cv.pdf";
import Button from "../../Components/Buttons/Button";
import { useResponsive } from "../../Context/responsive.context";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { isMobile } = useResponsive();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeWord, setActiveWord] = useState<'Frontend' | 'Mobile'>('Frontend');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveWord((prev) =>
        prev === 'Frontend' ? 'Mobile' : 'Frontend'
      );
    }, 2000);

    return () => clearInterval(id);
  }, []);


  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const speed = 0.35;
    const update = () => {
      const scale = 1 + window.scrollY * 0.0018;
      const y = window.scrollY * speed;

      image.style.transform = `translate(0, ${y}px) scale(${scale})`;
      image.style.opacity = `${Math.max(0, 1 - window.scrollY / 600)}`;
      image.style.filter = `grayscale(${Math.min(100, window.scrollY / 5)}%)`;

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={`hero section ${mounted ? 'appearing' : ''}`}>
      <div className="hero_wrapper">
        <div className="hero_image-wrapper hero_parallax">
          <img
            ref={imageRef}
            src={Image}
            alt="Alex"
            width={320}
            height={320}
            className="hero_image hero_parallax-image"
          />
        </div>

        <div className="hero_content">
          <div className="hero_text-wrapper">
            <p className="hero_text-intro">Hello, I'm</p>
            <div className="hero_name-marquee">
              <div className="hero_name-track">
                {
                  isMobile
                  ?
                  <>
                    <h2 className="hero_name">AlexGorodov</h2>
                    <h2 className="hero_name">AlexGorodov</h2>
                    <h2 className="hero_name">AlexGorodov</h2>
                  </>
                  :
                  <h2 className="hero_name">Alex Gorodov</h2>
                }
              </div>
            </div>

            <p className="hero_description">
              <span className="hero_gear">
                <span
                  key={activeWord}
                  className="hero_gear-word"
                >
                  {activeWord}
                </span>
              </span>
              <span>Developer</span>
            </p>
          </div>

          <div className="hero_buttons-wrapper">
            {/* <a className="hero_button" autoFocus={false} href={CV} type="file" rel="noreferrer nofollow" target="_blank" download> */}
              <Button role="link" href={CV} label="Download CV" secondary allyDescription="Download CV"/>
              <Button role="link" href="#contact" label="Contact" allyDescription="Go to contact information" />
          </div>

          <div className="hero_links-wrapper">
            <a className="hero_link" href="https://www.linkedin.com/in/a-gorodov" target="_blank" rel="noreferrer nofollow" >
              <AiFillLinkedin size={32}/>
            </a>
            <a className="hero_link" href="https://github.com/Alex-Gorodov" target="_blank" rel="noreferrer nofollow">
              <AiOutlineGithub size={32}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
