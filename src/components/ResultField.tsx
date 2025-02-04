import { FC } from "react";
import { css } from "@emotion/react";
import ListV2 from "./ListV2";
import { ISearchCity } from "../types/SearchCity";

interface IReasultFieldProps {
  data: ISearchCity[] | [];
  setFocus: (isFocus: boolean) => void;
}

const ResultField: FC<IReasultFieldProps> = ({ data, setFocus }) => {
  return (
    <div
      css={css`
        color: white;
        position: absolute;
        top: 50px;
        background-color: #242424;
        width: 300px;
        border-radius: 5px;
        max-height: 250px;
        box-sizing: border-box;
        padding: 15px;
      `}
    >
      {data.length === 0 ? (
        <p
          css={css`
            margin: 10px 0;
            cursor: pointer;
            padding: 5px 5px;
            box-sizing: border-box;
            border-radius: 5px;
            font-family: montE;
            &:hover {
              background-color: #303030;
            }
          `}
        >
          No cities found
        </p>
      ) : (
        data.map((city: ISearchCity, index) => (
          <ListV2 key={index} cities={city} setSearchFocus={setFocus} />
        ))
      )}
    </div>
  );
};

export default ResultField;
