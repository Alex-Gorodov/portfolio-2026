import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import Image from "../../Assets/Images/Alex.webp";
import CV from "../../Assets/Files/alex_gorodov_cv.pdf";
import Button from "../../Components/Buttons/Button";
import { useResponsive } from "../../Context/responsive.context";

export default function Hero() {
  const { isMobile } = useResponsive();

  return (
    <div className="hero_wrapper section">
      <div className="hero_image-wrapper">
        <img
          src={Image}
          alt="Alex"
          width={320}
          height={320}
          className="hero_image"
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
                  <h2 className="hero_name">Alex Gorodov</h2>
                  <h2 className="hero_name">Alex Gorodov</h2>
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
