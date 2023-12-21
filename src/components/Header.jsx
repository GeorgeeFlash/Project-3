import React from 'react'
import './Header.css'
import logo from '../logo.svg'

const Header = () => {
  return (
    <div className="header">
        <img src={logo} alt="logo" className='header-image' />
        <h2 className="header-title">Meme Generator</h2>
        <h4 className='header-project'>React Course - Project 3</h4>
    </div>
  )
}

export default Header