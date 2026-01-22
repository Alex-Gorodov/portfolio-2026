// import React, { useEffect, useRef, useState } from "react"
// import ThreeDCard from "../ThreeDCard/ThreeDCard";

// interface ProjectCardProps {
//   children: React.ReactNode;
//   isVideo?: boolean;
//   title: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   themeColor?: string;
//   path?: string;
// }

// export default function ProjectCard({
//   children,
//   title,
//   isVideo,
//   themeColor,
//   path
// }: ProjectCardProps) {
//   const [isActive, setIsActive] = useState(false);
//   const [isLeaving, setIsLeaving] = useState(false);
//   const [isRest, setIsRest] = useState(true);

//   const handleActive = () => {
//     setIsActive(true);
//     setIsLeaving(false);
//   }

//   const handleLeaving = () => {
//     setIsActive(false);
//     setIsLeaving(true);
//   }

//   const phoneRef = useRef<HTMLDivElement>(null);

//   // const handleActive = () => {
//   //   setIsRest(false);
//   //   setIsLeaving(false);
//   //   setIsActive(true);

//   //   if (phoneRef.current) {
//   //     phoneRef.current.style.animation = "none"; // сброс
//   //     void phoneRef.current.offsetWidth; // триггер reflow
//   //     phoneRef.current.style.animation = "phone-take-out 2s ease-out forwards"; // заново
//   //   }
//   // }

//   // const handleLeaving = () => {
//   //   setIsRest(false)
//   //   setIsActive(false);
//   //   setIsLeaving(true);

//   //   if (phoneRef.current) {
//   //     phoneRef.current.style.animation = "none";
//   //     void phoneRef.current.offsetWidth;
//   //     phoneRef.current.style.animation = "phone-take-in 1.5s ease-in forwards";
//   //   }
//   // }

//   const frameRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (isActive || isLeaving || !isRest) {
//       frameRef.current!.style.overflow = "visible";
//     } else {
//       frameRef.current!.style.overflow = "hidden";
//     }
//   }, [isActive, isLeaving, isRest]);


//   return (
//     <div className={`project-card`}>

//       <div
//         className="project-card_frame"
//         ref={frameRef}
//         onMouseEnter={() => handleActive()}
//         onMouseLeave={() => handleLeaving()}
//       >
//         <div className={`project-card_children`} ref={phoneRef}>
//           {isVideo ? (
//             <ThreeDCard active={isActive} disableShadow hoverOnly>
//               {children}
//             </ThreeDCard>
//           ) : (
//             children
//           )}
//         </div>
//       </div>

//       {
//         typeof title === "string" ? (
//           <h3 className="project-card_title">{title}</h3>
//         ) : (
//           <div className="project-card_title project-card_title--icon">
//             <a href={path} target="_blank" rel="noreferrer nofollow">
//               {React.createElement(title, {
//                 width: 120,
//                 height: 40,
//                 "aria-hidden": true,
//               })}
//             </a>
//           </div>
//         )
//       }
//     </div>
//   );
// }


import React, { useRef, useState } from "react";
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
  const { isMobile } = useResponsive();

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
        frameRef.current.style.overflow = "hidden";
        frameRef.current.style.clipPath = "inset(0 0)";
        frameRef.current.style.animation = "phone-frame-overflow-out 2s ease forwards";
      }
    }, 3750);
  };

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

      {typeof title === "string" ? (
        <h3 className="project-card_title">{title}</h3>
      ) : (
        <div className="project-card_title project-card_title--icon">
          <a href={path} target="_blank" rel="noreferrer nofollow">
            {React.createElement(title, { width: 120, height: 40, "aria-hidden": true })}
          </a>
        </div>
      )}
    </div>
  );
}
