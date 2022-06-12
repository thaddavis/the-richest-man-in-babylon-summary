import styled from "styled-components";

interface StyledProps {
  width: string;
}

export const LessonStyled = styled.div`
  .lesson {
    height: auto;
    min-height: 50vh;

    margin: 2em;
    padding: 2em 1em;

    cursor: pointer;
    box-shadow: 0 0 20px 8px #d0d0d0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2em;
      margin-bottom: 0.5em;
    }

    h2 {
      font-size: 1.6em;
      margin-bottom: 0.4em;
    }

    .section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 0.5em;
    }

    ol {
      display: flex;
      flex-direction: column;
      justify-content: flex;
      align-items: flex-start;
      list-style-type: upper-roman;

      li {
        line-height: 1.1;
      }
    }

    p {
      line-height: 2;
      font-size: 8vmin;
      text-align: center;

      @media only screen and (min-width: ${(props) =>
          props.theme.breakpoints.md}) {
        font-size: 1.4em;
      }
    }
  }
`;
