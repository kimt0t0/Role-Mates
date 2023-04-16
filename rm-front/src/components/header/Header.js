// IMPORTS
// Modules
import React from 'react'
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
      <div class='header-ctn'>
        <img src='%PUBLIC_URL%/logo/logo.webp' className='hlc-logo' alt='logo' />
        <h1 className='main-title'>Role Mates</h1>
        <button className='menuToggle' onClick={toggleMenu}>
          <Icon
            name='menu-outline'
            size='large'
          />
        </button>
      </div>
      {showMenu && <Navbar />}
    </header>
  )
}

export default Header
