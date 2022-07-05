import React from 'react'
import FooterBrand from './FooterBrand'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
const Footer:React.FC = () => {
  return (
    <div className='flex flex-col-reverse justify-center w-full lg:justify-around items-ceter md:flex-row'>
        <FooterBrand/>
        <div className = "flex flex-row items-center justify-center">
          <span className='hidden lg:flex text-gray-100 font-light mr-[7rem]'>Follow us : </span>
          <ul className='flex-row items-center justify-around hidden mt-2 text-gray-100 lg:flex'>
              <li>
                <FacebookIcon/>
              </li>
              <li>
                <InstagramIcon/>
              </li>
              <li>
                <TwitterIcon/>
              </li>
              <li>
                <EmailIcon/>
              </li>
          </ul> 
        </div>
    </div>
  )
}

export default Footer