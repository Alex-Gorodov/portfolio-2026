import { Toggle } from '../../Components/Toggle/Toggle';
import { useEffect, useRef, useState } from 'react';
import { IntelMobileImages, IntelScreensDescription, MOBILE_PROJECTS, technologiesIcons, WEB_PROJECTS } from '../../constants';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [isMobileApps, setIsMobileApps] = useState(true);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const activeContentRef = useRef<HTMLDivElement | null>(null);

  const handleChangeApps = () => {
    setIsMobileApps(!isMobileApps);
    setActiveProjectIndex(0);
  };

  const itemsToRender = isMobileApps ? MOBILE_PROJECTS : WEB_PROJECTS;
  const currentProject = itemsToRender[activeProjectIndex];
  const isMobile = currentProject.id.includes('mobile');

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const active = activeContentRef.current;
    if (!wrapper || !active) return;

    const updateHeight = () => {
      wrapper.style.height = `${active.offsetHeight}px`;
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(active);

    return () => observer.disconnect();
  }, [isMobileApps, activeProjectIndex]);

  const projectVariants = {
    enter: { opacity: 0, y: 15 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  // --- Data Transformation & Row Sorting Group Logic ---
  const groupedRows = IntelMobileImages.reduce<Record<string, string[]>>((acc, imgSrc) => {
    const fileName = imgSrc.split('/').pop() || '';
    const cleanKey = fileName.split(/[-.]/)[0];

    if (!acc[cleanKey]) {
      acc[cleanKey] = [];
    }

    acc[cleanKey].push(imgSrc);
    return acc;
  }, {});

  const explicitOrder = ['profile', 'protocols', 'salary', 'availability', 'schedule'];

  const sortedRowArrays = Object.keys(groupedRows)
    .sort((a, b) => explicitOrder.indexOf(a) - explicitOrder.indexOf(b))
    .map(key => ({
      groupKey: key,
      images: groupedRows[key]
    }));

  return (
    <div className="projects section" id="projects">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="section__header">
          <p className="section__intro-text">Browse my recent</p>
          <h2 className="section__intro-title">Projects</h2>
        </div>
        <Toggle
          value={isMobileApps}
          onChange={handleChangeApps}
          leftLabel="Mobile"
          rightLabel="Web"
        />
      </div>

      <div className="projects__wrapper" style={{ transition: 'height 0.3s ease', overflow: 'hidden' }}>
        {/* Navigation Sidebar */}
        <ul className="projects__buttons">
          {itemsToRender.map((project, index) => {
            const isActive = index === activeProjectIndex;

            return (
              <li
                key={project.id || index}

              >
                <button
                  className={`project__trigger ${isActive ? 'project__trigger--active' : ''}`}
                  onClick={() => setActiveProjectIndex(index)}
                  aria-label={`View ${project.title}`}
                >
                  {(() => {
                    if (!project.icon) return <span>{project.title}</span>;
                    if (typeof project.icon === 'string') {
                      return <img src={project.icon} width={100} alt={project.title} />;
                    }
                    return React.createElement(project.icon, {
                      width: 120,
                      height: 40,
                      'aria-hidden': true
                    });
                  })()}
                </button>
              </li>
            );
          })}
        </ul>



        {/* Dynamic height showcase wrapping the animated content */}
        <div ref={activeContentRef} className="project__showcase-container" style={{ overflow: 'hidden '}}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id || activeProjectIndex + (isMobileApps ? '-mobile' : '-web')}
              variants={projectVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='project__showcase-container-inner'
            >

              <div className='project__scroll-container'>
                {isMobile ? (
                  <div className='project__stack-wrapper'>
                    <div className="project__details">
                      <div className='project__details-wrapper'>
                        <h3 className="project__title">{currentProject.title}</h3>

                        <ul className="project-card__technologies">
                          {currentProject.technologies.map((item, index) => {
                            const IconComponent = technologiesIcons[item];
                            return (
                              <li key={`${item}-${index}`} title={item}>
                                <span>
                                  {IconComponent ? <IconComponent /> : item}
                                </span>
                                <span className="visually-hidden">{item}</span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>

                      <div className="project__description-wrapper">
                        {Array.isArray(currentProject.description) ? (
                          currentProject.description.map((paragraph, pIndex) => (
                            <p key={`desc-${pIndex}`} className="project__description-paragraph">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p className="project__description-paragraph">{currentProject.description}</p>
                        )}
                      </div>
                    </div>

                    {sortedRowArrays.map((row, rowIndex) => {
                      const sectionText = IntelScreensDescription[row.groupKey as keyof typeof IntelScreensDescription];

                      return (
                        <div key={`row-${rowIndex}`} className='project__row-container'>

                          {/* 1. Added the image wrapper to contain the absolute positioned screenshots */}
                          <div className="project__image-wrapper">
                            {row.images.map((imgSrc, imgIndex) => (
                              <img
                                key={`img-${imgIndex}`}
                                className={`project__screenshot project__screenshot--${imgIndex}`}
                                src={imgSrc}
                                alt={`${currentProject.title} ${row.groupKey} screenshot-${imgIndex}`}
                              />
                            ))}
                          </div>

                          {/* 2. Text element cleanly aligned alongside the image wrapper */}
                          {sectionText && (
                            <p className='project__text'>
                              {sectionText}
                            </p>
                          )}

                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div style={styles.desktopContainer}>
                    <div className="project__details">
                      <div style={{ display: 'flex'}}>
                        <h3 className="project__title">{currentProject.title}</h3>
                      </div>

                      <a
                        className='project__desktop-link-wrapper'
                        href={!isMobile && currentProject.path}
                      >
                        <img
                          style={styles.desktopImage}
                          src={currentProject.src}
                          alt={currentProject.title}
                        />
                      </a>
                      <div className="project__description-wrapper" >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <h4>Tech stack:</h4>
                          <ul className="project-card__technologies">
                            {currentProject.technologies.map((item, index) => {
                              const IconComponent = technologiesIcons[item];
                              return (
                                <li key={`${item}-${index}`} title={item}>
                                  <span>
                                    {IconComponent ? <IconComponent /> : item}
                                  </span>
                                  <span className="visually-hidden">{item}</span>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        {Array.isArray(currentProject.description) ? (
                          currentProject.description.map((paragraph, pIndex) => (
                            <p key={`desc-${pIndex}`} className="project__description-paragraph">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p className="project__description-paragraph">{currentProject.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  // desktopContainer: {
  //   width: '100%',
  //   borderRadius: '12px',
  //   overflow: 'hidden',
  //   float: 'right'
  // },
  desktopImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
    float: 'left'
  }
};
