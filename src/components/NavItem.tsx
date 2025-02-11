import { css } from "@emotion/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface INavItemProps {
  option: string;
  route: string;
}

const NavItem: FC<INavItemProps> = ({ option, route }) => {
  const navItemStyles = css`
    font-family: montE;
    color: var(--secondary-color);
    font-weight: 800;
    font-size: 20px;
    &:hover {
      color: var(--primery-color);
    }
  `;

  return (
    <Link
      to={route}
      css={css`text-decoration: none;`}
    >
      <div css={navItemStyles}>{option}</div>
    </Link>
  );
};

export default NavItem;
