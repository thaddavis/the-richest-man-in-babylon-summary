// styled-components.d.ts

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: Record<string, string>;
    colors: Record<string, string | string[]>;
  }
}
