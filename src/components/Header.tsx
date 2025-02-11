import { css } from "@emotion/react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => {
  const headerStyle = css`
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding: 0 280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--primery-color);
  `;

  return (
    <header css={headerStyle}>
      <Logo />
      <Navigation />
      <Search />
    </header>
  );
};

export default Header;
