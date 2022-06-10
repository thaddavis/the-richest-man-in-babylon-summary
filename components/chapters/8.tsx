import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable8({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <p>
        You must be determined in accomplishing your life goals. Running away
        from challenges will inevitably lead to poverty and humiliation.
      </p>
    </LessonStyled>
  );
}
