import { List } from "components/shared/List";
import { ListOfLessonsInFable4 } from "data/LessonData.ts/4";
import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable4({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <div className="section">
        <List listData={ListOfLessonsInFable4} />
      </div>
    </LessonStyled>
  );
}
