import { css } from "@emotion/react";
import NavItem from "./NavItem";
import Circle from "./ui/сircle";

const Navigation = () => {
  const navStyles = css`
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  `;
  return (
    <nav css={navStyles}>
      <NavItem option="Today's Weather" route="/" />
      <Circle />
      <NavItem option="Weekly Weather" route="/forecast" />
      <Circle />
      <NavItem option="Weather News" route="/weather-news" />
    </nav>
  );
};

export default Navigation;
