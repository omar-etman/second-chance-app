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


