import { List } from "components/shared/List";
import { ListOfLessonsInFable2 } from "data/LessonData.ts/2";
import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable2({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <div className="section">
        <List listData={ListOfLessonsInFable2} />
      </div>
    </LessonStyled>
  );
}
