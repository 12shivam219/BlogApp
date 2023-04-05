import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className='w-full bg-black white relative'>
        <div className='w-[80px] h-[80px]  border-none bg-[#183430] rounded-full absolute right-[40px] top-[30px]'></div>
        <div className='max-width m-auto py-[100px] flex w-full'>
          <div className='w-1/2 relative'>
            <div className="heading flex items-center">
              <div className='w-[50px] h-[50px] border-[5px] border-solid rounded-full'>
                <div className='w-[12px] h-[12px] mini'></div>
              </div>
              <h1 className='text-[33px] kanit'>
                PennyPot
              </h1>
            </div>
            <div className="p w-[300px] my-[50px] font-bold">
              <p>Join the revolution and see how easy Middle makes home loans.</p>
            </div>
          </div>
          <div className='w-1/2 flex'>
            <div className='flex w-full'>
              <div className="comp w-1/3">
                <h1 className='font-semibold text-[24px]'>Company</h1>
                <ul>
                  <li className='my-[40px]'>Contact</li>
                </ul>
              </div>
              <div className="wh w-1/3">
                <h1 className='font-semibold text-[24px]'>Who we help</h1>
                <ul className='my-[40px]'>
                  <li className='my-3'>Customers</li>
                  <li className='my-3'>Brokers</li>
                  <li className='my-3'>Lenders</li>
                </ul>
              </div>
              <div className='w-1/3'>
                <h1 className='font-semibold text-[24px]'>Follow us on</h1>
                <ul className='my-[40px] flex'>
                  <li className='mx-2'><span> <FacebookOutlinedIcon /></span></li>
                  <li className='mx-2'><span> <TwitterIcon /></span></li>
                  <li className='mx-2'><span> <YouTubeIcon /></span></li>
                  <li className='mx-2'><span> <LinkedInIcon /></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className='m-auto max-width border-2 border-solid' />
        <div className="last">
          <div className='max-width py-[68px] flex justify-between m-auto'>
            <div>
              <p className='text-[#585d68] text-[14px] kanit'>© 2023 PennyPot | ABN 99 649 575 315 | Australian Credit Licence 536443</p>
            </div>
            <div>
              <ul className='flex'>
                <li className='mx-2 text-[#585d68] text-[14px] kanit'>Terms & Conditions</li>
                <li className='mx-2 text-[#585d68] text-[14px] kanit'>Privacy Policy</li>
                <li className='ml-2 text-[#585d68] text-[14px] kanit'>Privacy Collection Notice</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
