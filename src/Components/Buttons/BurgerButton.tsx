import { useState } from 'react';

interface BurgerButtonProps {
  onHandle: () => void;
}

export default function BurgerButton({onHandle}: BurgerButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const handleButton = () => {
    onHandle();
    setIsActive(!isActive);
  }

  return (
    <button className="burger-button_wrapper" onClick={handleButton}>
      <span className={`burger-button ${isActive ? 'burger-button--active' : ''}`}></span>
    </button>
  )
}
