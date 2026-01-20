import React, { useState } from "react"
import ThreeDCard from "../ThreeDCard/ThreeDCard";
import { useResponsive } from "../../Context/responsive.context";

interface ProjectCardProps {
  children: React.ReactNode;
  isVideo?: boolean;
  title: string;
  themeColor?: string;
}

// export default function ProjectCard({
//   children,
//   title,
//   themeColor,
//   isVideo
// }: ProjectCardProps) {
//   return (
//     <div className="project-card">
//       {/* <div
//         className={`project-card_frame ${isVideo ? 'project-card_frame--video' : ''}`}
//         style={{ '--theme-color': themeColor } as React.CSSProperties}
//       >
//         <div className="project-card_children">
//           {children}
//         </div>
//       </div> */}

      // <div
      //   className={`project-card_frame ${isVideo ? 'project-card_frame--video' : ''}`}
      //   style={{ '--theme-color': themeColor || 1 } as React.CSSProperties}
      // >
      //   <div className="project-card_mask">
//           <div className="project-card_children">
//             {
//               isVideo
//               ?
//               <ThreeDCard>
//                 {children}
//               </ThreeDCard>
//               :
//               children
//             }
//           </div>
//         </div>
//       </div>

//       <div>
//         <h3 className="project-card_title">{title}</h3>

//         <div className="project-card_actions">
//           <button>Github</button>
//           <button>View</button>
//         </div>
//       </div>


//     </div>
//   );
// }

export default function ProjectCard({
  children,
  title,
  isVideo,
  themeColor
}: ProjectCardProps) {
  const [active, setActive] = useState(false);
  const { isMobile } = useResponsive();

  return (
    <div
      className="project-card"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={`project-card_frame ${isVideo ? 'project-card_frame--video' : ''}`}
        style={{ '--theme-color': themeColor || 1 } as React.CSSProperties}
      >
        <div className="project-card_mask">
          <div className="project-card_children">
            {!isMobile ? (
              <ThreeDCard active={active} disableShadow hoverOnly>
                {children}
              </ThreeDCard>
            ) : (
              children
            )}
          </div>
        </div>
      </div>

      <h3 className="project-card_title">{title}</h3>
    </div>
  );
}
