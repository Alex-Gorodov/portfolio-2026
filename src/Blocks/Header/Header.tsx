import BurgerButton from "../../Components/Buttons/BurgerButton";
import { useResponsive } from "../../Context/responsive.context";

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
          <div className="header_navigation-menu">
            <p className="header_navigation-item">About</p>
            <p className="header_navigation-item">Experience</p>
            <p className="header_navigation-item">Projects</p>
            <p className="header_navigation-item">Contact</p>
          </div>
        }
      </nav>
    </div>
  )
}
