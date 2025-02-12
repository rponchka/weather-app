import { useState, useEffect } from "react";
import { toJS } from "mobx";
import { weatherStore } from "../store/weatherStore";
import { cityStore } from "../store/cityStore";
import { IWeatherData } from "../types/WeatherTypes";

export const useWeatherData = () => {
  const [weatherInKyiv, setWeatherInKyiv] = useState<IWeatherData | null>(null);
  const [weatherInLondon, setWeatherInLondon] = useState<IWeatherData | null>(null);
  const [weatherInNewYork, setWeatherInNewYork] = useState<IWeatherData | null>(null);


  useEffect(() => {
    fetchWeather("Kyiv", setWeatherInKyiv);
    fetchWeather("London", setWeatherInLondon);
    fetchWeather("New York", setWeatherInNewYork);
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

    return { weatherInKyiv, weatherInLondon, weatherInNewYork};
};
