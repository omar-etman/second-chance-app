import React from 'react'
import FooterBrand from './FooterBrand'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
const Footer:React.FC = () => {
  return (
    <div className='flex flex-col justify-around w-full items-ceter md:flex-row'>
        <FooterBrand/>
        <div className = "flex flex-row items-center justify-center">
          <span className='text-gray-100 font-light mr-[7rem]'>Follow us : </span>
          <ul className='flex flex-row items-center justify-around text-gray-100'>
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