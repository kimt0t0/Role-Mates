// IMPORTS
// Modules
import React from 'react'
// Styles
import './Hero.scss'

// LOGIC
const Hero = ({ title, subtitle, color }) => {
  return (
    <div className='hero-ctn'>
      <div className={'hero-deco __' + color} />
      <div className='hero-content'>
        <h2 className='hero-title'>{title}</h2>
        <p className='hero-subtitle'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Hero
