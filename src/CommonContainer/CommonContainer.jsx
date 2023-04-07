import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function CommonContainer({ children }) {
  return (
    <>
      <div className='block w-full'>
        
          <Header />
          {children}
          <Footer/>
          
      </div>
    </>
  )
}
