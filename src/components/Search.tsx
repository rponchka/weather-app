import { FC, useState } from "react";
import { css } from "@emotion/react";
import { cityStore } from "../store/cityStore";
import { observer } from "mobx-react-lite";
import { searchCity } from "../store/SearchCity";
import ResultField from "./ResultField";

const Search: FC = observer(() => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    searchCity.fetchCity(event.target.value); 
  };

  const handleButtonClick = () => {
    cityStore.setCity(inputValue); 
  };

  const inputStyles = css`
    width: 300px;
    height: 30px;
    border: none;
    padding: 0 0 0 15px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: var(--box-bg-color);
    outline: none;
    color: var(--font-color);
    font-family: var(--light-font);
  `;

  return (
    <div css={css`position: relative;`}>
      <input
        css={inputStyles}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        placeholder="Enter city"
      />
      <button
        css={css`
          background-color: #0466c8;
          color: #ececec;
          border: none;
          padding: 7px 10px;
          margin-top: 10px;
          border-radius: 5px;
          margin-left: 5px;
          cursor: pointer;
          font-family: montE;
          &:hover {
            opacity: 0.9;
          }
        `}
        onClick={handleButtonClick}
      >
        Set City
      </button>
      {isFocused && searchCity.cityArray && searchCity.cityArray.length > 0 && (
        <ResultField data={searchCity.cityArray} setFocus={setIsFocused} />
      )}
    </div>
  );
});

export default Search;
