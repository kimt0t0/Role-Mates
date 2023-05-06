// IMPORTS
// Modules
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from 'react-eva-icons'
// Auth Context
import { useAuth, actionTypes } from '../../contexts/AuthContext'
// Styles
import './UserNav.scss'

function UserNav () {
  // (useEffect hook to set login state depending on global app context data)
  const { dispatch, state: { error, user, loading } } = useAuth()

  // Logout function
  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }
  return (
    <nav className='navbar'>
      <ol className='navlist'>
        <li className='navelt'>
          <Link className='navlink' to='/me/characters'>Mes personnages</Link>
        </li>
        <li className='navelt'>
          <button type='button' className='disconnect-btn' onClick={logout}>
            <Icon
              name='person-delete'
              size='large'
            /> Me déconnecter
          </button>
        </li>
      </ol>
    </nav>

  )
}

// EXPORTS
export default UserNav
