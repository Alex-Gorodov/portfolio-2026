interface NavigationProps {
  className: string;
}

export default function Navigation({ className }: NavigationProps) {
  return (
    <div className={`navigation_menu ${className}`}>
      <a className="navigation_link" href="#about">
        <p className={`navigation_item navigation_item--${className}`}>About</p>
      </a>
      {/* <a className="navigation_link" href="#experience">
        <p className={`navigation_item navigation_item--${className}`}>Experience</p>
      </a> */}
      <a className="navigation_link" href="#projects">
        <p className={`navigation_item navigation_item--${className}`}>Projects</p>
      </a>
      <a className="navigation_link" href="#contact">
        <p className={`navigation_item navigation_item--${className}`}>Contact</p>
      </a>
    </div>
  )
}
