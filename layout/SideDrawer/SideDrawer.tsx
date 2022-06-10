import { navOptions } from "data/navOptions";
import { Button } from "layout/MainLayout.styled";
import { FaTimes } from "react-icons/fa";
import React, { Dispatch, SetStateAction } from "react";
import { SideDrawerStyled } from "./SideDrawer.styled";
import { CloseButtonStyled } from "./CloseButton.styled";

interface P {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function SideDrawer({ isOpen, setIsOpen }: P) {
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
        <ul className="nav-options">
          {navOptions.map((i, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  console.log("___ --- ___");
                }}
              >
                {i.name}
              </li>
            );
          })}
        </ul>
      </SideDrawerStyled>
    </>
  );
}
