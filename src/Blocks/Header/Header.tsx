import BurgerButton from "../../Components/Buttons/BurgerButton";
import { useResponsive } from "../../Context/responsive.context";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const { isMobile, device, width } = useResponsive();

  return (
    <div className="header">
      <span className="header_name">Alex Gorodov</span>
      <nav className="header_navigation">
        {
          isMobile
          ?
          <BurgerButton/>
          :
          <Navigation className="header"/>
        }
      </nav>
    </div>
  )
}
