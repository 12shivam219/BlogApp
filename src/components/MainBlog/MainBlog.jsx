import React from 'react'
import './MainBlog.css'
export default function MainBlog() {
  return (
    <>
      <div className='w-full h-full relative'>
        <div className='relative h-full'>
          <div className='block w-[500px] h-[500px] border-[55px] border-solid border-[#645E5E] rounded-full absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto'>
            <div className="block w-[118px] h-[118px] mt-[42px]  mx-auto mini-circle"></div>
          </div>
          <div className='block w-[90%] m-auto text-center absolute top-[57%]  left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <p className='text-[50px] leading-none kanit'>Mastering Your Finances: Expert tips and tricks to achieve your financial goals</p>
            <div className='relative top-[40px]'>
              <span className='kanit block text-[24px] text-[#c6c6c6]'>File Name*|2 Minute Read</span>
              <button className='kanit relative top-[100px] w-[120px] p-2 bg-white text-black rounded-[40px]'>Read Now</button>
            </div>
          </div>
        </div>
        <div className='block w-full'>
          <div className="w-[200px] flex justify-around mt-[110px] mx-auto">
            <div className="w-[15px] h-[15px] border-2 border-white border-solid rounded-full"></div>
            <div className="w-[15px] h-[15px] border-2 border-white border-solid rounded-full"></div>
            <div className="w-[15px] h-[15px] border-2 border-white border-solid rounded-full"></div>
            <div className="w-[15px] h-[15px] border-2 border-white border-solid rounded-full"></div>
            <div className="w-[15px] h-[15px] border-2 border-white border-solid rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  )
}