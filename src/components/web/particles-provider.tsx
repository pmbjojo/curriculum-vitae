"use client";

import {
  useEffect,
  // useMemo,
  // useState
} from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
// import { useTheme } from "next-themes";

const options: ISourceOptions = {
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffe0c2",
      // value: resolvedTheme === "dark" ? "#ffe0c2" : "#644a40",
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 0.1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 60,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

export function ParticlesProvider() {
  console.log("ParticlesProvider");
  // const [init, setInit] = useState(false);
  // const { resolvedTheme } = useTheme();
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      // setInit(true);
    });
  }, []);

  // const options: ISourceOptions = useMemo(
  //   () => ({
  //     fpsLimit: 120,
  //     particles: {
  //       color: {
  //         value: resolvedTheme === "dark" ? "#ffe0c2" : "#644a40",
  //       },
  //       move: {
  //         direction: MoveDirection.none,
  //         enable: true,
  //         outModes: {
  //           default: OutMode.out,
  //         },
  //         random: false,
  //         speed: 0.1,
  //         straight: false,
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //         },
  //         value: 60,
  //       },
  //       opacity: {
  //         value: 0.5,
  //       },
  //       shape: {
  //         type: "circle",
  //       },
  //       size: {
  //         value: { min: 1, max: 3 },
  //       },
  //     },
  //     detectRetina: true,
  //   }),
  //   [
  //     resolvedTheme
  //   ]
  // );

  // if (init) {
  return <Particles className="-z-10" id="tsparticles" options={options} />;
  // }
}
