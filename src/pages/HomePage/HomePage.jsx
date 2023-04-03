import React from 'react'
import MainBlog from '../../components/MainBlog/MainBlog'

export default function HomePage() {
  return (
    <>
      <div className='h-[1000px] bg-[#262626]'>
        <main className='w-full h-full max-width m-auto white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <MainBlog />
        </main>
        
      </div>

    </>
  )
}
