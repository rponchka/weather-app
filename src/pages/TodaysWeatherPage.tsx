import { FC} from "react";
import { css } from "@emotion/react";
import { weatherStore } from "../store/weatherStore";
import { observer } from "mobx-react-lite";
import CurrentWeather from "../components/CurrentWeather";
import ForecastSm from "../components/ForecastSm";
import FavCountry from "../components/FavCounty";
import { useWeatherData } from "../hooks/useWeatherData";

const TodaysWeatherPage: FC = observer(() => {
  const { weather, forecast, weatherInKyiv, weatherInLondon, weatherInNewYork } = useWeatherData();

  return (
    <div
      css={css`
        width: 100%;
        height: 873px;
        padding: 0 280px;
        padding-top: 50px;
        box-sizing: border-box;
      `}
    >
      <div
        css={css`
          display: flex;
          margin-bottom: 50px;
        `}
      >
        {weatherStore.isLoading ? "loading" : <CurrentWeather data={weather} />}
        {weatherStore.isLoading ? "loading" : <ForecastSm data={forecast} />}
      </div>
      <div>
        <div
          css={css`
            font-family: montH;
            color: #ececec;
            font-size: 25px;
            margin-left: 10px;
            margin-bottom: 10px;
          `}
        >
          Weather in popular countries
        </div>
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
