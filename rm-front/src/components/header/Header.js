// IMPORTS
// Modules
import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'react-eva-icons'
// Components
import Navbar from '../navbar/Navbar'
// Styles
import './Header.scss'

// LOGIC
function Header () {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className='header'>
      <div className='header-ctn'>
        <div className='hc-content'>
          <img src='logo/logo.webp' className='hc-logo' alt='logo' />
          <h1 className='main-title'>Role Mates</h1>
          <div className='hcc-actions'>
            <button className='menuToggle __classic' onClick={toggleMenu}>
              <Icon
                name='menu-outline'
                size='large'
              />
            </button>
            <Link to='/user' className='menuToggle __warning' title='Page de connexion'>
              <Icon
                name='person'
                size='large'
              />
            </Link>
          </div>
        </div>
      </div>
      {showMenu && <Navbar />}
    </header>
  )
}

export default Header
