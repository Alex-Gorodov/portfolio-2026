import { useState } from "react";
import BurgerButton from "../../Components/Buttons/BurgerButton";
import { useResponsive } from "../../Context/responsive.context";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const { isMobile } = useResponsive();
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <span className="header_name">Alex Gorodov</span>
      <nav className="header_navigation">
        {
          isMobile &&
          <Navigation className={`header_navigation--mobile ${isMenuOpened ? 'header_navigation--mobile-opened' : ''}`}/>
        }
        {
          isMobile
          ?
          <BurgerButton onHandle={() => setMenuOpened(!isMenuOpened)}/>
          :
          <Navigation className="header"/>
        }
      </nav>
    </div>
  )
}
