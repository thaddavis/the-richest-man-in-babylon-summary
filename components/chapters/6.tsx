import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
}

const Fable6 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled ref={ref}>
      <h2>{props.title}</h2>
      <p>
        It better to air on the side of caution when investing your money. A low
        risk investment with a guaranteed return is the best way to avoid
        losses.
      </p>
    </LessonStyled>
  );
});

Fable6.displayName = "Fable6";

export { Fable6 };
