
import VideoTemplate from '../../Components/VideoTemplate/VideoTemplate';
import Sportapp from '../../Assets/Videos/sportapp-iphone-16.mp4';
import SportappPoster from '../../Assets/Images/poster-sport.png';
import Amishav from '../../Assets/Videos/amishav-iphone-16.mp4';
import AmishavIcon from '../../Assets/Images/Portfolio/logos/amishav-icon.png'
import AmishavPoster from '../../Assets/Images/poster-amishav.png';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { Toggle } from '../../Components/Toggle/Toggle';
import { useState } from 'react';
import { WEB_PROJECTS } from '../../constants';
import { PortfolioItem } from '../../Components/PortfolioItem/PortfolioItem';

export default function Projects() {
  const [isMobileApps, setIsMobileApps] = useState(true);
  const [isAppearing, setIsAppearing] = useState(false);

  const handleChangeApps = () => {
    setIsAppearing(!isAppearing)
    setIsMobileApps(!isMobileApps)
    setTimeout(() => {
      setIsAppearing(false);
    }, 750);
  }

  const mobileProjects = [
    {
      title: "Amishav",
      themeColor: "#72b4ee",
      src: Amishav,
      poster: AmishavPoster,
      icon: AmishavIcon,
    },

    {
      title: "Unifier",
      themeColor: "#fe5622",
      src: Sportapp,
      poster: SportappPoster,
      // title:
    },
  ]

  return (
    <div className="projects section" id="projects">
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div className="section_header">
          <p className="section_intro-text">Browse my recent</p>
          <h2 className="section_intro-title">Projects</h2>
        </div>
        <Toggle value={isMobileApps} onChange={() => handleChangeApps()} leftLabel = "Mobile" rightLabel = "Web"/>
      </div>
      <div className={`projects_wrapper ${isAppearing ? 'appearing' : ''}`}>
        {
          isMobileApps
          ?
          mobileProjects.map((p) => {
            return (
              <ProjectCard title={p.title} themeColor={p.themeColor} icon={p.icon} isVideo>
                <VideoTemplate src={p.src} poster={p.poster}/>
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
