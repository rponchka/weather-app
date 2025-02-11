import { FC } from "react";
import { css } from "@emotion/react";
import ListV2 from "./ListV2";
import { ISearchCity } from "../types/SearchCity";

interface IReasultFieldProps {
  data: ISearchCity[] | [];
  setFocus: (isFocus: boolean) => void;
}

const ResultField: FC<IReasultFieldProps> = ({ data, setFocus }) => {
  const boxStyles = css`
    color: var(--font-color);
    position: absolute;
    top: 50px;
    background-color: var(--box-bg-color);
    width: 300px;
    border-radius: 5px;
    max-height: 250px;
    box-sizing: border-box;
    padding: 15px;
    z-index: 2;
  `;

  const pStyles = css`
    margin: 10px 0;
    cursor: pointer;
    padding: 5px 5px;
    box-sizing: border-box;
    border-radius: 5px;
    font-family:var(--light-font);
  `;

  return (
    <div css={boxStyles}>
      {data.length === 0 ? (
        <p css={pStyles}>No cities found</p>
      ) : (
        data.map((city: ISearchCity, index) => (
          <ListV2 key={index} cities={city} setSearchFocus={setFocus} />
        ))
      )}
    </div>
  );
};

export default ResultField;
