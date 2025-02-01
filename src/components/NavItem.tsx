import { css } from "@emotion/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface INavItemProps {
  option: string;
  route:string
}

const NavInem: FC<INavItemProps> = ({ option, route }) => {
  return (
    <Link to={route} css={css`text-decoration:none;`}>
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
    </Link>
  );
};

export default NavInem;
