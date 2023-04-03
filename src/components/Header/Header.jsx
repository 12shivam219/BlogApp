import React from 'react'

export default function Header() {

  return (
    <>
      <header className='fixed white top-0 left-0 right-0 block w-full max-width m-auto'>
        <div className='flex justify-between w-full py-12'>
          <div className='leading-[0.9]'>
            <h1 className='font-semibold text-5xl'>
              <span className='inline-block'>
                <span className='block w-[12px] h-[12px] mb-[3px] border-2 border-solid rounded-full '></span>
                <span className='block w-[10px] h-[26px] border-2 border-solid rounded-[2px] m-auto'></span>
                </span>nsights</h1>
            <div className='text-end text-[10px] mt-1 text-[#ffffff91] font-bold font-sans'>with PennyPot</div>
          </div>
          <div className='flex items-center'>
            <ul className='flex w-[240px] justify-around'>
              <li className='text-2xl'>Home</li>
              <li className='text-2xl kanit'>Tags</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
