import { makeAutoObservable } from "mobx";
import { IWeatherData } from "../types/WeatherTypes";

class WeatherStore{
    weatherData: IWeatherData | null = null;
    isLoading: boolean = false;
    error: string | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async fetchWeather (city:string) {
        this.isLoading = true
        this.error = null

        try{
            const apiKey = 'e2a7f2d679ab4a52ace153751252701'
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
            if(!response.ok){
                throw new Error('Error when receiving data')
            }
            const data: IWeatherData = await response.json()
            this.weatherData = data
        }catch(e){
            console.log(e);
        }finally{
            this.isLoading = false
        }
    }
}

export const weatherStore = new WeatherStore()