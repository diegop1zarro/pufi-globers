import React from 'react'
import Footer from './Footer.jsx'
import Presentation from './Presentation.jsx'
import PuffiRain from './PuffiRain.jsx'
import PuffiPuff from './PuffiPuff.jsx'
import PuffiCart from './PuffiCart.jsx'
import PuffiNap from './PuffiNap.jsx'
import NewsLetter from './NewsLetter.jsx'
export default function Home() {
  return (
    <div>
      <Presentation/>
      <PuffiRain/>
      <PuffiPuff/>
      <PuffiCart/>
      <PuffiNap/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}
