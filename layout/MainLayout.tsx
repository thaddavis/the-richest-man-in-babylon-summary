import React, { MutableRefObject, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";

import { SideDrawer } from "./SideDrawer/SideDrawer";
import { MenuButton, MainLayoutStyled, LogoButton } from "./MainLayout.styled";
import { Backdrop } from "layout/Backdrop/Backdrop";
import { useMountTransition } from "hooks/useMountTransition";

interface P {
  children: React.ReactNode;
  sectionRefs: MutableRefObject<Record<number, HTMLDivElement>>;
  currentSection: string | undefined;
}

export const MainLayout = (props: P) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasTransitionedIn = useMountTransition(isOpen, 1000);
  const { sectionRefs, currentSection } = props;

  return (
    <MainLayoutStyled>
      <section id="side-drawer">
        <SideDrawer
          currentSection={currentSection}
          sectionRefs={sectionRefs}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        {/* {(hasTransitionedIn || isOpen) && (
          <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
        )} */}
        {isOpen && (
          <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
        )}
      </section>

      <header id="header">
        <MenuButton
          role={"button"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <AiOutlineMenu />
        </MenuButton>

        <LogoButton role={"button"} onClick={() => {}}>
          CMD
        </LogoButton>
      </header>

      {props.children}

      <footer>
        <span
          style={{
            display: "inline",
          }}
        >
          Summarized with&nbsp;
          <BsSuitHeart />
          &nbsp;by CMD Labs
        </span>
      </footer>
    </MainLayoutStyled>
  );
};
