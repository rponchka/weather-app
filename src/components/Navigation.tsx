import { css } from "@emotion/react";
import NavInem from "./NavItem";
import Circle from "./ui/сircle";

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
      <NavInem option="Today's Weather"  route="/"/>
      <Circle />
      <NavInem option="Weekly Weather"  route="/forecast"/>
      <Circle />
      <NavInem option="Wather News"  route="/weaher-news"/>
    </nav>
  );
};

export default Navigation;
