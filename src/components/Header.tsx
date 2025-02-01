import { css } from "@emotion/react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header
      css={css`
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        padding: 0 280px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom:1px solid #0353A4;
      `}
    >
      <Logo />
      <Navigation />
      <div></div>
    </header>
  );
};

export default Header;
