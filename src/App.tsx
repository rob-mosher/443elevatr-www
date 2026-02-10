import React from 'react'
import Marquee from './components/Marquee'
import PhoneNumber from './components/PhoneNumber'
import './main.css'

export default function App() {
  return (
    <div className="vignette flex h-screen flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/elevatr-bg.jpg")' }}>
      <Marquee isLeftToRight speedMultiplier={1.20} text="call today" />
      <PhoneNumber />
      <Marquee isLeftToRight={false} speedMultiplier={0.5} text="or don't, we respect your agency" />
    </div>
  )
}
