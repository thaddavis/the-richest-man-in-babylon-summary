import React, { useState } from "react";
import styled from "styled-components";

import { AiOutlineMenu } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";

import { SideDrawer } from "./SideDrawer/SideDrawer";
import { Button, MainLayoutStyled } from "./MainLayout.styled";
import { Backdrop } from "./Backdrop/Backdrop";
import { useMountTransition } from "hooks/useMountTransition";

interface P {
  children: React.ReactNode;
}

export const MainLayout = (props: P) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasTransitionedIn = useMountTransition(isOpen, 1000);

  return (
    <MainLayoutStyled>
      <SideDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      {(hasTransitionedIn || isOpen) && (
        <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />
      )}
      <header>
        <Button
          role={"button"}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <AiOutlineMenu />
        </Button>
      </header>

      <div>{props.children}</div>

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
