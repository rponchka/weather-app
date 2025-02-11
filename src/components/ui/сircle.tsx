import { css } from "@emotion/react";

const Circle = () => {
  const circleStyle = css`
    width: 5px;
    height: 5px;
    background-color:var(--secondary-color);
    border-radius: 100%;
  `;

  return <div css={circleStyle}></div>;
};

export default Circle;
