// IMPORTS
// Context data
import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
// API service
import { getCharacters } from '../../services/api'
// Components
import CharactersList from '../../components/characters-list/CharactersList'
import Hero from '../../components/hero-title/Hero'
// Styles
import './Characters.scss'

// LOGIC
function Characters () {
  // check if user is authenticated
  const { state: { user } } = useAuth()

  // Handle loader
  const [showLoader, setShowLoader] = useState(true)
  // Handle alert message if issue loading data
  const [errorMessage, setErrorMessage] = useState(false)

  // Get data
  const [characters, setCharacters] = useState(null)

  const loadCharacters = async () => {
    const loadedCharacters = await getCharacters()
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
          title='Personnages de jeu'
          subtitle="Bienvenu·e sur la liste des personnages du site. N'hésite pas à t'en inspirer !"
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
    <>
      <h2>Oooups ! Tu n'es pas autorisé à visiter cette page.</h2>
      <p>Tu peux <Link className='classic-link' to='/auth' title="Aller vers la page d'authentification">te connecter ou t'inscrire</Link> si tu souhaites y accéder.</p>
    </>
  )
}

// EXPORTS
export default Characters
