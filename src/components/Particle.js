import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "transparent",
        },
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#9b59b6", // soft purple to match theme
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#a66bff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },
      }}
    />
  );
}

export default Particle;
