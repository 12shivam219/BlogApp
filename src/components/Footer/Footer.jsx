import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <>
      <div className='w-full bg-black white relative'>
        <div className='w-[100px] h-[100px]  border-none bg-[#183430] rounded-full absolute right-[40px] top-[30px]'></div>
        <div className='p-[100px] flex w-full'>
          <div className='w-1/2 relative'>
            <div className="heading flex items-center">
              <div className='w-[50px] h-[50px] border-[5px] border-solid rounded-full'>
                <div></div>
              </div>
              <h1 className='text-[33px] kanit'>
                PennyPot
              </h1>
            </div>
            <div className="p">
              <p>Join the revolution and see how easy Middle makes home loans.</p>
            </div>
          </div>
          <div className='w-1/2 flex'>
            <div className='flex'>
              <div className="comp">
                <h1>Company</h1>
                <ul>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="wh">
                <h1>Who we help</h1>
                <ul>
                  <li>Customers</li>
                  <li>Brokers</li>
                  <li>Lenders</li>
                </ul>
              </div>
              <div>
                <h1>Follow us on</h1>
                <ul>
                  <li><FacebookOutlinedIcon/></li>
                  <li><TwitterIcon/></li>
                  <li><YouTubeIcon/></li>
                  <li><LinkedInIcon/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
