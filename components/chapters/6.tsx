import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable6({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <p>
        It better to air on the side of caution when investing your money. A low
        risk investment with a guaranteed return is the best way to avoid
        losses.
      </p>
    </LessonStyled>
  );
}
