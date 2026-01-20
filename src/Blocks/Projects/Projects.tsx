
import VideoTemplate from '../../Components/VideoTemplate/VideoTemplate';
import Amishav from '../../Assets/Videos/amishav-iphone-16.mp4';
import Sportapp from '../../Assets/Videos/sportapp-iphone-16.mp4';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { Toggle } from '../../Components/Toggle/Toggle';
import { useState } from 'react';
import { WEB_PROJECTS } from '../../constants';
import { PortfolioItem } from '../../Components/PortfolioItem/PortfolioItem';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(true);

  const mobileProjects = [
    {
      title: "Amishav",
      themeColor: "#72b4ee",
      src: Amishav
    },

    {
      title: "Unifier",
      themeColor: "#fe5622",
      src: Sportapp
    },

  ]

  return (
    <div className="projects section" id="projects">
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div className="section_header">
          <p className="section_intro-text">Browse my recent</p>
          <h2 className="section_intro-title">Projects</h2>
        </div>
        <Toggle value={isMobile} onChange={() => setIsMobile(!isMobile)} leftLabel = "Mobile" rightLabel = "Web"/>
      </div>
      <div className='projects_wrapper'>
        {
          isMobile
          ?
          mobileProjects.map((p) => {
            return (
              <ProjectCard title={p.title} themeColor={p.themeColor} isVideo>
                <VideoTemplate src={p.src}/>
              </ProjectCard>
            )
          })
          :
          WEB_PROJECTS.map((p) => {
            return (
              <ProjectCard title={p.icon} path={p.path}>
                <PortfolioItem item={{
                  id: p.id,
                  name: p.name,
                  path: p.path,
                  description: p.description,
                  img: p.img,
                  isAdaptive: false
                }} />
              </ProjectCard>
            )
          })
        }
      </div>
    </div>
  )
}
