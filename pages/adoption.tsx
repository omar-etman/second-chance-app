import { useUser } from '@supabase/supabase-auth-helpers/react';
import AdoptionForm from 'components/adoptionPostPageComponents/AdoptionForm';
import Layout from 'components/Layout'
import React from 'react'

const poster = '/assets/images/adoption-poster.jpg'

const AdoptionPost:React.FC = () => {
  
  const user = useUser()
  //will be needed for route protection
  return (
    <Layout>
      <div className='w-full md:flex md:flex-row md:justify-center md:items-center'>
        <AdoptionForm/>
        <div 
          
        />
      </div>
        {/* <div className='flex flex-col justify-start text-black bg-gray-200' */}
    </Layout>
  )
}

export default AdoptionPost