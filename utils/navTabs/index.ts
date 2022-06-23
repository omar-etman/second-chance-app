import {
  GiftIcon,
  SupportIcon,
  MapIcon,
  CashIcon,
} from "@heroicons/react/outline";


import { Resources, NavRoutes, AuthRoutes } from "types";

export const resources:Resources = [
    {
      key: 1,
      name: "Put an animal up for adoption",
      description: `Send us the pet's info and we'll added to our database and keep you posted. rest assured our users are trustworthy animal lovers like yourself.`,
      href: "/adoption",
      icon: GiftIcon,
    },
    {
      key: 2,
      name: "Pet Maps",
      description:
        "Look for any nearby vetinary clinics & pet food stores, show them your profile theyll take care of you and your friend .",
      href: "/maps",
      icon: MapIcon,
    },
    {
      key: 3,
      name: "Donate",
      description:
        "The help you can offer would do so much good & will gain credits to be used in return. Tap in to understand more",
      href: "/donate",
      icon: CashIcon,
    },
    {
      key: 4,
      name: "Help center",
      description:
        "in case you need help regarding a situation related to your pet be it a health issue or an inquiry or to contact us regarding any needed info.",
      href: "/help",
      icon: SupportIcon,
    },
  ];
  
export const navRoutes:NavRoutes = [
    { key: 1, name: "Home", href: "/" },
    { key: 2, name: "Rescue me", href: "/rescue" },
    { key: 3, name: "About us", href: "/about" },
    { key: 4, name: "SOS", href: "/sos" },
  ];
  
export  const authRoutes:AuthRoutes = [
    {key:1,name:"Sign in", href:"/login"},
    {key:2, name:"Sign Up", href:"/signup"}
  ]