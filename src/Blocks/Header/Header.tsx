import { useState } from "react";
import BurgerButton from "../../Components/Buttons/BurgerButton";
import { useResponsive } from "../../Context/responsive.context";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const { isMobile } = useResponsive();
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [isNameHovered, setNameHovered] = useState(false);
  const name = "Alex Gorodov";

  return (
    <header className="header">
      <span
        className="header__name"
        onMouseEnter={() => setNameHovered(true)}
        onMouseLeave={() => setNameHovered(false)}
      >
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className={`header__letter ${
              isNameHovered ? "header__letter--hovered" : ""
            }`}
            style={{
              transitionDelay: `${index * 0.02}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
      <nav className="header__navigation">
        {
          isMobile &&
          <Navigation className={`header__navigation--mobile ${isMenuOpened ? 'header__navigation--mobile-opened' : ''}`}/>
        }
        {
          isMobile
          ?
          <BurgerButton onHandle={() => setMenuOpened(!isMenuOpened)}/>
          :
          <Navigation className="header"/>
        }
      </nav>
    </header>
  )
}
