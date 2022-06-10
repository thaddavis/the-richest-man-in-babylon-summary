import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable10({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <p>
        Take pride and pleasure in the work that you do, no matter what it is.
      </p>
    </LessonStyled>
  );
}
