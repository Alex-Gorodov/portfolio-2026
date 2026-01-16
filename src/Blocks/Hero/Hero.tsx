import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import Image from "../../Assets/Images/Alex.webp";
import CV from "../../Assets/Files/alex_gorodov_cv.pdf";
import Button from "../../Components/Buttons/Button";
import { useResponsive } from "../../Context/responsive.context";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { isMobile } = useResponsive();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageY, setImageY] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [imageGrayScale, setImageGrayScale] = useState(0);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const speed = 0.45;

    const onScroll = () => {
      setImageY(window.scrollY * speed);
      setImageOpacity(Math.max(0, 1 - window.scrollY / 600));
      setImageGrayScale(Math.min(100, window.scrollY / 5));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero_wrapper section">
      <div className="hero_image-wrapper hero_parallax">
        <img
          ref={imageRef}
          src={Image}
          alt="Alex"
          width={320}
          height={320}
          className="hero_image hero_parallax-image"
          style={{
            transform: `translate(0, ${imageY}px)`,
            opacity: imageOpacity,
            filter: `grayscale(${imageGrayScale}%)`,
          }}
        />
      </div>

      <div className="hero_content">
        <div>
          <p className="hero_text-intro">Hello, I'm</p>
          <div className="hero_name-marquee">
            <div className="hero_name-track">
              {
                isMobile
                ?
                <>
                  <h2 className="hero_name">AlexGorodov</h2>
                  <h2 className="hero_name">AlexGorodov</h2>
                </>
                :
                <h2 className="hero_name">Alex Gorodov</h2>
              }
            </div>
          </div>


          <p className="hero_description">Frontend Developer</p>
        </div>

        <div className="hero_buttons-wrapper">
          <a href={CV} type="file" rel="noreferrer nofollow" target="_blank" download>
            <Button label="Download CV" secondary />
          </a>
          <Button label="Contact" />
        </div>

        <div className="hero_links-wrapper">
          <a className="hero_link" href="https://www.linkedin.com/in/a-gorodov" target="_blank" rel="noreferrer" >
            <AiFillLinkedin size={32}/>
          </a>
          <a className="hero_link" href="https://github.com/Alex-Gorodov" target="_blank" rel="noreferrer">
            <AiOutlineGithub size={32}/>
          </a>
        </div>
      </div>
    </div>
  );
}
