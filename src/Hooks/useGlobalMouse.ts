import { useEffect, useRef } from "react";

type Vec2 = { x: number; y: number };

export function useGlobalMouse() {
  const target = useRef<Vec2>({ x: 0, y: 0 });
  const current = useRef<Vec2>({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return { target, current };
}
