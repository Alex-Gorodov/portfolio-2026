import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="section_header">
        <p className="section_intro-text">Get in touch</p>
        <h2 className="section_intro-title">Contact me</h2>
      </div>
      <div className="contact_block">
        <a href="mailto: a.gorodov.22@gmail.com" className="contact_link">
          <AiOutlineMail size={32} />
          <span>a.gorodov.22@gmail.com</span>
        </a>

        <a className="contact_link" href="https://www.linkedin.com/in/a-gorodov" target="_blank" rel="noreferrer" >
          <AiOutlineLinkedin size={32}/>
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  )
}
