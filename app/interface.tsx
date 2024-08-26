import { Dispatch, SetStateAction } from "react";

export interface WeatherResults {
    temperature: number;
    humidity: number;
    wind_speed: number;
    wind_direction: number;
    rain_intensity: number;
    rain_accumulation: number;
    locality: string;
    time: string;
    date:string
    id:string
}

export interface SearchBoxProps {
    setWeatherResults: Dispatch<SetStateAction<WeatherResults[]>>;
    locality: string;
  }
  