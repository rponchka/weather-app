import { css } from "@emotion/react";

export const globalStyles = css`

     @font-face {
    font-family: 'montH';
    src: url('/fonts/Mont-HeavyDEMO.otf') format('opentype');
  }

  @font-face {
    font-family: 'montE';
    src: url('/fonts/Mont-ExtraLightDEMO.otf') format('opentype');
  }

    :root{
    --bg-color:#0a0a0a;
    --primery-color: #0353a4;
    --secondary-color: #0466c8;
    --box-bg-color: #242424;
    --dark-box-bg-color:#060606;
    --bold-font:'montH';
    --light-font:montE;
    --font-color: #ececec;
    --page-height:873px;
    --page-width:100%;
    --page-padding:0 280px;
    }
`;