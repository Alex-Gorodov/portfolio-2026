import React, { useEffect, useRef } from 'react';
import { useResponsive } from '../../Context/responsive.context';
interface ThreeDCardProps {
  children: React.ReactNode;
  active?: boolean;
  disableShadow?: boolean;
  hoverOnly?: boolean;
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
    animate();

    if (hoverOnly) {
      wrapper.addEventListener('mousemove', handleMouseMove);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }


    const handleScroll = () => {

      const rect = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.bottom < 0 || rect.top > vh) return;

      const progress = (vh - rect.top) / (vh + rect.height);
      target.rotateX = (0.5 - progress) * maxRotate * 2;
      target.rotateY = 0;
    };

    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
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
