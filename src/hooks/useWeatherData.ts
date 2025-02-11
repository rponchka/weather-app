import { useState, useEffect } from "react";
import { toJS } from "mobx";
import { weatherStore } from "../store/weatherStore";
import { cityStore } from "../store/cityStore";
import { forecastStore } from "../store/forecastStore";
import { IWeatherData } from "../types/WeatherTypes";
import { Forecast, IForecastData } from "../types/Forecast";

export const useWeatherData = () => {
  const [weather, setWeather] = useState<IWeatherData | null>(null);
  const [forecast, setForecast] = useState<IForecastData | null>(null);
  const [weatherInKyiv, setWeatherInKyiv] = useState<IWeatherData | null>(null);
  const [weatherInLondon, setWeatherInLondon] = useState<IWeatherData | null>(null);
  const [weatherInNewYork, setWeatherInNewYork] = useState<IWeatherData | null>(null);
  const [ forecastForEveryDay, setforecastForEveryDay] = useState<Forecast | null>(null)


  useEffect(() => {
    fetchWeather(cityStore.city, setWeather);
    fetchForecast(cityStore.city, setForecast);
    fetchWeather("Kyiv", setWeatherInKyiv);
    fetchWeather("London", setWeatherInLondon);
    fetchWeather("New York", setWeatherInNewYork);
    fetchForecastForEveryDay()
  }, [cityStore.city]);

  const fetchWeather = async (city: string, setState: React.Dispatch<React.SetStateAction<IWeatherData | null>>) => {
    try {
      await weatherStore.fetchWeather(city);
      const data = toJS(weatherStore.weatherData);
      if (data) {
        setState(data);
      }
    } catch (error) {
      console.error(`Error fetching weather for ${city}:`, error);
    }
  };

  const fetchForecast = async (city: string, setState: React.Dispatch<React.SetStateAction<IForecastData | null>>) => {
    try {
      await forecastStore.fetchWeather(city);
      const data = toJS(forecastStore.weatherData);
      if (data) {
        setState(data);
      }
    } catch (error) {
      console.error(`Error fetching forecast for ${city}:`, error);
    }
  };

  
  const fetchForecastForEveryDay = () => {
      forecastStore
      .fetchWeather(cityStore.city)
      .then(() => {
          const forecastData = toJS(forecastStore.weatherData);
          if (forecastData) {
              setforecastForEveryDay(forecastData.forecast)
            }
        })
        .catch((error) => {
            console.error("Error fetching weather:", error);
        });
    };

    return { weather, forecast, weatherInKyiv, weatherInLondon, weatherInNewYork, forecastForEveryDay };
};
