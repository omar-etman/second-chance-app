import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from "@react-google-maps/api"
import { useState, useRef, useMemo, useCallback } from "react"

//types for latitudes & logitudes, directions & map options
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;
const NavMap:React.FC = () => {

    const [sideControl, setSideControl] = useState(false)
    //to avoid unwanted map recentering --> generate the value once and use it unless a coded dependancy changes
    const center = useMemo(()=>({lat:30.033333, lng:31.233334}),[])
    const toggleSideControl = () => [
        setSideControl(!sideControl)
        // console.log(sideControl)
    ]
    
    return (
      <div className='flex h-screen'>
        {/* side control */}
        <button 
            className="flex lg:hidden"
            onClick={toggleSideControl}
        >
            hi
        </button>
        <div className="hidden lg:block w-[20%] p-[1rem] bg-teal-900">
            <h1>Find a destination</h1>
        </div>
        {/* map */}
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName='w-full h-screen'
        >
  
        </GoogleMap>
      </div>
    )
  }

  export default NavMap