import React from "react";

const TechBackground = ({ showGlow = true }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {showGlow && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_30%)]" />
      )}
      <div className="tech-circuit-mesh" />
      <div className="tech-scan-beam" />
      <div className="tech-data-stream" />
      <div className="tech-hud-corners" />
    </div>
  );
};

export default TechBackground;
