import { css } from "@emotion/core";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    color: #1d1e22;
    background: #fcfdff;
    background-image: linear-gradient(120deg, #fcfdff 0%, #fcfcfc 100%);
    font-family: "Open Sans", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Bitter", sans-serif;
    font-size: 3.6rem;
  }
  p {
    font-size: 1.6rem;
  }
  a {
    box-shadow: inset 0 -2px 0 0 #fff, inset 0 -3px 0 0 #000;
    color: #000;
    text-decoration: none;
    text-shadow: 1px 1px 0 #fff, -1px 1px 0 #fff, 2px 0 0 #fff, -2px 0 0 #fff;
  }
`;
