import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
}

const Fable1 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled ref={ref}>
      <h2>{props.title}</h2>
      <p>Seek the counsel of the wise and rich.</p>
    </LessonStyled>
  );
});

Fable1.displayName = "Fable1";

export { Fable1 };

// export function Fable1({ title }: P) {
//   return (
//     <LessonStyled>
//       <h2>{title}</h2>
//       <p>Seek the counsel of the wise and rich.</p>
//     </LessonStyled>
//   );
// }
