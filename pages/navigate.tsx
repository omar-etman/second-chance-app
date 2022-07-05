import React from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import Layout from 'components/generalAppComponents/Layout'
import NavMap from 'components/navigatorPageComponents/NavMap'
//snazzymaos.com for map styles

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const Navigator: () => "error loading maps" | "loading google maps" | JSX.Element = () => {
    
    //consider a form component with 2 input fields for the locations 
    //2 states for location & destination
    //a function that sets location to be the current location

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: apiKey!,
        libraries:["places"],
    })

    if(loadError) return "error loading maps"
    if(!isLoaded) return "loading google maps"

  return (
    <Layout>
        <NavMap/>
    </Layout>
  )
}

export default Navigator

//---------------------------------



