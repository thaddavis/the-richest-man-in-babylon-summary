import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable7 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <h2>{props.title}</h2>
      <p>
        As you gain wealth, you must invest in protecting it from those who wish
        to take it. Protect it with security, insurance, and dependable
        investments.
      </p>
    </LessonStyled>
  );
});

Fable7.displayName = "Fable7";

export { Fable7 };
