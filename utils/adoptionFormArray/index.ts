import { FormControlProps, Option } from 'types';


    //revisit the empty arrays issue

    const speciesOptions:Option[] = [
      { key: `Select your pet's species`, value: 'none' },
      { key: 'Dog', value: 'dog'},
      { key: 'Cat', value: 'cat' },
      { key: 'Bird', value: 'bird' },
      { key: 'Reptile', value: 'reptile'}
    ]
  
    const genderOptions:Option[] = [
      { key: `Select your pet's gender`, value: 'none' },
      { key: 'Male', value: 'male'},
      { key: 'Female', value: 'female'},
    ]
    
    export const formFields:FormControlProps[] = [
      {
        key:1,
        name:'petName',
        label: `Pet's Name`,
        placeholder: 'Name entry',
        control:'input',
        type:'petName', 
      },
      {
        key:2,
        name:'species',
        label: `Species`,
        control:'select',
        type:'species',
        options:speciesOptions 
      },
      {
        key:3,
        name:'gender',
        label: `Gender`,
        control:'select',
        type:'gender',
        options:genderOptions 
      },
      {
        key:4,
        name:'breed',
        label: `Breed`,
        control:'input',
        type:'breed',
        placeholder:'Pug, Rotweiler , Maw, Siamese, etc...',
      },
      {
        key:5,
        name:'dateOfBirth',
        label:'Birth date',
        control:'date',
        type:'dateOfBirth',
      },
      {
        key:6,
        name:'images',
        label:"Upload a photo or more",
        control:'imageUpload',
        placeholder:"Upload your photos here",
        type:"file",
        // setFieldValue={(url) => props.setFieldValue('avatarURL', url)}
      },
      {
        key:7,
        name:'story',
        label: 'tell us the story',
        placeholder: 'this entry helps us introduce your pet more efficiently to our users. nothing big just a simple summary will do',
        control:'textarea',
        type:'story',
      },
      {
        key:8,
        name:'traits',
        label: `Every pet has a set of identifying traits, write some of your pet's =D`,
        control:'textarea',
        placeholder: 'i.e: protective, playful, loves stealing shoes, etc... ',
        type:'traits',
      },
      {
        key:9,
        name:'requirements',
        label: `What would you expect from the future owner to provide for the welfare of your pet?`,
        control:'textarea',
        placeholder: 'specific species that your pet is not good with, precautions to be taken etc ....',
        type:'requirements',
      }
    
    ]