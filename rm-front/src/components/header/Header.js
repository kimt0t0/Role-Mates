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
        <img src='' className='hlc-logo' />
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
