import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable8 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <h2>{props.title}</h2>
      <p>
        You must be determined in accomplishing your life goals. Running away
        from challenges will inevitably lead to poverty and humiliation.
      </p>
    </LessonStyled>
  );
});

Fable8.displayName = "Fable8";

export { Fable8 };
