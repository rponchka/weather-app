import { css } from "@emotion/react";
import NavInem from "./NavItem";
import Circle from "./ui/circle";

const Navigation = () => {
  return (
    <nav
      css={css`
        width: 550px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
      `}
    >
      <NavInem option="Today's Weather" />
      <Circle />
      <NavInem option="Weekly Weather" />
      <Circle />
      <NavInem option="Wather News" />
    </nav>
  );
};

export default Navigation;
