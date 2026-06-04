import { useEffect, useRef, useState } from "react";
import { useResponsive } from "../../Context/responsive.context";
import { PortfolioItemT } from "../../Types/PortfolioItemT";

type PortfolioItemProps = {
  item: PortfolioItemT;
};

export function PortfolioItem({
  item,
}: PortfolioItemProps): JSX.Element {
  const { isMobile } = useResponsive();

  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`portfolio__item portfolio-item ${
        isVisible ? "portfolio-item--visible" : ""
      }`}
      key={item.id}
    >
      <a
        className="portfolio__link"
        href={item.path}
        target="__blank"
        rel="noreferrer nofollow"
      >
        <img
          className="portfolio-item__image"
          src={`${item.img}`}
          width={isMobile ? 185 : 370}
          height={isMobile ? 122 : 244}
          alt={item.name}
        />

        <span className="visually-hidden">
          go to {item.name}
        </span>
      </a>
    </div>
  );
}
