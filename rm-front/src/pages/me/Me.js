// IMPORTS
import { useState, useEffect } from 'react'
// import Icon from 'react-eva-icons'
// Auth context
import { useAuth } from '../../contexts/AuthContext'
// API service
import { getProfile } from '../../services/api'
// Components
import Hero from '../../components/hero-title/Hero'
import CobayeWip from '../../components/cobaye-wip/CobayeWip'
// Styles
import './Me.scss'

// LOGIC
function Me () {
  const [profile, setProfile] = useState(null)
  const [showLoader, setShowLoader] = useState(true)

  const loadProfile = async () => await getProfile()

  const { dispatch, state: { e, user, loading } } = useAuth()
  useEffect(() => {
    if (user && loadProfile) {
      setShowLoader(false)
      loadProfile()
      setProfile('Coucou')
    } else {
      setShowLoader(true)
    }
  }, [user])

  if (showLoader) {
    return (
      <section className='section __me __loader'>
        LOADING...
      </section>
    )
  }

  return (
    <section className='section __me'>
      <Hero title='Page profil' color='secondary' />
      {profile || 'oups'}
      {JSON.stringify(loadProfile)}
      <CobayeWip />
    </section>
  )
}

// EXPORTS
export default Me
