import { WeatherResults } from "../interface";
import WeatherSeachResult from "./WeatherSeachResult";

interface WeatherSearchResultsProps {
  weatherResults: WeatherResults[];
}

const WeatherSearchResults: React.FC<WeatherSearchResultsProps> = ({
  weatherResults,
}) => {
  return (
    <main className="w-full pt-10 flex justify-center items-center  flex-col ">
      {weatherResults.length > 0 ? (
        weatherResults.map((item: WeatherResults) => (
          <WeatherSeachResult item={item} />
        ))
      ) : (
        <div className="justify-center items-center rounded-lg mt-5  w-72 sm:w-auto bg-box text-text">
          <div className="h-[200px] w-[300px] sm:w-[600px] sm:h-[300px]   flex  flex-col justify-center items-center text-center">
          <p className="text-sm sm:text-3xl">Welcome to Your Weather Companion</p>
          <p className="text-sm sm:text-xl pt-2 font-extralight">Search for your location to get the latest weather updates</p>

          </div>
        </div>
      )}
    </main>
  );
};

export default WeatherSearchResults;
