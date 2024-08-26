"use client";
import axios from "axios";
import WeatherSearchBox from "./components/WeatherSearchBox";
import WeatherSearchResults from "./components/WeatherSearchResults";
import LocalityArr from "../app/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [locality, setLocality] = useState("New Friends Colony");

  const [weatherResults, setWetherResults] = useState({
    temperature: 0,
    humidity: 0,
    wind_speed: 0,
    wind_direction: 0,
    rain_intensity: 0,
    rain_accumulation: 0,
  });


  const fetchWeather = async (locality: any) => {
    const res = await fetch(`/api/weather?localityId=${getLocalityId?.id}`);
    const data = await res.json();
    setWetherResults(data);
  };

  const getLocalityId = LocalityArr.find((item) => {
    if (item.name === locality) return item;
  });



  return (
    <main className="container xl  mx-auto flex flex-col p-10">
      <button onClick={()=>fetchWeather(locality)}>click</button>
      <section className="w-full ">
        <WeatherSearchBox  />
      </section>
      <section className="w-full ">
        <WeatherSearchResults />
      </section>
    </main>
  );
}
