import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable9 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <div className="lesson">
        <h2>{props.title}</h2>
        <p>
          If you have debts then allocate at least 20% of your earnings towards
          paying them.
        </p>
      </div>
    </LessonStyled>
  );
});

Fable9.displayName = "Fable9";

export { Fable9 };
