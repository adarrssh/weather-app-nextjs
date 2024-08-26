import Image from 'next/image'
import React from 'react'
import weather_image from '../../attributes/cloudy.png'
import Wind from '../../attributes/Wind.png'
import Humidity from '../../attributes/humidity.png'
import WindDirection from '../../attributes/wind.png'
import Precipitation from '../../attributes/precipitation.png'
import Speed from '../../attributes/speed.png'

const WeatherSearchResults = () => {
  return (
    <main className='w-full pt-10 flex flex-row'>
        <div className='flex-1 flex justify-center items-center '>
            <div className='w-8/12 h-[300px] bg-slate-400 rounded-lg flex flex-col justify-center p-2'>
                <div className='flex-1 flex justify-center items-center'>
                    <p className='text-3xl pb-5 font-bold'>Mumbai</p>
                </div>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <p className='text-6xl font-bold'>09:03</p>
                    <p className='text-sm font-light'>Thursday, 31 Aug</p>
                </div>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            <div className='w-10/12 h-[300px] bg-slate-400 rounded-lg flex flex-row'>
                <div className='flex-1 flex flex-col '>
                    <div className='flex-1 flex justify-center items-center' >
                        <p className='text-5xl'>25&deg;C</p>
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <Image src={weather_image} alt='image' width={80} height={150}></Image>
                    </div>
                </div>
                <div className='flex-1 flex-col  flex justify-center items-center'>
                    <div className='w-full flex-1 flex justify-center items-center'>
                        <div className=' flex-1 flex flex-col justify-center items-center'>
                            <Image src={Humidity} alt='image' width={40} height={40}></Image>
                            <p className='text-sm'>humidity</p>
                            <p className='text-sm'>0</p>
                        </div>
                        <div className='  flex-1 flex flex-col justify-center items-center'>
                            <Image src={Speed} alt='image' width={40} height={40}></Image>
                            <p className='text-sm'>speed</p>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>

                    <div className='w-full  flex-1 flex justify-center items-center'>
                        <div className='  flex-1 flex flex-col justify-center items-center'>
                            <Image src={WindDirection} alt='image' width={40} height={40}></Image>
                            <p className='text-sm'>direction</p>
                            <p className='text-sm'>0</p>
                        </div>
                        <div className='  flex-1 flex flex-col justify-center items-center'>
                            <Image src={Precipitation} alt='image' width={40} height={40}></Image>
                            <p className='text-sm'>accumulation</p>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default WeatherSearchResults