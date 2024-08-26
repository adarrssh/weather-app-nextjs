"use client"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Locations from '../utils/data'
import { SearchBoxProps } from '../interface';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { addWeatherData } from "@/store/slice";
import { fetchWeather } from '@/store/weatherThunks';



export default function SearchBox() {

  const dispatch = useDispatch<AppDispatch>()

  const handleFetchWeather = (localityId: string, locality: string) => {
    dispatch(fetchWeather({localityId,locality}));
  };

  const handleOnSelect = (item: {id:string,name:string}) => {
    handleFetchWeather(item.id,item.name)
  }

  const formatResult = (item: { id: string ; name: string }) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
    
    <div className='w-9/12 mx-auto'>

          <ReactSearchAutocomplete
            items={Locations}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
            />
    </div>

  )
}
