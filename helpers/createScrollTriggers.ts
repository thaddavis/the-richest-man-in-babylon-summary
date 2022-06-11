import { MutableRefObject } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function createScrollTriggers(
  refs: MutableRefObject<Record<string, HTMLDivElement>>,
  currentSection: string | undefined,
  setCurrentSection: React.Dispatch<React.SetStateAction<string | undefined>>
) {
  for (let i in refs.current) {
    gsap.from(refs.current[i], {
      scrollTrigger: {
        start: "top 50%",
        end: "bottom center",
        trigger: refs.current[i],
        onEnter: (i: any) => {
          console.log(i.vars.trigger.id);
          setCurrentSection(i.vars.trigger.id);
        },
        onLeave(i: any) {},
        onEnterBack(i: any) {
          setCurrentSection(i.vars.trigger.id);
        },
        onLeaveBack(i: any) {},
      },
    });
  }
}
