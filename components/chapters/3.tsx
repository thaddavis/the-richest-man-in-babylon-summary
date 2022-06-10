import { List } from "components/shared/List";
import { ListOfLessonsInFable3 } from "data/LessonData.ts/3";
import React from "react";
import { BsDot } from "react-icons/bs";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
}

export function Fable3({ title }: P) {
  return (
    <LessonStyled>
      <h2>{title}</h2>
      <div className="section">
        <List listData={ListOfLessonsInFable3} />
      </div>
    </LessonStyled>
  );
}
