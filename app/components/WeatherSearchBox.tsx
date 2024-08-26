"use client"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Locations from '../utils/data'
import { SearchBoxProps } from '../interface';
import axios from 'axios';



export default function SearchBox({setWeatherResults, locality}:SearchBoxProps) {

  function formatTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const fetchWeather = async (localityId: string,locality:string) => {
    try {
      const res = await axios(`/api/weather?localityId=${localityId}`);
      const data = {
        ...res.data.data,
        date: formatTime(),
        locality
      }

      setWeatherResults((prevResults) => [data ,  ...prevResults]);
    } catch (error) {
      console.error('Error in fetchWeather: ', error)
      alert('Somehing bad happend')
    }
  };

  const handleOnSelect = (item: {id:string,name:string}) => {
    fetchWeather(item.id,item.name)
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
