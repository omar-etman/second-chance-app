import { Dispatch, SetStateAction, useState } from "react";
import { Combobox, RadioGroup } from "@headlessui/react";
import { classNames } from "utils/classNames";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import Image from "next/image";
const species = [
  { key: 0, name: "all", species: "all", imageUrl:'/assets/images/' },
  { key: 1, name: "Dogs", species: "dog" },
  { key: 2, name: "Cats", species: "cat" },
  { key: 3, name: "Birds", species: "bird" },
  { key: 4, name: "Reptiles", species: "reptile" },
];

type props = {
  filterBy: string
  setFilterBy: Dispatch<SetStateAction<string>>
}

const AnimalsFilter: React.FC<props> = ({filterBy, setFilterBy}) => {
  const [sp, setSelectedSp] = useState(species[0]);
  const [query, setQuery] = useState("");
  const selectionHandler = (e: { target: { value: SetStateAction<{ key: number; name: string; species: string; }>; }; }) => {
    setSelectedSp(e.target.value)
  }


  const filteredSpecies =
    query === ""
      ? species
      : species.filter((sp) => {
          return sp.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={sp} onChange={setSelectedSp}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">Assigned to</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full py-2 pl-3 pr-10 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(sp: { name: string; }) => sp?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none">
          <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredSpecies.length > 0 && (
          <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredSpecies.map((sp) => (
              <Combobox.Option
                key={sp.key}
                value={sp}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    {/* <div className="flex items-center">
                      <Image src={person.imageUrl} alt="" layout='fill' className="flex-shrink-0 w-6 h-6 rounded-full" />
                      <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{person.name}</span>
                    </div> */}

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default AnimalsFilter;
