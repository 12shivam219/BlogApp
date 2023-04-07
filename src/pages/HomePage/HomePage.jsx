import React from 'react'
import MainBlog from '../../components/MainBlog/MainBlog'
import Blogs from '../../components/Blogs/Blogs'

export default function HomePage() {
  return (
    <>
      <div className='h-[1000px] bg-[#262626]'>
        <main className='w-full h-full max-width m-auto white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <MainBlog />
        </main>
      </div>
      <div>
        <div className='block w-full shadow-2xl max-width m-auto bg-white -translate-y-[140px]'>
          <div className='p-[110px] text-center'>
            <h1 className='w-[134px] m-auto text-xl font-semibold text-[#828282]'>Latest Insights</h1>
            <hr className='w-[130px] my-2 border-[1px] mx-auto' />
          </div>
          <div>
            <Blogs />
          </div>
        </div>
      </div>
    </>
  )
}
