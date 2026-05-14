import React, { useRef, useEffect, useState } from "react";

interface ToggleProps {
  value: boolean;
  onChange: (v: boolean) => void;
  leftLabel?: React.ReactNode;
  rightLabel?: React.ReactNode;
}

export const Toggle: React.FC<ToggleProps> = ({
  value,
  onChange,
  leftLabel = "On",
  rightLabel = "Off",
}) => {
  const wrapperRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current) return;
    setWidth(wrapperRef.current.offsetWidth - 2);
  }, []);

  const half = width / 2;

  const toggle = () => {
    onChange(!value);
  };

  return (
    <button
      ref={wrapperRef}
      className="toggle"
      onClick={toggle}
      type="button"
    >
      <div
        className="toggle__slider"
        style={{
          width: half - 6,
          transform: `translateX(${value ? 0 : half}px)`,
        }}
      />

      <div className="toggle__item">
        <span className={`toggle__text ${value ? "active" : ""}`}>
          {leftLabel}
        </span>
      </div>

      <div className="toggle__item">
        <span className={`toggle__text ${!value ? "active" : ""}`}>
          {rightLabel}
        </span>
      </div>
    </button>
  );
};
