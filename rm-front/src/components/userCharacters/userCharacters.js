// IMPORTS
// Modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Context data
import { useAuth } from '../../contexts/AuthContext'
// API service
import { getUserCharacters } from '../../services/api'
// Components
import CharactersList from '../characters-list/CharactersList'
import Hero from '../hero-title/Hero'
import PageDefender from '../page-defender/PageDefender'
// Styles
import './userCharacters.scss'

// LOGIC
function UserCharacters () {
  // check if user is authenticated
  const { state: { user } } = useAuth()

  // Handle loader
  const [showLoader, setShowLoader] = useState(true)
  // Handle alert message if issue loading data
  const [errorMessage, setErrorMessage] = useState(false)

  // Get data
  const [characters, setCharacters] = useState(null)

  const loadCharacters = async () => {
    const loadedCharacters = await getUserCharacters()
    setCharacters(loadedCharacters)
    setShowLoader(false)
  }

  useEffect(() => {
    loadCharacters()
    if (!characters) {
      setShowLoader(true)
    }
  }, [])
  // (empty array as second parameter allows to start useEffect only on mount and dismount component)
  // (hence it avoids infinite loops)

  // Rendering
  if (user) {
    return (
      <section className='section __cards-list __characters'>
        <Hero
          title='Mes personnages'
          subtitle='Bienvenu·e sur la liste de tes personnages. Tu peux les consulter, les modifier et mettre à jour leur état si tu veux.'
          color='secondary'
        />
        <div className='cta-container'>
          <Link className='tertiary-btn' to='/creation-utilisateurice/personnage' title='Ajouter un personnage'>+1</Link>
        </div>
        {showLoader && <h2>Chargement en cours...</h2>}
        {characters && <CharactersList characters={characters} />}
      </section>
    )
  }

  return (
    <PageDefender />
  )
}

// EXPORTS
export default UserCharacters
