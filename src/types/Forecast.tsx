interface WeatherCondition {
    text: string;
    icon: string;
    code: number;
  }
  
  interface CurrentWeather {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    wind_kph: number;
    wind_mph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    humidity: number;
    cloud: number;
    uv: number;
    is_day: number;
    condition: WeatherCondition;
    last_updated: string;
  }
  
  export interface DayWeather {
    avgtemp_c: number;
    maxtemp_c: number;
    mintemp_c: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    condition: WeatherCondition;
  }
  
  interface WeatherData {
    date: string;
    date_epoch: number;
    day: DayWeather;
  }
  
  export interface Forecast {
    forecastday: WeatherData[];
  }
  
  interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
    localtime_epoch: number;
  }
  
  export interface IForecastData {
    location: Location;
    current: CurrentWeather;
    forecast: Forecast;
  }
  