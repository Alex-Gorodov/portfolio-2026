
import { useResponsive } from "../../Context/responsive.context";
import { PortfolioItemT } from "../../Types/PortfolioItemT";

type PortfolioItemProps = {
  item: PortfolioItemT;
}

export function PortfolioItem({item}: PortfolioItemProps): JSX.Element {
  const { isMobile } = useResponsive();

  return (
    <div className="portfolio__item portfolio-item" key={item.id}>
      <a className="portfolio__link" href={item.path} target="__blank" rel="noreferrer nofollow">
        <img className="portfolio-item__image" src={`${item.img}`} width={isMobile ? 185 : 370} height={isMobile ? 122 : 244} alt={item.name} />
        <span className="visually-hidden">go to {item.name}</span>
      </a>
    </div>
  )
}
