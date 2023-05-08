// IMPORTS
// Modules
import { useState } from 'react'
import { Link } from 'react-router-dom'
// Components
import Hero from '../hero-title/Hero'
import CharacterDetails from '../character-details/CharacterDetails'
// Styles
import './CharacterCard.scss'

// LOGIC
function CharacterCard ({ character }) {
  // Toggle see more/less details
  const [showDetails, setShowDetails] = useState(false)
  const toggleContent = () => {
    return setShowDetails(!showDetails)
  }

  if (!character) {
    return (
      <>
        <h2>Oups, votre profil n'a pas pu être chargé !</h2>
        <Link className='classic-link' to='/' />
      </>
    )
  }
  // Rendering
  return (
    <>
      <Hero
        title={'Fiche personnage de ' + character.charname}
        subtitle={'Types: ' + character.types.map(type => {
          return type
        })}
        color='tertiary'
      />
      <div className='char-details'>
        <div className='char-illus-ctn'>
          <img className='char-illus' src={character.illus ? character.illus : '/images/character_placeholder.webp'} alt={'Illustration de ' + character.charname} />
        </div>

        {/* Info group 1 */}
        <div className='cd-group'>
          <h3 className='cdg-title'>Description générale</h3>
          <div className='cdg-contents'>
            {character.description}
          </div>
          <div className='btn-ctn'>
            <button
              type='button'
              className='tertiary-btn'
              onClick={toggleContent}
            >
              {showDetails ? 'Cacher les détails' : 'Voir les détails'}
            </button>
          </div>
        </div>
        {showDetails && <CharacterDetails character={character} />}
      </div>

      {/* DETAILS */}

    </>
  )
}

// EXPORTS
export default CharacterCard
