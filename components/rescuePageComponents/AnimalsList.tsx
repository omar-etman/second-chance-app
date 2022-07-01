import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import AnimalCard from "./AnimalCard";
import AnimalsFilter from "./AnimalsFilter";
import { Animal, Rescue, Image as AnimPic } from "@prisma/client";
import Loader from "../generalAppComponents/Loader";


const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const AnimalsList: React.FC = () => {
  const { data, error } = useSWR(`/api/animals`, fetcher);
  const [filterBy, setFilterBy] = useState("all");

  const filtering = () => {
    const filteredAnimals = data.filter((f: { species: { name: string; }; }) => f.species.name === filterBy)
    const unrescuedAnimals = data.filter((f: { Rescue: Rescue[] }) => f.Rescue.length === 0)
    if (filterBy === "all") {
      return (
        <ul className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {unrescuedAnimals.map((animal: (Animal & { images: AnimPic[] }) | null) => (
            <li key={animal?.id}>
              <AnimalCard animal={animal} />
            </li>
          ))}
        </ul>
      );
    } else {
        return (
          <ul className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {filteredAnimals.map((animal: (Animal & { images: AnimPic[] }) | null) => (
            <li key={animal?.id}>
              <AnimalCard animal={animal} />
            </li>
          ))}
        </ul>
        )
    }
  };

  if (!data) {
    return <Loader />;
  }
  return (
    <div className="w-full pb-8 bg-gray-100">
      <div className="flex items-center justify-center w-full bg-[#9C3E00] pt-2 pb-4">
        <AnimalsFilter 
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        /> 
      </div>
      <div className="px-4 py-4 mx-auto overflow-hidden max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        {filtering()}
      </div>
    </div>
  );
};

export default AnimalsList;
