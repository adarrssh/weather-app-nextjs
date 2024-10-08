import React from "react";
import { WeatherResults } from "../interface";
import Image from "next/image";


interface WeatherSeachResultProps {
  item: WeatherResults;
}

const WeatherSeachResult: React.FC<WeatherSeachResultProps> = ({ item }) => {

  const formatDate = () => {
    const date = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const dayName = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthName = months[date.getMonth()];
  
    return `${dayName}, ${dayOfMonth} ${monthName}`;
  };

  const getImgSrc = (item:WeatherResults) => {
    if(item.rain_accumulation != null && item.rain_accumulation >0){
      if( item.rain_intensity != null && item.rain_intensity>0){
        return '/images/heavy-rain.png'
      }
      return '/images/cloudy.png'
    }else if(item.temperature!= null && item.temperature < 15){
      return '/images/cold.png'
    }else{
      return '/images/sun.png'
    }
  }
  
  return (
    
    <>
      <div
        key={item.id}
        className="justify-center items-center rounded-lg mt-5  w-72 sm:w-auto bg-box text-text"
      >
        <div className="h-200px w-300px sm:w-[600px] sm:h-[300px]   flex  flex-col  sm:flex-row">
          <div className="flex-1 sm:h-[300px] flex  flex-col justify-center pt-4 sm:pt-0 ">
            <div className="flex-1 flex justify-center items-center text-center pl-1">
              <p className="text-3xl  font-bold">{item.locality}</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <p className="text-3xl font-bold">{item.date}</p>
              <p className="text-sm font-light pt-2">{`${formatDate()}`}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col pt-4 sm:pt-0">
            <div className="flex-1 flex justify-center items-center">
              <p className="text-3xl">{item.temperature || "-"}&deg;C</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={`${getImgSrc(item)}`}
                alt="image"
                width={80}
                height={150}
              ></Image>
            </div>
          </div>
          <div className="flex-1 flex-col flex justify-center items-center pl-2 pr-2 pt-4 pb-4 sm:pb-0 sm:pt-0 ">
            <div className="w-full flex-1 flex justify-center items-center">
              <div className=" flex-1 flex flex-col justify-center items-center">
                <Image
                  src={'/images/humidity.png'}
                  alt="image"
                  width={40}
                  height={40}
                ></Image>
                <p className="text-sm">humidity</p>
                <p className="text-sm">{item.humidity || "-"}</p>
              </div>
              <div className="  flex-1 flex flex-col justify-center items-center">
                <Image src={'/images/speed.png'} alt="image" width={40} height={40}></Image>
                <p className="text-sm">speed</p>
                <p className="text-sm">{item.wind_speed || "-"}</p>
              </div>
            </div>

            <div className="w-full  flex-1 flex justify-center items-center">
              <div className="  flex-1 flex flex-col justify-center items-center">
                <Image
                  src={'/images/wind.png'}
                  alt="image"
                  width={40}
                  height={40}
                ></Image>
                <p className="text-sm">direction</p>
                <p className="text-sm">{item.wind_direction || "-"}</p>
              </div>
              <div className="  flex-1 flex flex-col justify-center items-center">
                <Image
                  src={'/images/precipitation.png'}
                  alt="image"
                  width={40}
                  height={40}
                ></Image>
                <p className="text-sm">collection</p>
                <p className="text-sm">{item.rain_accumulation || "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSeachResult;
