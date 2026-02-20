import React, { useMemo } from "react";

const FloatingBits = () => {
  const bits = useMemo(() => {
    const total = 20;
    return Array.from({ length: total }, (_, i) => {
      const size = 10 + Math.floor(Math.random() * 22);
      const left = Math.floor(Math.random() * 100);
      const delay = (Math.random() * 8).toFixed(2);
      const duration = (12 + Math.random() * 14).toFixed(2);
      const drift = (-40 + Math.random() * 80).toFixed(0);
      const opacity = (0.16 + Math.random() * 0.25).toFixed(2);
      return {
        id: i,
        style: {
          "--bit-size": `${size}px`,
          "--bit-left": `${left}%`,
          "--bit-delay": `${delay}s`,
          "--bit-duration": `${duration}s`,
          "--bit-drift": `${drift}px`,
          "--bit-opacity": opacity,
        },
      };
    });
  }, []);

  return (
    <div className="floating-bits" aria-hidden="true">
      {bits.map((bit) => (
        <span key={bit.id} className="floating-bit" style={bit.style} />
      ))}
    </div>
  );
};

export default FloatingBits;
