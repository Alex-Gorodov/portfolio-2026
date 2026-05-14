interface NavigationProps {
  className: string;
}

export default function Navigation({ className }: NavigationProps) {
  return (
    <div className={`navigation__menu ${className}`}>
      <a className="navigation__link" href="#about">
        <p className={`navigation__item navigation__item--${className}`}>About</p>
      </a>
      <a className="navigation__link" href="#projects">
        <p className={`navigation__item navigation__item--${className}`}>Projects</p>
      </a>
      <a className="navigation__link" href="#contact">
        <p className={`navigation__item navigation__item--${className}`}>Contact</p>
      </a>
    </div>
  )
}
