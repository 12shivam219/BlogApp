import React, { useEffect } from 'react'
import data from '../../Json/index.json'

export default function Blogs() {

  
  return (
    <>
      {
        data.map((data) => {
          return (
            <div className='w-full max-w-[50%] m-auto' key={data.title}>
              <div className='pb-[210px]'>
                <div className="title">
                  <h1 className='text-[#545454] text-[38px] font-semibold kanit tracking-[2px]'>
                    {data.title}
                  </h1>
                </div>
                <div className='text-[14px] text-[#d4d4d4] my-[20px]'>investing | 5 minute read</div>

                {data.img?<img src="\assets\pennypot.jpg" alt="" />:null}

                <div className="p my-[20px]">
                  <p className='kanit text-[22px]'>
                    {data.para}
                  </p>
                </div>
                <div className="button">
                  <button className='kanit w-[148px] p-1.5 rounded-[25px] text-[20px] bg-[#444444] white'>Read Now</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
