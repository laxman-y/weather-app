import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const AnimatedBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: {
            value: 90,
            density: { enable: true, area: 700 },
          },
          color: { value: "#FFD700" }, // yellow-like glow
          shape: { type: "star" },
          opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 5,
            random: true,
          },
          links: {
            enable: true,
            distance: 200,
            color: "#FFD700",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract", opacity: 0.1 },
            resize: true,
          },
          modes: {
            attract: { distance: 100, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default AnimatedBackground;
