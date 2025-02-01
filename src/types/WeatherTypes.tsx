interface ICondition {
    text:string;
    icon:string;
}

interface ICurrent {
    cloud: number;
    condition: ICondition;
    feelslike_c: number;
    gust_kph:number;
    humidity:number
    precip_mm:number;
    temp_c:number;
    wind_dir:string;
    wind_kph:number
}

interface ILocation {
    country: string;
    lat:number;
    localtime: string;
    localtime_epoch: number;
    lon:number;
    name: string;
    region: string;
}

export interface IWeatherData {
    location:ILocation;
    current:ICurrent;
}