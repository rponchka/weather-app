import { FC } from "react";
import { css } from "@emotion/react";

const WeatherNewsPage: FC = () => {
  return (
    <div css={css`
        width: 100%;
        height: 873px;
        padding: 0 280px;
        padding-top: 50px;
        box-sizing: border-box;
        color:#ececec;
      `}>
        <h1 css={css`font-family:montH;`}>Weather News</h1>
        <p css={css`font-family:montE;`}>Coming soon...</p>
    </div>
  );
};

export default WeatherNewsPage;
