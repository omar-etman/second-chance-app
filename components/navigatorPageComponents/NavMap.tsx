/* eslint-disable @next/next/no-img-element */
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useState, useRef, useMemo, useCallback } from "react";
import { classNames } from "utils/classNames";
import NavPlaces from "./NavPlaces";

//types for latitudes & logitudes, directions & map options
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
//dummy for generating clinic locations --> to be set later within a state , similar one for petFoodStores
const generateClinics = (position: LatLngLiteral) => {
  const _vetrinaryClinics: Array<LatLngLiteral> = [];
  for (let i = 0; i < 100; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2;
    _vetrinaryClinics.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    });
  }
  return _vetrinaryClinics;
};

const logo = "/assets/images/logo-white.png";
const NavMap: React.FC = () => {
  const [userZone, setUserZone] = useState<LatLngLiteral>();
  const [open, setOpen] = useState(false);
  const mapRef = useRef<GoogleMap>();
  //to avoid unwanted map recentering --> generate the value once and use it unless a coded dependancy changes
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 30.033333, lng: 31.233334 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      mapId: "bb9756460fdfbeab",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);
  const toggleSideControl = () => [
    setOpen(true),
    // console.log(sideControl)
  ];

  return (
    <div className="flex h-screen">
      {/* map side control component props={setOpen}*/}
      <button
        className={classNames(
          open ? "hidden" : "flex",
          "mt-[48rem] md:mt-[65rem] z-20 lg:hidden fixed text-[2rem] bg-teal-900 p-3 mx-5 rounded-xl transition-all duration-200 hover:p-3.2 hover:bg-teal-700"
        )}
        onClick={toggleSideControl}
      >
        <img src={logo} alt="logo" width={30} height={30} />
      </button>
      <div className="hidden lg:block h-screen w-[20%] p-[1rem] bg-teal-900 flex-col justify-start items-center pt-[4.5rem]">
        <h1 className="text-2xl font-bold text-gray-100">Find a destination</h1>
        <NavPlaces
          setUserZone={(position) => {
            setUserZone(position);
            mapRef.current?.panTo(position);
          }}
        />
      </div>
      {/* map */}
      <GoogleMap
        zoom={10}
        center={center}
        options={options}
        mapContainerClassName="w-full h-screen"
        onLoad={onLoad}
      >
        {/* revisit the icon for this marker */}
        {userZone && (
          <>
            <Marker position={userZone} />
            <Circle center={userZone} radius={15000} options={closeOptions} />
            <Circle center={userZone} radius={30000} options={middleOptions} />
            <Circle center={userZone} radius={45000} options={farOptions} />
          </>
        )}
      </GoogleMap>
    </div>
  );
};

export default NavMap;
