import { FC } from "react";
import { css } from "@emotion/react";
import { ISearchCity } from "../types/SearchCity";
import { observer } from "mobx-react-lite";
import { cityStore } from "../store/cityStore";

interface IList2Props {
  cities: ISearchCity;
  setSearchFocus: (isFocused: boolean) => void
}


const ListV2: FC<IList2Props> = observer(({ cities, setSearchFocus }) => {

    const handleDivClick = (city: string) => {
       cityStore.setCity(city)
       setSearchFocus(false)
    }

    return (
    <div
      css={css`
        margin: 10px 0;
        cursor:pointer;
        padding:5px 5px;
        box-sizing:border-box;
        border-radius:5px;
        font-family:montE;
        &:hover{
        background-color:#303030;
        }
      `}
      onClick={() => handleDivClick(cities.name)}
    >
      {cities.name}, {cities.country}
    </div>
  );
});

export default ListV2;
