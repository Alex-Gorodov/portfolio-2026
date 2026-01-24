import React, { useRef, useState } from "react";
import ThreeDCard from "../ThreeDCard/ThreeDCard";

interface ProjectCardProps {
  children: React.ReactNode;
  isVideo?: boolean;
  title: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  themeColor?: string;
  path?: string;
  icon?: string;
}

export default function ProjectCard({
  children,
  title,
  isVideo,
  themeColor,
  icon,
  path
}: ProjectCardProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"rest" | "active" | "leaving">("rest");
  const animationTimeout = useRef<NodeJS.Timeout | null>(null);

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
        className={`project-card_frame frame-${state}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`project-card_children children-${state}`}>
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
        <h3 className="project-card_title">{title}</h3>
      ) :
        icon ?
        <img src={icon} width={80} alt={isTitleName ? title : 'Project'}/>
        :

      (
        <div className="project-card_title project-card_title--icon">
          <a href={path} target="_blank" rel="noreferrer nofollow" tabIndex={-1}>
            {React.createElement(title, { width: 120, height: 40, "aria-hidden": true })}
            <span className="visually-hidden">{`Go to ${isTitleName ? title : 'The project'}`}</span>
          </a>
        </div>
      )}
    </div>
  );
}
