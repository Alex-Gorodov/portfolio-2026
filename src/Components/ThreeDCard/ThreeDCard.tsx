import React, { useEffect, useRef } from 'react'
import { useResponsive } from '../../Context/responsive.context';

interface ThreeDCardProps {
  children: React.ReactNode;
}

export default function ThreeDCard({children}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
    const { isMobile } = useResponsive();

    useEffect(() => {
      const card = cardRef.current;
      const inner = card?.querySelector(".three-d-card_inner") as HTMLDivElement;
      if (!card || !inner) return;

      const maxRotate = 16;
      const maxXRotate = 45;

      const handleMouseMove = (e: MouseEvent) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const rotateY = ((e.clientX - centerX) / centerX) * maxRotate;
        const rotateX = -((e.clientY - centerY) / centerY) * maxRotate;

        inner.style.transform = `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;

        card.style.transform = `
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;

        const shadowX = rotateY * 2;
        const shadowY = rotateX * -2;

        inner.style.boxShadow = `
          ${shadowX}px ${shadowY + 30}px 60px rgba(0,0,0,0.35)
        `;

      };

        const handleScroll = () => {
          const rect = card.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (rect.bottom < 0 || rect.top > viewportHeight) return;

          const totalScroll = viewportHeight + rect.height;
          const scrolled = viewportHeight - rect.top;

          const progress = Math.max(0, Math.min(scrolled / totalScroll, 1));

          const rotateX = maxXRotate - progress * maxXRotate * 2;

          card.style.transform = `
            perspective(900px)
            rotateX(${rotateX}deg)
          `;
        };

      if (isMobile) {
        window.addEventListener("scroll", handleScroll);

        handleScroll();
      } else {
        window.addEventListener("mousemove", handleMouseMove);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);

      };
    }, [isMobile]);
  return (
    <div ref={cardRef} className="three-d-card_wrapper">
      <div className="three-d-card_inner">
        {children}
      </div>
    </div>
  )
}
