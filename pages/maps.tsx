import React from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import Layout from 'components/generalAppComponents/Layout'
//snazzymaos.com for map styles
const libraries = ["places"]
const Maps:React.FC = () => {

    // const {isLoaded, loadError} = useLoadScript({
    //     googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    //     libraries,
    // })

    // if(loadError) return "error loading maps"
    // if(!isLoaded) return "loading google maps"

  return (
    <Layout>
        <GoogleMap>

        </GoogleMap>
    </Layout>
  )
}

export default Maps