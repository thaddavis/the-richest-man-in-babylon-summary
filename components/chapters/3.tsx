import { List } from "components/shared/List";
import { ListOfLessonsInFable3 } from "data/LessonData.ts/3";
import React from "react";
import { BsDot } from "react-icons/bs";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable3 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <div className="lesson">
        <h2>{props.title}</h2>
        <div className="section">
          <List listData={ListOfLessonsInFable3} />
        </div>
      </div>
    </LessonStyled>
  );
});

Fable3.displayName = "Fable3";

export { Fable3 };
