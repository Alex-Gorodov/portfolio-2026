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
    <div className={`hero section ${mounted ? 'section--appearing' : ''}`}>
      <div className="hero__wrapper">
        <div className="hero__image-wrapper hero__parallax">
          <img
            ref={imageRef}
            src={Image}
            alt="Alex"
            width={320}
            height={320}
            className="hero__image hero__parallax-image"
          />
        </div>

        <div className="hero__content">
          <div className="hero__text-wrapper">
            <p className="hero__text-intro">Hello, I'm</p>
            <div className="hero__name-marquee">
              <div className="hero__name-track">
                {
                  isMobile
                  ?
                  <>
                    <h2 className="hero__name">AlexGorodov</h2>&nbsp;
                    <h2 className="hero__name" aria-hidden="true">AlexGorodov</h2>&nbsp;
                    <h2 className="hero__name" aria-hidden="true">AlexGorodov</h2>&nbsp;
                  </>
                  :
                  <h2 className="hero__name">Alex Gorodov</h2>
                }
              </div>
            </div>

            <p className="hero__description">
              <span className="hero__gear">
                <span
                  key={activeWord}
                  className="hero__gear-word"
                >
                  {activeWord}
                </span>
              </span>
              <span>Developer</span>
            </p>
          </div>

          <div className="hero__buttons-wrapper">
            {/* <a className="hero__button" autoFocus={false} href={CV} type="file" rel="noreferrer nofollow" target="__blank" download> */}
              <Button role="link" href={CV} label="Download CV" secondary allyDescription="Download CV"/>
              <Button role="link" href="#contact" label="Contact" allyDescription="Go to contact information" />
          </div>

          <div className="hero__links-wrapper">
            <a className="hero__link" href="https://www.linkedin.com/in/a-gorodov" target="__blank" rel="noreferrer nofollow" >
              <AiFillLinkedin size={32}/>
              <span className="visually-hidden">Visit my Linkedin profile</span>
            </a>
            <a className="hero__link" href="https://github.com/Alex-Gorodov" target="__blank" rel="noreferrer nofollow">
              <AiOutlineGithub size={32}/>
              <span className="visually-hidden">Look in my Github profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
