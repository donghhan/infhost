import { css, CSSObject, SimpleInterpolation } from "styled-components";

type deviceType =
  | "desktop"
  | "laptop"
  | "tablet"
  | "mobileL"
  | "mobileM"
  | "mobileS";

const deviceSize: Record<deviceType, number> = {
  desktop: 1440,
  laptop: 1024,
  tablet: 768,
  mobileL: 425,
  mobileM: 375,
  mobileS: 300,
};

export const breakpoint = Object.entries(deviceSize).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [key]: (
        first: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
      ) => css`
        @media only screen and (min-width: ${value}px) {
          ${css(first, ...interpolations)}
        }
      `,
    };
  },
  {}
) as Record<deviceType, any>;
