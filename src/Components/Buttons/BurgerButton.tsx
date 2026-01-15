import { useState } from 'react';

export default function BurgerButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button className="burger-button__wrapper" onClick={() => setIsActive(!isActive)}>
      <span className={`burger-button ${isActive ? 'burger-button--active' : ''}`}></span>
    </button>
  )
}
