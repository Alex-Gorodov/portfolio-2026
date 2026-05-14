import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { ContactForm } from "../ContactForm/ContactForm";
import { useResponsive } from "../../Context/responsive.context";

export default function Contact() {
  const { isMobile } = useResponsive();

  return (
    <div className="contact" id="contact">
      <div className="section__header">
        <p className="section__intro-text">Get in touch</p>
        <h2 className="section__intro-title">Contact me</h2>
      </div>
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
  )
}
