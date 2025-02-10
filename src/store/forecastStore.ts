import { makeAutoObservable } from "mobx";
import { IForecastData } from "../types/Forecast";

class ForecastStore {
  weatherData: IForecastData | null = null;
  isLoading: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWeather(city: string) {
    this.isLoading = true;
    this.error = "";

    const API_KEY = "e2a7f2d679ab4a52ace153751252701";
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&hour=3`;

    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Failed to fetch data");

      const data: IForecastData = await response.json();
      this.weatherData = data;
    } catch (error: any) {
      this.error = error.message;
    } finally {
      this.isLoading = false;
    }
  }
}

export const forecastStore = new ForecastStore();

