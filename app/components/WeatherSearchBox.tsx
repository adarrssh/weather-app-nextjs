"use client"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Locations from '../data'

export default function SearchBox() {



  const handleOnSelect = (item: any) => {
    // the item selected
    console.log('onSelect')
    console.log(item)
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
