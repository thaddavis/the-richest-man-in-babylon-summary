import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable1({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <p>Seek the counsel of the wise and rich.</p>
    </LessonStyled>
  );
}
