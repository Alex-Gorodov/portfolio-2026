import { useState } from "react";
import BurgerButton from "../../Components/Buttons/BurgerButton";
import { useResponsive } from "../../Context/responsive.context";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const { isMobile } = useResponsive();
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <header className="header">
      <span className="header__name">Alex Gorodov</span>
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
