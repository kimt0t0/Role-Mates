// IMPORTS
// Modules
import { useState, useEffect } from 'react'
import { Link, redirect } from 'react-router-dom'
import Icon from 'react-eva-icons'
// User Context
import { useAuth, actionTypes } from '../../contexts/AuthContext'
// Components
import Navbar from '../navbar/Navbar'
import UserNav from '../user-nav/UserNav'
// Styles
import './Header.scss'

// LOGIC
function Header () {
  // Toggle menu
  // (state variable to show / hide menu with state hook)
  const [showMenu, setShowMenu] = useState(false)
  // (state handling function triggered on button click)
  const toggleMenu = () => {
    if (showUserMenu) setShowUserMenu(false)
    setShowMenu(!showMenu)
  }

  // Toggle user menu
  const [showUserMenu, setShowUserMenu] = useState(false)
  const toggleUserMenu = () => {
    if (showMenu) setShowMenu(false)
    setShowUserMenu(!showUserMenu)
  }

  // Toggle user menu button (link to auth page / disconnect button)
  // (state variable)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // (useEffect hook to set login state depending on global app context data)
  const { dispatch, state: { error, user, loading } } = useAuth()
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  // Rendering
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
            {
            isLoggedIn
            // if user is logged in display usernav
              ? <button type='button' className='menuToggle __tertiary' onClick={toggleUserMenu}>
                <Icon
                  name='person'
                  size='large'
                />
              </button>
            // else show button-link to auth page
              : <Link to='/auth' className='menuToggle __secondary' title='Page de connexion'>
                <Icon
                  name='person'
                  size='large'
                />
              </Link>
              }
          </div>
        </div>
      </div>
      {showMenu && <Navbar />}
      {showUserMenu && <UserNav />}
    </header>
  )
}

export default Header
