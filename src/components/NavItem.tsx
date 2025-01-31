import { css } from "@emotion/react";
import { FC } from "react";

interface INavItemProps {
  option: string;
}

const NavInem: FC<INavItemProps> = ({ option }) => {
  return (
    <div
      css={css`
        font-family: montE;
        color: #0466c8;
        font-weight: 800;
        font-size: 20px;
        &:hover{
        color:#0353A4;
        }
      `}
    >
      {option}
    </div>
  );
};

export default NavInem;
