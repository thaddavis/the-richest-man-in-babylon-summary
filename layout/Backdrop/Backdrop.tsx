import React from "react";
import styled from "styled-components";

interface StyledProps {
  isOpen: boolean;
}

const BackgroundDivWithAnimation = styled.div<Pick<StyledProps, "isOpen">>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  left: 0;

  animation: ${(props) => (props.isOpen ? "fadein" : "fadeout")} 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const BackgroundDiv = styled.div<Pick<StyledProps, "isOpen">>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 100;
  top: 0;
  left: 0;
`;

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export function Backdrop(props: Props) {
  return <BackgroundDiv onClick={props.onClick} isOpen={props.isOpen} />;
}
