// IMPORTS
// Modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Auth context
import { useAuth } from '../../contexts/AuthContext'
// API services
import { getProfile } from '../../services/api'
// Components
import Hero from '../hero-title/Hero'
// Styles
import './WelcomeUser.scss'

// LOGIC
function WelcomeUser () {
  const [loader, setLoader] = useState(true)
  const [profile, setProfile] = useState(null)

  const loadProfile = async () => {
    const user = await getProfile()
    return setProfile(user)
  }
  const startLoader = () => {
    setLoader(true)
  }

  const stopLoader = () => {
    setLoader(false)
  }

  const { dispatch, state: { e, user, loading } } = useAuth()
  useEffect(() => {
    if (user) {
      stopLoader()
      loadProfile()
    } else {
      startLoader()
    }
  }, [user])

  if (profile) {
    return (
      <div className='welcome-screen'>
        <Hero title='Bienvenu·e ' subtitle='Ton compte est bien connecté :-)' color='primary' />
        <img src='images/tunic_fox.webp' className='ws-illus' alt='adventurer fox illustration' />
        <Link className='homelink' to='/'>Aller vers l'accueil</Link>
      </div>
    )
  } else {
    return (
      <div className='welcome-screen'>
        LOADING...
      </div>
    )
  }
}

export default WelcomeUser
