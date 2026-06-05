import React, { useEffect, useRef, useState } from 'react';
import { useResponsive } from '../../Context/responsive.context';

interface ThreeDCardProps {
  children: React.ReactNode;
  active?: boolean;
  disableShadow?: boolean;
  hoverOnly?: boolean;
}

export default function ThreeDCard({
  children,
  active = true,
  disableShadow,
  hoverOnly = false
}: ThreeDCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsive();

  const [isVisible, setIsVisible] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(wrapper);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  const handleMouseLeave = () => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
    wrapper.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  useEffect(() => {
    if (isMobile) {
      handleMouseLeave();
    }
  }, [isMobile]);

  // Handles the entry animation safely
  useEffect(() => {
    if (!isVisible) return;

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const wrapAnim = wrapper.animate(
      [
        { opacity: 0, transform: 'perspective(900px) translateY(40px) scale(0.96)' },
        { opacity: 1, transform: 'perspective(900px) translateY(0px) scale(1)' }
      ],
      { duration: 900, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
    );

    const innerAnim = inner.animate(
      [
        { opacity: 0, transform: 'translateZ(-40px)' },
        { opacity: 1, transform: 'translateZ(0px)' }
      ],
      { duration: 1000, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
    );

    // FIX: Remove the animation override locks once completed
    wrapAnim.onfinish = () => {
      if (typeof wrapAnim.commitStyles === 'function') {
        wrapAnim.commitStyles(); // Saves the final opacity/transform to inline style
        innerAnim.commitStyles();
      } else {
        // Fallback for older environments
        wrapper.style.opacity = '1';
        wrapper.style.transform = 'perspective(900px) translateY(0px) scale(1)';
        inner.style.opacity = '1';
        inner.style.transform = 'translateZ(0px)';
      }

      wrapAnim.cancel();  // Removes the Web Animation layer lock
      innerAnim.cancel(); // Removes the Web Animation layer lock
      setAnimationDone(true);
    };
  }, [isVisible]);

  // Handles the 3D mouse rotation tracking
  useEffect(() => {
    if (!active || isMobile || !animationDone) return;

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    const maxRotate = 15;
    let rafId: number;

    const target = { rotateX: 0, rotateY: 0 };
    const current = { rotateX: 0, rotateY: 0 };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const handleMouseMove = (e: MouseEvent) => {
      let cx = window.innerWidth / 2;
      let cy = window.innerHeight / 2;

      if (hoverOnly) {
        const rect = wrapper.getBoundingClientRect();
        cx = rect.left + rect.width / 2;
        cy = rect.top + rect.height / 2;

        target.rotateY = ((e.clientX - cx) / (rect.width / 2)) * maxRotate;
        target.rotateX = -((e.clientY - cy) / (rect.height / 2)) * maxRotate;
      } else {
        target.rotateY = ((e.clientX - cx) / cx) * maxRotate;
        target.rotateX = -((e.clientY - cy) / cy) * maxRotate;
      }
    };

    const animate = () => {
      current.rotateX = lerp(current.rotateX, target.rotateX, 0.1);
      current.rotateY = lerp(current.rotateY, target.rotateY, 0.1);

      inner.style.transform = `rotateX(${current.rotateX}deg) rotateY(${current.rotateY}deg)`;
      wrapper.style.transform = `perspective(900px) rotateX(${current.rotateX}deg) rotateY(${current.rotateY}deg)`;

      rafId = requestAnimationFrame(animate);
    };

    animate();

    const targetElement = hoverOnly ? wrapper : window;
    targetElement.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      cancelAnimationFrame(rafId);
      targetElement.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, [active, hoverOnly, isMobile, animationDone]);

  return (
    <div
      ref={wrapperRef}
      className="three-d-card__wrapper"
      style={{ '--flat': disableShadow, pointerEvents: 'auto' } as React.CSSProperties}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={innerRef}
        className={`three-d-card__inner ${disableShadow ? 'three-d-card__inner--flat' : ''}`}
      >
        {children}
      </div>
    </div>
  );
}
