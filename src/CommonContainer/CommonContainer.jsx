import React from 'react'
import Header from '../components/Header/Header'

export default function CommonContainer({ children }) {
  return (
    <>
      <div className='block w-full'>
        
          <Header />
          {children}
          {/* <Footer/> */}
      </div>
    </>
  )
}
