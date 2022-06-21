import { Feature } from "types";

export const features:Feature[] = [
    {
      key:1, 
      name:'Navigations', 
      href:'/maps', 
      description:`we offer you an array of pet food stores & vetinary clinics 
      that we partner with based on a thorough reviewing process 
      , we are very picky on that account.`,
      imageSrc:'/assets/images/navigation.jpg',
      imageAlt:'look for pet food stores & vets nearby.'

    },
    {
      key:2,
      name:'Adoptions',
      href:'/adopt',
      description: `Reasons can vary to cause a need for 
      your pet or others to be in need 
      of a new home, in which case we'd 
      be grateful for your trust in us to handle this.`,
      imageSrc:'/assets/images/adoptions.jpg',
      imageAlt:'put an animal up for adoption'
    },
    {
      key:3,
      name:'SOS',
      href:'/sos',
      description:'We offer you the means to help an animal in need through providing you with the nearest on call clinic & more facilitations.',
      imageSrc:'/assets/images/emergency.jpg',
      imageAlt:'our emergency support in case your pet on any other animal needs it'
    },
    {
      key:4,
      name:'AppCredits',
      href:'/donate',
      description:`For every donation you make we subtract a percentage placing it in your profile, pile'em up for discounts at our partner clinics & stores.`,
      imageSrc:'/assets/images/appCredit.jpg',
      imageAlt:'for every donation you get payment discounts'
    },
  ]