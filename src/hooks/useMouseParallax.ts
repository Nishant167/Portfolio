import { useEffect, useState } from "react";

export function useMouseParallax(strength = 0.03) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = (e.clientX - window.innerWidth / 2) * strength;
      const y = (e.clientY - window.innerHeight / 2) * strength;
      setOffset({ x, y });
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [strength]);

  return offset;
}
