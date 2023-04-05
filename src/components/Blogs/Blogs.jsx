import React, { useState } from 'react'
import data from '../../Json/index.json'

export default function Blogs({ itemsToShow = 3 }) {

  const [element, setElement] = useState(itemsToShow);
  console.log(element)
  const handleClick = () => {
    console.log(element)
    setElement(element + itemsToShow);
  }

  const sliceData = data.slice(0, element);

  return (
    <>
      {sliceData.map((dataItem, index) => (
        <div className='w-full max-w-[50%] m-auto' key={dataItem.title}>
          <div className='pb-[210px]'>
            <div className="title">
              <h1 className='text-[#545454] text-[38px] font-semibold kanit tracking-[2px]'>
                {dataItem.title}
              </h1>
            </div>
            <div className='text-[14px] text-[#d4d4d4] my-[20px]'>investing | 5 minute read</div>

            {dataItem.img ? <img src="\assets\pennypot.jpg" alt="" /> : null}

            <div className="p my-[20px]">
              <p className='kanit text-[22px]'>
                {dataItem.para}
              </p>
            </div>
            <div className="button">
              <button className='kanit w-[148px] p-1.5 rounded-[25px] text-[20px] bg-[#444444] white'>Read Now</button>
            </div>
          </div>
          {index === sliceData.length - 1 && element < data.length && (
            <div className="LoadButton text-center pb-[100px]">
              <button className='w-[150px] p-1.5 border-2 border-solid rounded-full bg-[#262626] white text-[20px] kanit' onClick={handleClick}>
                Load More
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
