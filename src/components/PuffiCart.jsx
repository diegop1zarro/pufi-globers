import React from 'react'

export default function PuffiCart() {
  return (
<div id='puficart' className='pufiCart_container'>
      <div className='pufiCart_background'>
        <button> Shop</button>
      </div>
      <div className='pufiCart_product'>
        <img src='/products/pufi_cart_2.jpg' alt="img" />
        <h3>Pufi CART</h3>
        <p> Descripcion de producto. Este es un texto simulado.</p>
        <button>VER MAS</button>
      </div>
    </div>  )
}
