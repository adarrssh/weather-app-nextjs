"use client";
import WeatherSearchBox from "./components/WeatherSearchBox";
import WeatherSearchResults from "./components/WeatherSearchResults";
import { useState } from "react";
import { WeatherResults } from "./interface";

export default function Home() {
  const [locality, setLocality] = useState("");

  const [weatherResults, setWeatherResults] = useState<WeatherResults[]>([]);


  return (
    <main className="container xl  mx-auto flex flex-col p-10">
      <section className="w-full ">
        <WeatherSearchBox setWeatherResults={setWeatherResults} locality={locality}  />
      </section>
      <section className="w-full ">
        <WeatherSearchResults  weatherResults={weatherResults}/>
      </section>
    </main>
  );
}
