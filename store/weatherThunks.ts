import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const  formatTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ localityId, locality }: { localityId: string; locality: string }, thunkAPI) => {
    try {
      const res = await axios(`/api/weather?localityId=${localityId}`);
      const data = {
        ...res.data.data,
        date: formatTime(), 
        locality,
      };
      return data;
    } catch (error) {
      console.error("Error in fetchWeather: ", error);
      return thunkAPI.rejectWithValue("Something bad happened");
    }
  }
);
