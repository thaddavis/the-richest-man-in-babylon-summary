// theme.ts
import { DefaultTheme, ThemeProvider } from "styled-components";

export const defaultTheme: DefaultTheme = {
  breakpoints: {
    md: "480px",
    lg: "768px",
    xl: "1024px",
    xxl: "1200px",
  },
  colors: {
    black: "black",
    white: "white",
    red: "red",
    greys: ["", "", ""],
  },
};

// const Theme = ({ children }: { children: React.ReactNode }) => (
//   <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
// );

// export default Theme;
