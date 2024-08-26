import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherThunks"; 

interface WeatherData {
    temperature: number;
    humidity: number;
    wind_speed: number;
    wind_direction: number;
    rain_intensity: number;
    rain_accumulation: number;
    locality: string;
    time: string;
    date: string;
    id: string;
}

export interface CounterState{
    weatherResults: WeatherData[];
    loading: boolean;
    error: string | null;
}

const initialState: CounterState = {
    weatherResults : [],
    loading: false,
    error: null,
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        addWeatherData: (state, action: PayloadAction<WeatherData>) => {
            state.weatherResults.unshift(action.payload); // Add the new item at the start of the array
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchWeather.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
            state.loading = false;
            state.weatherResults.unshift(action.payload); // Add the new weather data at the beginning
          })
          .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
      },
})

export const { addWeatherData} = counterSlice.actions
export default counterSlice.reducer