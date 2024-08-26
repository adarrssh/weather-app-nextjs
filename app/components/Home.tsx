// "use client"
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// import Locations from './data'
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react'

// export default function Home() {



//   const handleOnSelect = (item: any) => {
//     // the item selected
//     console.log('onSelect')
//     console.log(item)
//   }


//   const formatResult = (item: { id: string ; name: string }) => {
//     return (
//       <>
//         <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
//       </>
//     )
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div style={{ width: 400 }}>
//           <ReactSearchAutocomplete
//             items={Locations}
//             onSelect={handleOnSelect}
//             autoFocus
//             formatResult={formatResult}
//           />
//         </div>
//       </header>
//     </div>
//   )
// }
