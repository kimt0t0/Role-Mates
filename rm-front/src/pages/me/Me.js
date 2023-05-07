// IMPORTS
import { useState, useEffect } from 'react'
// API service
import { getProfile } from '../../services/api'
// Components
import Hero from '../../components/hero-title/Hero'
import UserProfile from '../../components/user-profile/UserProfile'
// Styles
import './Me.scss'

// LOGIC
function Me () {
  const [profile, setProfile] = useState(null)
  const [showLoader, setShowLoader] = useState(true)

  const loadProfile = async () => {
    const loadedProfile = await getProfile()
    setProfile(loadedProfile)
  }

  useEffect(() => {
    loadProfile()
    if (profile) {
      setShowLoader(false)
    } else {
      setShowLoader(true)
    }
  }, [])

  if (showLoader) {
    return (
      <section className='section __me __loader'>
        <p>LOADING...</p>
      </section>
    )
  }

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

// EXPORTS
export default Me
