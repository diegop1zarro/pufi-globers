import React from 'react'


export default function Navbar() {
  return (
    <nav className='navbar'>
      {/* <div className='logonav'>
        <img src='' alt="logo" />
      </div> */}
      <div className='navbar_links'>
          <div className='box1'>
            <a href="#pufipuff">
              <img src='/icons/pufi_puff_icon.png' alt="" />
              <h3>PUFI PUFF</h3>
            </a>
          </div>
          <div className='box2'>
            <a href="#pufirain">
              <img src='/icons/pufi_rain_icon.png' alt="" />
              <h3>PUFI RAIN</h3>
            </a>
          </div>
          <div className='box3'>
            <a href="#puficart">
              <img src='/icons/pufi_cart_icon.png' alt="" />
              <h3>PUFI CART</h3>
            </a>
        </div>
        <div className='box4'>
          <a href="#pufinap">
            <img src='/icons/pufi_nap_icon.png' alt="" />
            <h3>PUFI NAP</h3>
          </a>
        </div>
      </div>
      <div className='user_options'>
        <a href="#" className='Account'>MI CUENTA 
      <img src='/icons/arrow_down.png' alt='logo' />
        </a>
        <a href="#">MI COMPRA</a>        
      </div>
    </nav>
  )
}
