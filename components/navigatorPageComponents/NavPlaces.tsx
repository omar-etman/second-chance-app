import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

type props = {
  setUserZone: (position: google.maps.LatLngLiteral) => void;
};

const NavPlaces: React.FC<props> = ({ setUserZone }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
  } = usePlacesAutocomplete();
  const handleSelect = async (val: string) => {
    setValue(val, false);
    // clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setUserZone({ lat, lng });
  };

//   const clearSuggestions = () => {
//     throw new Error("Function not implemented.");
//   }

  return (
    <Combobox onSelect={handleSelect} className='mt-4'>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="w-full p-2 rounded-xl"
        placeholder="Search office address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default NavPlaces;

