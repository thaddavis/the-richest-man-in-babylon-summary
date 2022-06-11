import { List } from "components/shared/List";
import { ListOfLessonsInFable4 } from "data/LessonData.ts/4";
import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable4 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <h2>{props.title}</h2>
      <div className="section">
        <List listData={ListOfLessonsInFable4} />
      </div>
    </LessonStyled>
  );
});

Fable4.displayName = "Fable4";

export { Fable4 };
