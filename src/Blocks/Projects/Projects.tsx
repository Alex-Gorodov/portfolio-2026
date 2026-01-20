
import VideoTemplate from '../../Components/VideoTemplate/VideoTemplate';
import Amishav from '../../Assets/Videos/amishav-iphone-16.mp4';
import Sportapp from '../../Assets/Videos/sportapp-iphone-16.mp4';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

export default function Projects() {
  return (
    <div className="projects section">
      <div className="section_header">
        <p className="section_intro-text">Browse my recent</p>
        <h2 className="section_intro-title">Projects</h2>
      </div>
      <div className='projects_wrapper'>
        {/* <ProjectCard title="Amishav" themeColor="#72b4ee" isVideo> */}
          <VideoTemplate src={Amishav}/>
        {/* </ProjectCard>
        <ProjectCard title="Unifier" themeColor="#fe5622" isVideo> */}
          <VideoTemplate src={Sportapp}/>
        {/* </ProjectCard> */}
      </div>
    </div>
  )
}
