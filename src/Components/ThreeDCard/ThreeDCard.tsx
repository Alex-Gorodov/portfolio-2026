// // import React, { useEffect, useRef } from 'react'
// // import { useResponsive } from '../../Context/responsive.context';

// // interface ThreeDCardProps {
// //   children: React.ReactNode;
// //   active?: boolean;
// //   disableShadow?: boolean;
// // }

// // export default function ThreeDCard({children, active = false, disableShadow}: ThreeDCardProps) {
// //   const cardRef = useRef<HTMLDivElement | null>(null);
// //     const { isMobile } = useResponsive();

// //     useEffect(() => {
// //       const card = cardRef.current;
// //       const inner = card?.querySelector(".three-d-card_inner") as HTMLDivElement;
// //       if (!card || !inner) return;

// //       const maxRotate = 16;
// //       const maxXRotate = 45;

// //       const handleMouseMove = (e: MouseEvent) => {
// //         const centerX = window.innerWidth / 2;
// //         const centerY = window.innerHeight / 2;

// //         const rotateY = ((e.clientX - centerX) / centerX) * maxRotate;
// //         const rotateX = -((e.clientY - centerY) / centerY) * maxRotate;

// //         inner.style.transform = `
// //           rotateX(${rotateX}deg)
// //           rotateY(${rotateY}deg)
// //         `;

// //         card.style.transform = `
// //           perspective(900px)
// //           rotateX(${rotateX}deg)
// //           rotateY(${rotateY}deg)
// //         `;

// //         const shadowX = rotateY * 2;
// //         const shadowY = rotateX * -2;

// //         if (!disableShadow) {
// //           inner.style.boxShadow = `
// //             ${shadowX}px ${shadowY + 30}px 60px rgba(0,0,0,0.35)
// //           `;
// //         } else {
// //           inner.style.boxShadow = "none";
// //         }

// //       };

// //         const handleScroll = () => {
// //           const rect = card.getBoundingClientRect();
// //           const viewportHeight = window.innerHeight;

// //           if (rect.bottom < 0 || rect.top > viewportHeight) return;

// //           const totalScroll = viewportHeight + rect.height;
// //           const scrolled = viewportHeight - rect.top;

// //           const progress = Math.max(0, Math.min(scrolled / totalScroll, 1));

// //           const rotateX = maxXRotate - progress * maxXRotate * 2;

// //           card.style.transform = `
// //             rotateX(${rotateX}deg)
// //           `;
// //         };

// //       if (isMobile) {
// //         window.addEventListener("scroll", handleScroll);

// //         handleScroll();
// //       } else {
// //         window.addEventListener("mousemove", handleMouseMove);
// //       }

// //       return () => {
// //         window.removeEventListener("mousemove", handleMouseMove);
// //         window.removeEventListener("scroll", handleScroll);

// //       };
// //     }, [disableShadow, isMobile, active]);
// //   return (
// //     <div ref={cardRef} className="three-d-card_wrapper" style={{ '--flat': disableShadow } as React.CSSProperties}>
// //       <div className="three-d-card_inner">
// //         {children}
// //       </div>
// //     </div>
// //   )
// // }

import React, { useEffect, useRef } from 'react';
import { useResponsive } from '../../Context/responsive.context';

// interface ThreeDCardProps {
//   children: React.ReactNode;
//   active?: boolean;       // включаем вращение
//   disableShadow?: boolean;
// }

// export default function ThreeDCard({
//   children,
//   active = false,
//   disableShadow
// }: ThreeDCardProps) {
//   const wrapperRef = useRef<HTMLDivElement | null>(null);
//   const innerRef = useRef<HTMLDivElement | null>(null);
//   const { isMobile } = useResponsive();

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const inner = innerRef.current;
//     if (!wrapper || !inner) return;

//     if (!active && !isMobile) {
//       inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
//       inner.style.boxShadow = disableShadow ? 'none' : '';
//       return;
//     }

//     const maxRotate = 16;

//     const handleMouseMove = (e: MouseEvent) => {
//       // if (!active) return;

//       const rect = wrapper.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxRotate;
//       const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxRotate;

//       inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

//       if (!disableShadow) {
//         inner.style.boxShadow = `${rotateY * 2}px ${rotateX * -2 + 24}px 40px rgba(0,0,0,0.35)`;
//       } else {
//         inner.style.boxShadow = 'none';
//       }

//       wrapper.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//     };

