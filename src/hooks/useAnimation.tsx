import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useAnimation = () => {
  const animateIntro = () => {
    useGSAP(() => {
      gsap.from("#welcome-section", {
        duration: 2.5,
        scale: 1.3,
      });

      gsap.from(".nav-content", {
        y: -100,
        duration: 2.5,
      });

      gsap.from("#site-body", {
        opacity: 0,
        duration: 2.5,
        delay: 0.5,
      });
    });
  };
  return animateIntro;
};
