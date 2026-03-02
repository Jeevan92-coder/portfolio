import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 150, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#F13024", "#e68e2e", "#f5d393"] },
          links: {
            color: "#F13024",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 70,
          },
          opacity: { value: { min: 0.2, max: 0.6 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
