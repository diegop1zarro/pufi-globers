import React from 'react'
import Navbar from './Navbar'
export default function Presentation() {
  return (
    <div className='presentation_container'>
        <Navbar />
      <div className='presentation'>
        <div className='titles'>
          <h4>ESTÁR CÓMODO,</h4>
          <h4>NUNCA FUE TAN FÁCIL.</h4>
        </div>
        <div className='button_container'>
          <button type='button'>SHOP</button>
        </div>
      </div>

    </div>
  )
}
