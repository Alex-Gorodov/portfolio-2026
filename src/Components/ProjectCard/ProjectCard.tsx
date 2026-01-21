import React, { useEffect, useRef, useState } from "react"
import ThreeDCard from "../ThreeDCard/ThreeDCard";
import { useResponsive } from "../../Context/responsive.context";

interface ProjectCardProps {
  children: React.ReactNode;
  isVideo?: boolean;
  title: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  themeColor?: string;
  path?: string;
}

export default function ProjectCard({
  children,
  title,
  isVideo,
  themeColor,
  path
}: ProjectCardProps) {
  const [active, setActive] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <div
      className="project-card"
    >

      <div
        className="project-card_frame"
      >
        <div className={`project-card_children ${active ? "is-active" : "is-exit"}`}>
          {isVideo ? (
            <ThreeDCard active={active} disableShadow hoverOnly>
              {children}
            </ThreeDCard>
          ) : (
            children
          )}
        </div>
      </div>

      {
        typeof title === "string" ? (
          <h3 className="project-card_title">{title}</h3>
        ) : (
          <div className="project-card_title project-card_title--icon">
            <a href={path} target="_blank" rel="noreferrer nofollow">
              {React.createElement(title, {
                width: 120,
                height: 40,
                "aria-hidden": true,
              })}
            </a>
          </div>
        )
      }
    </div>
  );
}
