import { FC, useEffect } from "react";
import { css } from "@emotion/react";
import { weatherStore } from "../store/weatherStore";
import { observer } from "mobx-react-lite";
import CurrentWeather from "../components/CurrentWeather";
import ForecastSm from "../components/ForecastSm";
import FavCountry from "../components/FavCounty";
import { useWeatherData } from "../hooks/useWeatherData";
import { forecastStore } from "../store/forecastStore";
import { cityStore } from "../store/cityStore";

const TodaysWeatherPage: FC = observer(() => {
  const {
    weatherInKyiv,
    weatherInLondon,
    weatherInNewYork,
  } = useWeatherData();

    useEffect(() => {
      forecastStore.fetchWeather(cityStore.city)
      weatherStore.fetchWeather(cityStore.city)
    },[cityStore.city])

  const containerStyle = css`
    width: var(--page-width);
    height: var(--page-height);
    padding: var(--page-padding);
    padding-top: 50px;
    box-sizing: border-box;
  `;

  const titleStyles = css`
    font-family:var(--bold-font);
    color:var(--font-color);
    font-size: 25px;
    margin-left: 10px;
    margin-bottom: 10px;
  `;

  return (
    <div css={containerStyle}>
      <div
        css={css`
          display: flex;
          margin-bottom: 50px;
        `}
      >
        {weatherStore.isLoading ? "loading" : <CurrentWeather data={weatherStore.weatherData} />}
        {weatherStore.isLoading ? "loading" : <ForecastSm data={forecastStore.weatherData} />}
      </div>
      <div>
        <div css={titleStyles}>Weather in popular countries</div>
        <div
          css={css`
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          `}
        >
          <FavCountry data={weatherInKyiv} />
          <FavCountry data={weatherInLondon} />
          <FavCountry data={weatherInNewYork} />
        </div>
      </div>
    </div>
  );
});

export default TodaysWeatherPage;
