import styled from "styled-components";

export const MainLayoutStyled = styled.div`
  header {
    display: flex;
    flex: 1;
    padding: 1em 0.4em;
    border-bottom: 1px solid #eaeaea;
    justify-content: flex-end;
    align-items: center;
  }

  main {
    margin: 0 auto;
    min-height: 100vh;
    padding: 2em 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: ${(props) =>
        props.theme.breakpoints.lg}) {
      max-width: ${(props) => props.theme.breakpoints.lg};
    }
  }

  footer {
    display: flex;
    flex: 1;
    padding: 2em;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;

    text-align: center;
  }
`;

export const Button = styled.button`
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 0px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  background-color: white;

  width: 40px;
  height: 40px;

  svg {
    width: 20px;
    height: 20px;
  }

  :hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }

  :disabled {
    background-color: #fafbfc;
    border-color: rgba(27, 31, 35, 0.15);
    color: #959da5;
    cursor: default;
  }

  :active {
    background-color: #edeff2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }

  :focus {
    outline: 1px transparent;
  }

  :before {
    display: none;
  }

  :-webkit-details-marker {
    display: none;
  }
`;
