import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { ContactForm } from "../ContactForm/ContactForm";
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
        <div className="contact__block">
          <ContactForm/>

          <div className="contact__links">
            <a href="mailto: a.gorodov.22@gmail.com" className="contact__link">
              <AiOutlineMail size={32} />
              <span>a.gorodov.22@gmail.com</span>
            </a>

            <a className="contact__link" href="https://www.linkedin.com/in/a-gorodov" target="__blank" rel="noreferrer" >
              <AiOutlineLinkedin size={32}/>
              {
                !isMobile
                &&
                <span>Linkedin</span>
              }
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
