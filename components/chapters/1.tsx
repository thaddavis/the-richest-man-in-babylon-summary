import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable1 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <h2>{props.title}</h2>
      <p>Seek the counsel of the wise and rich.</p>
    </LessonStyled>
  );
});

Fable1.displayName = "Fable1";

export { Fable1 };
