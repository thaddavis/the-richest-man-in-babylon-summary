import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable9({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <p>
        If you have debts then allocate at least 20% of your earnings towards
        paying them.
      </p>
    </LessonStyled>
  );
}
