import React from 'react'
import Form from './form/Form'

export default function NewsLetter() {
  return (
    <div className='newsLetter_container'>
    <div className='insta'>
        <h5>INSTAGRAM</h5>
        <p>#ESPUFI</p>
    </div>
    <div className='images'>
        <img src='/socials/1.jpg' alt="img" />
        <img src='/socials/2.jpg' alt="img" />
        <img src='/socials/3.jpg' alt="img" />
        <img src='/socials/4.jpg' alt="img" />
        <img src='/socials/5.jpg' alt="img" />
        <img src='/socials/6.jpg' alt="img" />
    </div>
    <div className='newsletter'>
        <h5>NEWSLETTER</h5>
        <p>SUSCRIBETE</p>
        <h6>y enterate de todas las novedades</h6>
        <Form/>
    </div>
</div>
  )
}
