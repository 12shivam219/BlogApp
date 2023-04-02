import React from 'react'
import Header from '../components/Header/Header'

export default function CommonContainer({ children }) {
  return (
    <>
      <div className='block w-full h-[100vh] bg-[#121010]'>
        
          <Header />
          {children}
          {/* <Footer/> */}
      </div>
    </>
  )
}
