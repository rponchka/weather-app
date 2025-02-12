import { css } from "@emotion/react";
import { FC } from "react";
import { IWeatherData } from "../types/WeatherTypes";

interface ICountryDate {
  data: IWeatherData | null;
}

const FavCountry: FC<ICountryDate> = ({ data }) => {
  if (!data) {
    return <div>Дані не доступні</div>;
  }

  const containerStyle = css`
    color: var(--font-color);
    background-color:var(--dark-box-bg-color);
    width: 250px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 15px;
  `;

  return (
    <div css={containerStyle}>
      <div
        css={css`font-family:var(--bold-font);`}>
        {data.location.name},{" " + data.location.country}
      </div>
      <div
        css={css`font-family:var(--light-font);`}>
        {"Погода зараз: " + data.current.temp_c + " C"}
      </div>
    </div>
  );
};

export default FavCountry;
