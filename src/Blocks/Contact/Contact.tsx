import { AiOutlineLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { useResponsive } from "../../Context/responsive.context";
import { useRef, useState, useEffect } from "react";

export default function Contact() {
  const { isMobile } = useResponsive();

  const wrapperRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const el = wrapperRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(el);

      return () => observer.disconnect();
    }, []);

  return (
    <>
      <div className="section__header">
        <p className="section__intro-text">Get in touch</p>
        <h2 className="section__intro-title">Contact me</h2>
      </div>
      <div
        id="contact"
        ref={wrapperRef}
        className={`contact ${isVisible ? 'contact--appearing' : ''}`}
      >
        <div className="contact__links">
          <a href="mailto: a.gorodov.22@gmail.com" className="contact__link">
            <SiGmail size={48} color="#fc413d"/>
            <span className="visually-hidden">a.gorodov.22@gmail.com</span>
          </a>

          <a className="contact__link" href="https://www.linkedin.com/in/a-gorodov" target="__blank" rel="noreferrer" >
            <AiOutlineLinkedin size={48} color="#0077b5"/>
            {
              !isMobile
              &&
              <span className="visually-hidden">linkedin</span>
            }
          </a>

          <a className="contact__link" href="https://wa.me/972543955573" target="__blank" rel="noreferrer" >
            <FaWhatsapp size={48} color="#189b46"/>
            {
              !isMobile
              &&
              <span className="visually-hidden">WhatsApp</span>
            }
          </a>

          <a className="contact__link" href="https://t.me/a_gorodov" target="__blank" rel="noreferrer" >
            <FaTelegramPlane size={48} color="#24a1de"/>
            {
              !isMobile
              &&
              <span className="visually-hidden">Telegram</span>
            }
          </a>

          <a className="contact__link" href="https://github.com/Alex-Gorodov" target="__blank" rel="noreferrer" >
            <FaGithub size={48} color="#000000"/>

            {
              !isMobile
              &&
              <span className="visually-hidden">GitHub</span>
            }
          </a>
        </div>
      </div>
    </>
  )
}
