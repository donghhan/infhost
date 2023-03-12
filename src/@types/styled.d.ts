import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      prompt: string;
      lato: string;
    };
    colors: {
      black: string;
      gray: string;
      white: string;
      blue: string;
      orange: string;
      deepPurple: string;
      purple: string;
      lightPurple: string;
      lightgray: string;
      ghostWhite: string;
    };
  }
}