//     const handleScroll = () => {
//       if (!isMobile) return;
//       const rect = wrapper.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;

//       if (rect.bottom < 0 || rect.top > viewportHeight) return;

//       const totalScroll = viewportHeight + rect.height;
//       const scrolled = viewportHeight - rect.top;
//       const progress = Math.max(0, Math.min(scrolled / totalScroll, 1));

//       const rotateX = maxRotate - progress * maxRotate * 2;
//       wrapper.style.transform = `perspective(900px) rotateX(${rotateX}deg)`;
//     };

//     if (isMobile) {
//       window.addEventListener('scroll', handleScroll);
//       handleScroll();
//     } else {
//       wrapper.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       if (isMobile) {
//         window.removeEventListener('scroll', handleScroll);
//       } else {
//         wrapper.removeEventListener('mousemove', handleMouseMove);
//       }
//     };
//   }, [active, disableShadow, isMobile]);

//   // Обработчик плавного возврата при уходе курсора
//   const handleMouseLeave = () => {
//     const wrapper = wrapperRef.current;
//     const inner = innerRef.current;
//     if (!wrapper || !inner) return;

//     inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
//     inner.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s';
//     wrapper.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
//   };

//   return (
//     <div
//       ref={wrapperRef}
//       className="three-d-card_wrapper"
//       style={{ '--flat': disableShadow, pointerEvents: 'none' } as React.CSSProperties}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         ref={innerRef}
//         className={`three-d-card_inner ${disableShadow ? 'three-d-card_inner--flat' : ''}`}
//         style={{ pointerEvents: 'auto' }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }


interface ThreeDCardProps {
  children: React.ReactNode;
  active?: boolean;
  disableShadow?: boolean;
  hoverOnly?: boolean; // true = вращаем только при hover
}

export default function ThreeDCard({
  children,
  active = false,
  disableShadow,
  hoverOnly = false
}: ThreeDCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner || !active) return;

    const maxRotate = 16;

    const target = { rotateX: 0, rotateY: 0 };
    const current = { rotateX: 0, rotateY: 0 };
    const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

    const handleMouseMove = (e: MouseEvent) => {
      // вращаем относительно центра экрана
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      target.rotateY = ((e.clientX - centerX) / centerX) * maxRotate;
      target.rotateX = -((e.clientY - centerY) / centerY) * maxRotate;
    };

    const animate = () => {
      current.rotateX = lerp(current.rotateX, target.rotateX, 0.1);
      current.rotateY = lerp(current.rotateY, target.rotateY, 0.1);

      inner.style.transform = `rotateX(${current.rotateX}deg) rotateY(${current.rotateY}deg)`;
      wrapper.style.transform = `perspective(900px) rotateX(${current.rotateX}deg) rotateY(${current.rotateY}deg)`;

      requestAnimationFrame(animate);
    };
    // if (!isMobile) animate();
    animate();


    // if (isMobile) return; // можно добавить скролл для мобилок

    if (hoverOnly) {
      wrapper.addEventListener('mousemove', handleMouseMove);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }


    const handleScroll = () => {
      // if (!isMobile) return;
      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.bottom < 0 || rect.top > vh) return;

      const progress = (vh - rect.top) / (vh + rect.height); // от 0 до 1
      target.rotateX = (0.5 - progress) * maxRotate * 2; // вращение по скроллу
      target.rotateY = 0; // по горизонтали не вращаем
    };

    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // стартовое вращение
    } else {
      if (hoverOnly) {
        wrapper.addEventListener('mousemove', handleMouseMove);
      } else {
        window.addEventListener('mousemove', handleMouseMove);
      }
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll);
      } else {
        if (hoverOnly) {
          wrapper.removeEventListener('mousemove', handleMouseMove);
        } else {
          window.removeEventListener('mousemove', handleMouseMove);
        }
      }
    };
  }, [active, hoverOnly, disableShadow, isMobile]);


  const handleMouseLeave = () => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    inner.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.45s';
    inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    wrapper.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={wrapperRef}
      className="three-d-card_wrapper"
      style={{ '--flat': disableShadow, pointerEvents: 'auto' } as React.CSSProperties}
      onMouseLeave={hoverOnly ? handleMouseLeave : undefined}
    >
      <div
        ref={innerRef}
        className={`three-d-card_inner ${disableShadow ? 'three-d-card_inner--flat' : ''}`}
      >
        {children}
      </div>
    </div>
  );
}
