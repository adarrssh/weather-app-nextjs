"use client";
import WeatherSearchBox from "./components/WeatherSearchBox";
import WeatherSearchResults from "./components/WeatherSearchResults";

export default function Home() {




  return (
    <main className="container xl  mx-auto flex flex-col p-10">
      <section className="w-full ">
        <WeatherSearchBox  />
      </section>
      <section className="w-full ">
        <WeatherSearchResults/>
      </section>
    </main>
  );
}
