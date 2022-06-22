import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable6 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <div className="lesson">
        <h2>{props.title}</h2>
        <p>
          It is better to air on the side of caution when investing your money.
          A low risk investment with a guaranteed return is the best way to
          avoid losses.
        </p>
      </div>
    </LessonStyled>
  );
});

Fable6.displayName = "Fable6";

export { Fable6 };
