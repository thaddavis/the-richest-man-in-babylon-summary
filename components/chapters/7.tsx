import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable7({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <p>
        As you gain wealth, you must invest in protecting it from those who wish
        to take it. Protect it with security, insurance, and dependable
        investments.
      </p>
    </LessonStyled>
  );
}
