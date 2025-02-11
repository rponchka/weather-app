import { css } from "@emotion/react";

const Logo = () => {
  const logoStyles = css`
    font-family: var(--bold-font);
    color: var(--secondary-color);
    font-size: 35px;
  `;
  return <div css={logoStyles}>CLIMATICA</div>;
};

export default Logo;
