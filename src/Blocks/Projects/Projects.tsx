import { motion, AnimatePresence } from 'framer-motion';
import VideoTemplate from '../../Components/VideoTemplate/VideoTemplate';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { Toggle } from '../../Components/Toggle/Toggle';
import { useEffect, useRef, useState } from 'react';
import { MOBILE_PROJECTS, WEB_PROJECTS } from '../../constants';
import { PortfolioItem } from '../../Components/PortfolioItem/PortfolioItem';

export default function Projects() {
  const [isMobileApps, setIsMobileApps] = useState(true);
  const [isAppearing, setIsAppearing] = useState(false);

  const mobileRef = useRef<HTMLDivElement | null>(null);
  const webRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100vw' : '-100vw',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100vw' : '-100vw',
      opacity: 0,
    }),
  };

  const direction = isMobileApps ? -1 : 1;

  const handleChangeApps = () => {
    setIsAppearing(!isAppearing)
    setIsMobileApps(!isMobileApps)
    setTimeout(() => {
      setIsAppearing(false);
    }, 750);
  }

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const active = isMobileApps ? mobileRef.current : webRef.current;
    if (!wrapper || !active) return;
    const updateHeight = () => { wrapper.style.height = `${ active.offsetHeight } px` };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(active);
    return () => observer.disconnect()
  }, [isMobileApps]);

  return (
    <div className="projects section" id="projects">
      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        <div className="section__header">
          <p className="section__intro-text">Browse my recent</p>
          <h2 className="section__intro-title">Projects</h2>
        </div>
        <Toggle value={isMobileApps} onChange={() => handleChangeApps()} leftLabel = "Mobile" rightLabel = "Web"/>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        {isMobileApps ? (
          <motion.div
            key="mobile"
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="projects-container projects-container--mobile"
          >
            {MOBILE_PROJECTS.map(p => (
              <ProjectCard key={p.title} {...p} isVideo>
                <VideoTemplate src={p.src} poster={p.poster} />
              </ProjectCard>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="web"
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="projects-container projects-container--web"
          >
            {WEB_PROJECTS.map(p => (
              <ProjectCard key={p.id} title={p.name} icon={p.icon} path={p.path} description={p.description} technologies={p.technologies} layout={p.layout}>
                <PortfolioItem item={{ ...p }} />
              </ProjectCard>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}
