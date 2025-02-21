import { FC } from "react";
import { css } from "@emotion/react";
import { IWeatherData } from "../types/WeatherTypes";
import { observer } from "mobx-react-lite";

interface ICurrentWeatherProps {
  data: IWeatherData | null;
}

const CurrentWeather: FC<ICurrentWeatherProps> = observer(({ data }) => {

  if (data === null) {
    return <div>Loading</div>;
  }

  const containerStyle = css`
  background-color:var(--dark-box-bg-color);
  width: 750px;
  height: 350px;
  border-radius: 25px;
  padding: 25px;
  box-sizing: border-box;
  color:var(--font-color);
  font-family:var(--light-font);
`;

const listStyle = css`font-size:17px; margin:5px 0;`;

  return (
    <div
      css={containerStyle}
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
      <div css={listStyle}>Хмарність: {data.current.cloud}%</div>
      <div css={listStyle}>Температура: {data.current.temp_c}C</div>
      <div css={listStyle}>Відчувається як: {data.current.feelslike_c}C</div>
      <div css={listStyle}>Вологість: {data.current.humidity}</div>
      <div css={listStyle}>Напрямок вітру: {data.current.wind_dir}</div>
      <div css={listStyle}>Кількість опадів: {data.current.precip_mm}mm</div>
      <div css={listStyle}>Швидкість вітру: {data.current.wind_kph}kph</div>
    </div>
  );
})

export default CurrentWeather;
