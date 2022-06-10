import { List } from "components/shared/List";
import { ListOfLessonsInFable5 } from "data/LessonData.ts/5";
import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable5({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <div className="section">
        <List listData={ListOfLessonsInFable5} />
      </div>
    </LessonStyled>
  );
}
