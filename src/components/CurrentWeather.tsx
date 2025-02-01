import { FC } from "react";
import { css } from "@emotion/react";
import { IWeatherData } from "../types/WeatherTypes";

interface ICurrentWeatherProps {
  data: IWeatherData | null;
}

const CurrentWeather: FC<ICurrentWeatherProps> = ({ data }) => {
  if (!data) {
    return <div>Дані не доступні</div>;
  }

  return (
    <div
      css={css`
        background-color: #060606;
        width: 750px;
        height: 350px;
        border-radius: 25px;
        padding: 25px;
        box-sizing: border-box;
        color: #ececec;
        font-family: MontE;
      `}
    >
      <div>
        <span
          css={css`
            font-family: MontH;
            font-size: 30px;
          `}
        >
          {data.location.name}
        </span>
        ,
        <span
          css={css`
            font-family: MontE;
            font-size: 25px;
            margin: 0 0 0 10px;
          `}
        >
          {data.location.country}
        </span>
      </div>

      <div
        css={css`
          font-family: montE;
          font-size:20px;
        `}
      >
        {data.current.condition.text}
      </div>
    <br />
      <div css={css`font-size:17px; margin:5px 0;`}>Cloud: {data.current.cloud}%</div>
      <div css={css`font-size:17px; margin:5px 0;`}>Temp: {data.current.temp_c}C</div>
      <div css={css`font-size:17px; margin:5px 0;`}>Feels like: {data.current.feelslike_c}C</div>
      <div css={css`font-size:17px; margin:5px 0;`}>Humidity: {data.current.humidity}</div>
      <div css={css`font-size:17px; margin:5px 0;`}>Wind direction: {data.current.wind_dir}</div>
      <div css={css`font-size:17px; margin:5px 0;`}>Rainfall amount: {data.current.precip_mm}mm</div>
      <div css={css`font-size:17px; margin:5px 0;`}>Wind speed: {data.current.wind_kph}kph</div>
    </div>
  );
};

export default CurrentWeather;
