import { Animal, Gender, Image as AnimPic } from '@prisma/client';
import { SVGProps } from "react";

//header nav arrays
export type Resources = {
    key: number;
    name: string;
    description: string;
    href: string;
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}[]

export type NavRoutes = {
    key: number;
    name: string;
    href: string;
}[]

export type AuthRoutes = {
    key: number;
    name: string;
    href: string;
}[]
//------------------------------------
//home page Features array

export type Feature = {
    key: number;
    name: string;
    href: string;
    description: string;
    imageSrc:string;
    imageAlt:string;
}
//------------------------------------
//animal species filter tabs

export type Sp = {
    key: number;
    name: string;
    species: string;
    imageUrl: string;
}

export type SpeciesTabs = {
    key: number;
    name: string;
    species: string;
    imageUrl: string;
}[]



//------------------------------------
//data--------------------------------

export type AnimPicsData = {
    images:AnimPic[] | null
    name:string | null
}

export type AnimalData = {
    animal : (Animal & {
        images: AnimPic[];
    }) | null
}

export type Pet = {
    id: number;
    name: string | null;
    breed: string | null;
    dateOfBirth: Date | null;
    story: string | null;
    traits: string | null;
    requirements: string | null;
    gender: Gender | null;
    speciesId: number;
    images:Picture[]
    
}

export type Picture = {
    id: number;
    image: string | null;
    animalId: number;
    images:AnimPic[]
}

