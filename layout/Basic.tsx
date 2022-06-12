import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

import reset from "styled-reset";
import { defaultTheme } from "styled/Theme";

export const GlobalStyle = createGlobalStyle`
  // this is the shared style
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  // anything else you would like to include
  ${reset}

  body {
    font-family: 'Arvo', Helvetica, Arial, sans-serif;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </>
  );
};

export default BasicLayout;
