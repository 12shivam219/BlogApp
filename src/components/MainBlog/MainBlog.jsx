import React from 'react'
import './MainBlog.css'
export default function MainBlog() {
  return (
   <>
   <div className='w-full h-full relative'>
    <div className='block w-[500px] h-[500px] border-[55px] border-solid border-white rounded-full fixed top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto'>
        <div className="block w-[118px] h-[118px] my-8 mx-auto mini-circle"></div> 
    </div>
    {/* border-r-[25px]  */}
    <div>
        <p className=''>Mastering Your Finances: Expert tips and tricks to achieve your financial goals</p>
        <span className=''>File Name*|2 Minute Read</span>
        <button className=''>Read Now</button>
        <div className=''>
            <div className="className"></div>
            <div className="className"></div>
            <div className="className"></div>
            <div className="className"></div>
        </div>
    </div>
   </div>
   </>
  )
}
