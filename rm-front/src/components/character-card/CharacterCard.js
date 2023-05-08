// IMPORTS
// Modules
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from 'react-eva-icons'
// API service
import { updateCharacter, removeCharacter } from '../../services/api'
// Components
import Hero from '../hero-title/Hero'
import CharacterDetails from '../character-details/CharacterDetails'
import FormAlert from '../form-alert/FormAlert'
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
  const [editForm, setEditForm] = useState(false)
  const showEditForm = () => {
    setEditForm(true)
  }
  const hideEditForm = () => {
    setEditForm(false)
  }

  // ------ Handle edition and edition details -----
  // Field alerts
  const [nameAlert, setNameAlert] = useState(false)
  const [typesAlert, setTypesAlert] = useState(false)
  const [lifeAlert, setLifeAlert] = useState(false)

  const updateNameAlert = (value) => {
    setNameAlert(value)
  }
  const updateTypesAlert = (value) => {
    setTypesAlert(value)
  }
  const updateLifeAlert = (value) => {
    setLifeAlert(value)
  }

  // Success alert
  const [successEAlert, setSuccessEAlert] = useState(false)

  // Handle character types changes
  const [chartypes, setChartypes] = useState({
    voleureuse: false,
    dragon·ne: false,
    sorcier·e: false,
    guerrier·re: false,
    tank·e: false,
    musicien·ne: false
  })

  const onChartypesChange = (e, type) => {
    chartypes[type] = e.target.checked
    const fchartypes = getChartypes()
    handleHandChange('types', fchartypes)
  }

  const getChartypes = () => {
    const fchartypes = []
    for (const c in chartypes) {
      if (chartypes[c] === true) {
        fchartypes.push(c)
      }
    }
    return fchartypes
  }

  // Handle character status changes
  const [globalStatus, setGlobalStatus] = useState('DRAFT')
  const [gameStatus, setGameStatus] = useState('ALIVE')

  const onGlobalStatusChange = (e) => {
    setGlobalStatus(e.value)
  }
  const onGameStatusChange = (e) => {
    setGameStatus(e.value)
  }

  const getStatuses = () => {
    return [globalStatus, gameStatus]
  }

  // Handle life changes with custom buttons
  const [lifeNum, setLifeNum] = useState(10)
  const updateLife = (e) => {
    setLifeNum(e.target.value)
    handleHandChange('life', lifeNum)
  }
  const decrementLife = () => {
    if (lifeNum >= 1) {
      setLifeNum(lifeNum - 1)
      handleHandChange('life', lifeNum)
    } else updateLifeAlert(true)
  }
  const incrementLife = () => {
    setLifeNum(lifeNum + 1)
    handleHandChange('life', lifeNum)
  }
  const getLife = () => {
    return lifeNum
  }

  // Initialize formData values
  const [formData, setFormData] = useState({
    charname: character.charname,
    description: character.description,
    types: character.types,
    life: character.life,
    status: character.status,
    file: character.illus
  })

  // Handle formData changes
  // (classic)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  // (handmade)
  const handleHandChange = (dataName, val) => {
    setFormData({
      ...formData,
      [dataName]: val
    })
  }

  // Send update data to API and return response
  const onUpdateCharacter = async (e) => {
    e.preventDefault()
    try {
      // Check mandatory values and set alert if empty / wrong datas
      if (formData.charname === '' || formData.charname === undefined || formData.charname.length === 0) {
        updateNameAlert(true)
      } else {
        updateNameAlert(false)
      }
      if (formData.types.length <= 0) {
        updateTypesAlert(true)
      } else {
        updateTypesAlert(false)
      }
      if (formData.life <= 0 || !Number.isInteger(formData.life)) {
        updateLifeAlert(true)
      } else {
        updateLifeAlert(false)
      }
      const updatedCharacter = await updateCharacter(character._id, formData)
      if (updatedCharacter !== null && updateCharacter !== undefined) {
        setSuccessEAlert(true)
      }
    } catch (e) {
      console.error(e)
    }
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
  if (!character && !editForm) {
    return (
      <>
        <h2>Oups, les informations demandées n'ont pas pu être chargées !</h2>
        <Link className='classic-link' to='/'>Revenir à l'accueil</Link>
        <Link className='classic-link' to='/personnages'>Revenir à la liste des personnages</Link>
      </>
    )
  }

  // (update character)
  if (editForm) {
    return (
      <form className='update-form' onSubmit={e => onUpdateCharacter(e)}>
        {/* toggle form button */}
        <button type='button' className='secondary-btn btn-back' onClick={hideEditForm}><Icon name='arrow-left' size='large' />Sortir du formulaire</button>
        {/* form contents */}
        <h2 className='form-title'>Modification du personnage</h2>
        {/* name */}
        <div className='ccf-bloc'>
          <h3 className='ccf-subtitle'>Nom du personnage</h3>
          <input
            type='text'
            name='charname'
            className={nameAlert ? 'ccfb-input __alert' : 'ccfb-input'}
            value={formData.charname}
            onChange={handleChange}
            placeholder='Anowon le Voleur des Ruines'
          />
          {nameAlert && <FormAlert text='Tu dois indiquer le nom de ton personnage.' />}
        </div>
        {/* description */}
        <div className='ccf-bloc'>
          <h3 className='ccf-subtitle'>Description</h3>
          <textarea
            name='description'
            className='ccfb-input'
            maxLength='500'
            value={formData.description}
            onChange={handleChange}
            placeholder="Les autres gredins que vous contrôlez gagnent +1/+1.
À chaque fois qu'au moins un gredin que vous contrôlez inflige des blessures de combat à un joueur, ce joueur meule une carte pour chaque 1 blessure qui lui est infligée. Si ce joueur meule au moins une carte de créature de cette manière, vous piochez une carte."
          />
        </div>
        {/* types */}
        <div className='ccf-bloc'>
          <h3 className='ccf-subtitle'>Types:</h3>
          <ul className='boxes-list'>
            {/* (voleureuse) */}
            <li className='bl-item'>
              <input
                type='checkbox'
                name='types'
                className='ccfb-input'
                onChange={e => onChartypesChange(e, 'voleureuse')}
              />
              <label className='ccfb-label' htmlFor='types'>Voleureuse</label>
            </li>
            {/* dragon·ne */}
            <li className='bl-item'>
              <input
                type='checkbox'
                name='types'
                className='ccfb-input'
                onChange={e => onChartypesChange(e, 'dragon·ne')}
              />
              <label className='ccfb-label' htmlFor='types'>Dragon·ne</label>
            </li>
            {/* sorcier·e */}
            <li className='bl-item'>
              <input
                type='checkbox'
                name='types'
                className='ccfb-input'
                onChange={e => onChartypesChange(e, 'sorcier·e')}
              />
              <label className='ccfb-label' htmlFor='types'>Sorcier·e</label>
            </li>
            {/* guerrier·re */}
            <li className='bl-item'>
              <input
                type='checkbox'
                name='types'
                className='ccfb-input'
                onChange={e => onChartypesChange(e, 'guerrier·re')}
              />
              <label className='ccfb-label' htmlFor='types'>Guerrier·re</label>
            </li>
            {/* tank·e */}
            <li className='bl-item'>
              <input
                type='checkbox'
                name='types'
                className='ccfb-input'
                onChange={e => onChartypesChange(e, 'tank·e')}
              />
              <label className='ccfb-label' htmlFor='types'>Tank·e</label>
            </li>
            {/* musicien·ne */}
            <li className='bl-item'>
              <input
                type='checkbox'
                name='types'
                className='ccfb-input'
                onChange={e => onChartypesChange(e, 'musicien·ne')}
              />
              <label className='ccfb-label' htmlFor='types'>Musicien·ne</label>
            </li>
          </ul>
          {typesAlert && <FormAlert text='Attention, tu dois indiquer au moins un type pour ton personnage !' />}
        </div>
        {/* life */}
        <div className='ccf-bloc'>
          <h3 className='ccf-subtitle'>Points de vie</h3>
          <div className='ccfb-input-line'>
            <button className='classic-btn number-input-btn __left' type='button' onClick={e => decrementLife(e)}>-</button>
            <input
              type='number'
              name='name'
              className={lifeAlert ? 'ccfb-input __number  __alert' : 'ccfb-input __number'}
              value={lifeNum}
              onChange={e => updateLife(e)}
            />
            <button className='classic-btn number-input-btn __left' type='button' onClick={e => incrementLife(e)}>+</button>
          </div>
          {lifeAlert && <FormAlert text='Attention, ton personnage doit avoir des points de vie (1 ou +) ! (La valeur doit être un nombre entier > 0)' />}
        </div>
        {/* status */}
        <div className='ccf-bloc'>
          <h3 className='ccf-subtitle'>Statut</h3>
          {/* (global status) */}
          <label>
            <select
              className='stats-select-menu classic-btn'
              name='globalStatus'
              onChange={e => onGlobalStatusChange(e)}
            >
              <option value='DRAFT'>Brouillon...</option>
              <option value='IN PLAY'>En jeu !</option>
              <option value='ARCHIVED'>Dans les archives</option>
            </select>
          </label>
          {/* (game status) */}
          <label>
            <select
              className='stats-select-menu classic-btn'
              name='globalStatus'
              onChange={e => onGameStatusChange(e)}
            >
              <option value='ALIVE'>Frais·che comme une pêche en été !</option>
              <option value='DEAD'>Atteint·e de décès T_T</option>
            </select>
          </label>
        </div>
        {/* avatar */}
        <div className='ccf-bloc'>
          <h3 className='ccf-subtitle'>Illustration</h3>
          <input type='file' name='file' className='ccfb-input __file' />
        </div>
        <div className='uf-btn-ctn'>
          <button type='submit' className='classic-btn'>
            <Icon name='save' size='medium' />
            Enregistrer les changements
          </button>
        </div>
        {successEAlert && <SuccessAlert
          title='Tes mises à jour ont bien été prises en compte !'
          ctas={['home', 'collection-char', 'create-again']}
                          />}
        {/* submit button */}
      </form>
    )
  }

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
              <Icon name='edit-2-outline' size='medium' />
              Modifier le personnage
            </button>
            {/* delete button */}
            <button
              type='button'
              className={removeForm ? 'classic-btn' : 'secondary-btn'}
              onClick={removeForm ? hideRemoveForm : showRemoveForm}
            >
              {removeForm ? <Icon name='checkmark-outline' size='medium' /> : <Icon name='close-outline' size='medium' />}
              {removeForm ? 'Ne pas supprimer' : 'Supprimer le personnage'}
            </button>
          </div>
        </div>

        {/* -----  Additional parts ----- */}

        {/* Removal */}
        {removeForm &&
          <form className='remove-form' onSubmit={e => onRemoveCharacter(e)}>
            <h3 className='form-title'>Suppression de personnage</h3>
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
