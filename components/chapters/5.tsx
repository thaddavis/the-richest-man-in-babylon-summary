import { List } from "components/shared/List";
import { ListOfLessonsInFable5 } from "data/LessonData.ts/5";
import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
}

const Fable5 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled ref={ref}>
      <h2>{props.title}</h2>
      <div className="section">
        <List listData={ListOfLessonsInFable5} />
      </div>
    </LessonStyled>
  );
});

Fable5.displayName = "Fable5";

export { Fable5 };
