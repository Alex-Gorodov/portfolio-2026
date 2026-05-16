import React, { useRef, useState } from "react";
import ThreeDCard from "../ThreeDCard/ThreeDCard";
import { ReactComponent as ReactIcon } from "../../Assets/Images/icons/react.svg"
import { ReactComponent as Redux } from "../../Assets/Images/icons/redux.svg"
import { ReactComponent as Sass } from "../../Assets/Images/icons/sass.svg"
import { ReactComponent as HTML } from "../../Assets/Images/icons/html.svg"
import { ReactComponent as Less } from "../../Assets/Images/icons/less.svg"
import { ReactComponent as CSS } from "../../Assets/Images/icons/css.svg"
import { ReactComponent as JS } from "../../Assets/Images/icons/js.svg"
import { ReactComponent as TS } from "../../Assets/Images/icons/ts.svg"
import { ReactComponent as Firebase } from "../../Assets/Images/icons/firebase.svg"


interface ProjectCardProps {
  children: React.ReactNode;
  isVideo?: boolean;
  title: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  themeColor?: string;
  description?: string;
  path?: string;
  icon?: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  technologies: string[];
}

export default function ProjectCard({
  children,
  title,
  isVideo,
  themeColor,
  description,
  icon,
  path,
  technologies,
}: ProjectCardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"rest" | "active" | "leaving">("rest");
  const animationTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!isVideo) return;

    if (animationTimeout.current) clearTimeout(animationTimeout.current);

    setState("active");

    if (frameRef.current) {
      frameRef.current.style.overflow = "visible";
      frameRef.current.style.clipPath = "inset(-200px 0 0 0)";
      frameRef.current.style.animation = "none";
      void frameRef.current.offsetWidth;

      frameRef.current.style.animation = "phone-frame-overflow-in 2s ease forwards";
    }
  };

  const handleMouseLeave = () => {
    if (!isVideo) return;

    if (animationTimeout.current) clearTimeout(animationTimeout.current);
    setTimeout(() => {

      setState("leaving");
    }, 2000);

    if (frameRef.current) {
      frameRef.current.style.animation = "none";
      void frameRef.current.offsetWidth;
      frameRef.current.style.animation = "phone-frame-overflow-out 2s ease forwards reverse";
    }

    animationTimeout.current = setTimeout(() => {
      setState("rest");
      if (frameRef.current) {
        frameRef.current.style.animation = "phone-frame-overflow-out 2s ease forwards";
        frameRef.current.style.overflow = "hidden";
        frameRef.current.style.clipPath = "inset(0 0)";
      }
    }, 3750);
  };

  const isTitleName = typeof title === "string";

  return (
    <div className="project-card">
      <div
        style={{backgroundColor: themeColor}}
        className={`project-card__frame frame-${state}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocusCapture={handleMouseEnter}

      >
        <div className={`project-card__children children-${state}`}>
          {isVideo ? (
            <ThreeDCard active={state === "active"} disableShadow hoverOnly>
              {children}
            </ThreeDCard>
          ) : (
            children
          )}
        </div>
      </div>

      {!icon && isTitleName ? (
        <h3 className="project-card__title">{title}</h3>
      ) :
        icon ?
        typeof icon === "string" ?

          <a style={{ display: 'flex' }} href={path} target="__blank" rel="noreferrer nofollow" tabIndex={-1}>
            <img src={icon} width={80} height={40} alt={isTitleName ? title : 'Project'}/>
          </a>
          :
          React.createElement(icon, { width: 120, height: 40, "aria-hidden": true })
        :
        (
          <div className="project-card__title project-card__title--icon">
            <a href={path} target="__blank" rel="noreferrer nofollow" tabIndex={-1}>
              {React.createElement(title, { width: 120, height: 40, "aria-hidden": true })}
              <span className="visually-hidden">{`Go to ${isTitleName ? title : 'The project'}`}</span>
            </a>
          </div>
        )
      }
      {
        description && (
          <p
            className={`project-card__description ${
              isDescriptionOpen ? 'project-card__description--open' : ''
            }`}
            onClick={() => setIsDescriptionOpen(prev => !prev)}
          >
            {description}
          </p>
        )
      }
      <ul className="project-card__technologies">
        {
          technologies.map((item) => {
            return (
              <li key={`${item}-${Math.random() * 10}`} title={item}>
                <span>
                  {
                    (() => {
                      switch (item) {
                        case 'React':
                          return <ReactIcon/>
                        case 'TypeScript':
                          return <TS/>
                        case 'Redux':
                          return <Redux/>
                        case 'SASS(CSS)':
                          return <Sass/>
                        case 'Less(CSS)':
                          return <Less/>
                        case 'HTML':
                          return <HTML/>
                        case 'JavaScript':
                          return <JS/>
                        case 'CSS':
                          return <CSS/>
                        case 'Firebase':
                          return <Firebase/>
                        default:
                          return item;
                      }
                    })()
                  }
                </span>
                <span className="visually-hidden">{item}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
