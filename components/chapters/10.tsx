import React from "react";
import { LessonStyled } from "styled/Lesson.styled";

interface P {
  title: string;
  ref: React.Ref<HTMLElement>;
  id: string;
}

const Fable10 = React.forwardRef<HTMLDivElement, P>((props, ref) => {
  return (
    <LessonStyled id={props.id} ref={ref}>
      <h2>{props.title}</h2>
      <p>
        Take pride and pleasure in the work that you do, no matter what it is.
      </p>
    </LessonStyled>
  );
});

Fable10.displayName = "Fable1";

export { Fable10 };

// export function Fable10({ title }: P) {
//   return (
//     <LessonStyled>
//       <h2>{title}</h2>
//       <p>
//         Take pride and pleasure in the work that you do, no matter what it is.
//       </p>
//     </LessonStyled>
//   );
// }
