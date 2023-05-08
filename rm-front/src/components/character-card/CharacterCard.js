// IMPORTS
// Modules
import { useState } from 'react'
import { Link } from 'react-router-dom'
// API service
import { removeCharacter } from '../../services/api'
// Components
import Hero from '../hero-title/Hero'
import CharacterDetails from '../character-details/CharacterDetails'
import SuccessAlert from '../success-alert/SuccessAlert'
// Styles
import './CharacterCard.scss'

// LOGIC
function CharacterCard ({ character }) {
  // Toggle see more/less details
  const [showDetails, setShowDetails] = useState(false)
  const toggleContent = () => {
    return setShowDetails(!showDetails)
  }

  // Toggle edition form
  const showEditForm = () => {
    console.log('montrer le formulaire')
  }

  // Toggle removal form
  const [removeForm, setRemoveForm] = useState(false)
  const showRemoveForm = () => {
    setRemoveForm(true)
  }
  const hideRemoveForm = () => {
    setRemoveForm(false)
  }

  // Handle removal
  const onRemoveCharacter = async (e) => {
    e.preventDefault()
    try {
      const removedCharacter = await removeCharacter(character._id)
      if (removedCharacter !== null && removedCharacter !== undefined) {
        setShowSuccessAlert(true)
      }
    } catch (e) {
      console.error(e)
      setShowRAlert(true)
    }
  }

  // Removal form - toggle alert message
  const [showRAlert, setShowRAlert] = useState(false)
  const [showSuccessAlert, setShowSuccessAlert] = useState(false)

  // Rendering
  // (if no character is loaded)
  if (!character) {
    return (
      <>
        <h2>Oups, votre profil n'a pas pu être chargé !</h2>
        <Link className='classic-link' to='/' />
      </>
    )
  }

  // (update character)

  // (show character information)
  return (
    <div className='character-card'>
      <Hero
        title={'Fiche personnage de ' + character.charname}
        subtitle={'Types: ' + character.types.map(type => {
          return type
        })}
        color='primary'
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
            {/* show details button */}
            <button
              type='button'
              className='classic-btn'
              onClick={toggleContent}
            >
              {showDetails ? 'Cacher les détails' : 'Voir les détails'}
            </button>
            {/* edit button */}
            <button
              type='button'
              className='classic-btn'
              onClick={showEditForm}
            >
              Modifier le personnage
            </button>
            {/* delete button */}
            <button
              type='button'
              className={removeForm ? 'classic-btn' : 'secondary-btn'}
              onClick={removeForm ? hideRemoveForm : showRemoveForm}
            >
              {removeForm ? 'Ne pas supprimer' : 'Supprimer le personnage'}
            </button>
          </div>
        </div>

        {/* -----  Additional parts ----- */}
        {/* Removal */}
        {removeForm &&
          <form className='remove-form' onSubmit={e => onRemoveCharacter(e)}>
            <h3 className='rf-title'>Suppression de personnage</h3>
            <p className='rf-text'>Es-tu sûr·e de vouloir réaliser cette action ? Tu ne pourras pas revenir en arrière !</p>
            <button type='submit' className='warning-btn'>Confirmer</button>
          </form>}
        {/* Removal failure */}
        {showRAlert && <h3>Oups, cette action ne semble pas être possible !</h3>}
        {/* Removal success */}
        {showSuccessAlert && <SuccessAlert
          title='Adieu petit personnage...'
          ctas={['home', 'collection-char', 'create-again']}
                             />}
        {/* Character details */}
        {showDetails && <CharacterDetails character={character} />}
      </div>
    </div>
  )
}

// EXPORTS
export default CharacterCard
