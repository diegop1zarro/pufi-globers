import React from 'react'
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className='footer_container'>
      <div className='footer'>
        <div className='logo'>
          <img src='/logo/logo_pufi.png' alt='logo' />
        </div>
        <div className='products_links'>
          <a href="#pufirain">PUFI RAIN</a>
          <a href="#pufipuff">PUFI PUFF</a>
          <a href="#puficart">PUFI CART</a>
          <a href="#pufinap">PUFI NAP</a>
        </div>
        <div className='contact'>
          <a href="">CONTACTO</a>
          <a href="">AYUDA</a>
          <a href="">CÓMO COMPRAR</a>
          <a href="">TÉRMINOS & CNDICIONES</a>
        </div>
        <div className='security'>
          <div>
            <h4>COMPRA 100% SEGURA</h4>
          </div>
          <div className='security_2'>
            <img src='/logo/security_1.jpg' alt="logo" />
            <img src='/logo/security_2.jpg' alt="logo" />
            <p>COMPRÁ CON LA GARANTIA DE PUFI</p>

          </div>
        </div>
        <div className='socials'>
          <p>SEGUINOS EN </p>
          <a href="#">
            <img src='/logo/facebook.png' alt="logo" />
          </a>
          <a href="#">
            <img src='/logo/twitter.png' alt="logo" />
          </a>
          <a href="#">
            <img src='/logo/instagram.png' alt="logo" />
          </a>

        </div>
      </div>
      <div className='copyright'>
        <h6> PUFI Copyright 2017 - Todos los derechos reservados</h6>
        <img src='/logo/brandlogo.png' alt="logo" />
      </div>
    </footer>
  )
}
