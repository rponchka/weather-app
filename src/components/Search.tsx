import { FC, useState } from "react";
import { css } from "@emotion/react";
import { cityStore } from "../store/cityStore"; 
import { observer } from "mobx-react-lite";

const Search: FC = observer(() => {
    const [inputValue, setInputValue] = useState<string>(cityStore.city);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value); 
    };
  
    const handleButtonClick = () => {
      cityStore.setCity(inputValue);  // Зміна cityStore
    };
  
    return (
      <div>
        <input
          css={css`
            width: 300px;
            height: 30px;
            border: none;
            padding: 0 0 0 15px;
            box-sizing: border-box;
            border-radius: 5px;
            background-color: #242424;
            outline: none;
            color: #ececec;
            font-family: montE;
          `}
          type="text"
          value={inputValue}
          onChange={handleChange}
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
            margin-left:5px;
            cursor: pointer;
            font-family: montE;
            &:hover {
              opacity:0.9;
            }
          `}
          onClick={handleButtonClick}
        >
          Set City
        </button>
      </div>
    );
  });
  
  export default Search;
  
