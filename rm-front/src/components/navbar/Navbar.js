// IMPORTS
// Modules
import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import './Navbar.scss'

// LOGIC
class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar'>
        <ol className='navlist'>
          <li className='navelt'>
            <Link className='navlink' to='/'>Accueil</Link>
          </li>
          <li className='navelt'>
            <Link className='navlink' to='/a-propos'>A propos</Link>
          </li>
        </ol>
      </nav>
    )
  }
}

export default Navbar
