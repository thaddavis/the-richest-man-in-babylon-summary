import { navOptions } from "data/navOptions";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { SideDrawerStyled } from "./SideDrawer.styled";
import { CloseButtonStyled } from "./CloseButton.styled";

import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

interface P {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  sectionRefs: MutableRefObject<Record<string, HTMLDivElement>>;
  currentSection: string | undefined;
}

export function SideDrawer({
  isOpen,
  setIsOpen,
  sectionRefs,
  currentSection,
}: P) {
  return (
    <>
      <SideDrawerStyled isOpen={isOpen}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 0.2em",
          }}
          id="nav-icon1"
        >
          <CloseButtonStyled isOpen={isOpen} onClick={() => setIsOpen(false)}>
            <span></span>
            <span></span>
            <span></span>
          </CloseButtonStyled>
        </div>
        <nav id="side-drawer">
          <ul>
            {navOptions.map((i, idx) => {
              return (
                <li
                  key={i.name}
                  className={currentSection === i.key ? "active" : ""}
                  onClick={() => {
                    setIsOpen(false);

                    const key: string = i.key;

                    gsap.to(window, {
                      duration: 2,
                      scrollTo:
                        sectionRefs.current[key].offsetTop -
                        (document.getElementById("header")
                          ? document.getElementById("header")!.clientHeight
                          : 72),
                    });
                  }}
                >
                  {i.name}
                </li>
              );
            })}
          </ul>
        </nav>
      </SideDrawerStyled>
    </>
  );
}
