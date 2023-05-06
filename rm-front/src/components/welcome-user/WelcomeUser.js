// IMPORTS
// Modules
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Services
import { getProfile } from '../../services/api'
// Components
import Hero from '../hero-title/Hero'
// Styles
import './WelcomeUser.scss'

// LOGIC
function WelcomeUser () {
  const [userName, setUserName] = useState(null)
  const getUserName = async () => {
    // (must be outside of useEffect as useEffect doesn't support async)
    const user = await getProfile()
    setUserName(user)
    console.log(userName)
  }

  // Enables to load data when component is mounted
  useEffect(() => {
    getUserName()
    console.log(userName)
  }, [])

  return (
    <div className='welcome-screen'>
      <Hero title='Bienvenu·e ' subtitle='Ton compte est bien connecté :-)' color='primary' />
      <img src='images/tunic_fox.webp' className='ws-illus' alt='adventurer fox illustration' />
      <ul className='ctas'>
        <li className='ctas-item'>
          <Link className='homelink' to='/'>Aller vers l'accueil</Link>
        </li>
        <li className='ctas-item'>
          <button
            className='homelink __btn'
            type='button'
          >
            Me déconnecter
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WelcomeUser
