import { List } from "components/shared/List";
import { ListOfLessonsInFable2 } from "data/LessonData.ts/2";
import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable2 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <div className="lesson">
        <h2>{props.title}</h2>
        <div className="section">
          <List listData={ListOfLessonsInFable2} />
        </div>
      </div>
    </LessonStyled>
  );
});

Fable2.displayName = "Fable2";

export { Fable2 };
