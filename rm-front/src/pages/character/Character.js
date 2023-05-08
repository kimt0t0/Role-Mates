// IMPORTS
// Modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// API service
import { getCharacter } from '../../services/api'
// Components
import CharacterCard from '../../components/character-card/CharacterCard'
// Styles
import './Character.scss'

// LOGIC
function Character () {
  // (get character id from url params)
  // (get information about this functionality here: https://reactrouter.com/en/main/hooks/use-search-params )
  const characterId = useParams().id

  // Load data
  const [character, setCharacter] = useState(null)
  const [showLoader, setShowLoader] = useState(true)

  const loadCharacter = async () => {
    const loadedCharacter = await getCharacter(characterId)
    setCharacter(loadedCharacter)
    setShowLoader(false)
  }

  useEffect(() => {
    loadCharacter()
    if (!character) {
      setShowLoader(true)
    }
  }, [])

  // Rendering
  return (
    <section className='section __cards-list __characters'>
      {showLoader && <p className='loader'>Chargement en cours...</p>}
      {character && <CharacterCard character={character} />}
    </section>
  )
}

// EXPORTS
export default Character
