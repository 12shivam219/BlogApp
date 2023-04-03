import React from 'react'

export default function Blogs() {
  return (
    <>
      <div className='w-full max-w-[50%] m-auto'>
        <div>
          <div className="title">
            <h1 className='text-[#545454] text-[38px] font-semibold kanit tracking-[2px]'>
              Life Insurance: Securing Your
              Future
            </h1>
          </div>
          <span className='kanit'>investing | 5 minute read</span>
          <div className="p kanit">
            Death is an inevitability, and while it’s a difficult topic to
            discuss, planning for the future is essential. Life insurance
            is an investment in the future, which can provide financial
            security for your loved ones in the event of your untimely
            demise.
          </div>
          <div className="button">
            <button className='kanit'>Read Now</button>
          </div>
        </div>
      </div>
    </>
  )
}
