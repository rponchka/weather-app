import { FC } from "react";
import { css } from "@emotion/react";

const WeatherNewsPage: FC = () => {

    const stubStyle = css`
    width: var(--page-width);
    height: var(--page-height);
    padding: var(--page-padding);
    padding-top: 50px;
    box-sizing: border-box;
    color:#ececec;
  `
  return (
    <div css={stubStyle}>
        <h1 css={css`font-family:var(--bold-font);`}>Weather News</h1>
        <p css={css`font-family:var(--light-font);`}>Coming soon...</p>
    </div>
  );
};

export default WeatherNewsPage;
