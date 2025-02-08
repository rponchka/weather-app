import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { weatherStore } from "../store/weatherStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { cityStore } from "../store/cityStore";
import { IWeatherData } from "../types/WeatherTypes";
import CurrentWeather from "../components/CurrentWeather";
import { forecastStore } from "../store/forecastStore";
import ForecastSm from "../components/ForecastSm";
import FavCountry from "../components/FavCounty";

const TodaysWeatherPage: FC = observer(() => {
  const [weather, setWeather] = useState<IWeatherData | null>(null);
  const [weatherInKyiv, setWeatherInKyiv] = useState<IWeatherData | null>(null);
  const [weatherInLondon, setWeatherInLondon] = useState<IWeatherData | null>(null);
  const [weatherInNewYork, setWeatherInNewYork] = useState<IWeatherData | null>(null);
  const [forecast, setForecast] = useState<any>(null);

  useEffect(() => {
    fetchWeather(cityStore.city);  
    fetchForecast();
    fetchWeatherInCity("Kyiv", setWeatherInKyiv);
    fetchWeatherInCity("London", setWeatherInLondon);
    fetchWeatherInCity("New York", setWeatherInNewYork);
  }, [cityStore.city]);  

  const fetchWeather = (city: string) => {
    weatherStore
      .fetchWeather(city)
      .then(() => {
        const weatherData = toJS(weatherStore.weatherData);
        if (weatherData) {
          setWeather(weatherData);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
      });
  };

  const fetchForecast = () => {
    forecastStore
      .fetchWeather(cityStore.city)
      .then(() => {
        const forecastData = toJS(forecastStore.weatherData);
        if (forecastData) {
          setForecast(forecastData);
        }
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
      });
  };

  const fetchWeatherInCity = (
    city: string,
    setWeatherState?: React.Dispatch<React.SetStateAction<any>>
  ) => {
    weatherStore
      .fetchWeather(city)
      .then(() => {
        const weatherData = toJS(weatherStore.weatherData);
        if (weatherData) {
          if (setWeatherState) {
            setWeatherState(weatherData);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching weather:", error);
      });
  };

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
        <CurrentWeather data={weather} />
        <ForecastSm data={forecast} />
      </div>
      <div>
        <div css={css`font-family:montH; color:#ececec; font-size:25px;margin-left:10px;margin-bottom:10px;`}>Weather in popular countries</div>
        <div css={css`width:100%; display:flex; flex-wrap: wrap;`}>
          <FavCountry data={weatherInKyiv} />
          <FavCountry data={weatherInLondon} />
          <FavCountry data={weatherInNewYork} />
        </div>
      </div>
    </div>
  );
});

export default TodaysWeatherPage;
