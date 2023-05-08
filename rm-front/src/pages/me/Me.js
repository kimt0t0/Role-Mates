// IMPORTS
import { useState, useEffect } from 'react'
// Context data
import { useAuth } from '../../contexts/AuthContext'
// API service
import { getProfile } from '../../services/api'
// Components
import Hero from '../../components/hero-title/Hero'
import UserProfile from '../../components/user-profile/UserProfile'
import PageDefender from '../../components/page-defender/PageDefender'
// Styles
import './Me.scss'

// LOGIC
function Me () {
  // check if user is authenticated
  const { state: { user } } = useAuth()
  const [profile, setProfile] = useState(null)
  const [showLoader, setShowLoader] = useState(true)

  const loadProfile = async () => {
    const loadedProfile = await getProfile()
    setProfile(loadedProfile)
    setShowLoader(false)
  }

  useEffect(() => {
    loadProfile()
    if (!profile) {
      setShowLoader(true)
    }
  }, [])
  // (empty array as second parameter allows to start useEffect only on mount and dismount component)
  // (hence it avoids infinite loops)

  if (showLoader) {
    return (
      <section className='section __me __loader'>
        <p>Chargement en cours...</p>
      </section>
    )
  }

  if (user) {
    return (
      <section className='section __me'>
        <Hero
          title={'Page profil de ' + profile.username}
          subtitle='Bienvenu·e aventurier·e ! Ici tu peux consulter et mettre à jour tes informations.'
          color='secondary'
        />
        <UserProfile profile={profile} />
      </section>
    )
  }

  return (
    <PageDefender />
  )
}

// EXPORTS
export default Me
