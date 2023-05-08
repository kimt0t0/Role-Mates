// IMPORTS
// Modules
import { useState } from 'react'
// Components
import FormAlert from '../form-alert/FormAlert'
// Styles
import './createCharacter.scss'

// LOGIC
function CreateCharacter () {
  // Alerts
  // (form warning alerts: name, types, life)
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

  // state machine to follow character's types checkboxes
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

  // state machine to follow character's statuses (global and in-game)
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

  // state machine to be able to update life number with custom buttons
  // (it was not possible to do it with input binded to FormData directly)
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

  // follow entire form data changes
  const [formData, setFormData] = useState({
    charname: '',
    description: '',
    types: getChartypes(),
    life: getLife(),
    status: getStatuses(),
    file: null
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleHandChange = (dataName, val) => {
    setFormData({
      ...formData,
      [dataName]: val
    })
    console.log(`formData updated: ${JSON.stringify(formData)}`)
  }

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      // Check mandatory fields and set alert if empty / wrong datas
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
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form className='create-character-form classic-ctn' onSubmit={handleSubmit}>
      {/* name */}
      <div className='ccf-bloc'>
        <h3 className='ccf-subtitle'>Nom du personnage</h3>
        <input
          type='text'
          name='charname'
          className={nameAlert ? 'ccfb-input __alert' : 'ccfb-input'}
          value={FormData.charname}
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
          value={FormData.description}
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
        <input type='file' name='file' className='ccfb-input' />
      </div>
      <div className='cta-container'>
        <button type='submit' className='secondary-btn'>AJOUTER LE PERSONNAGE</button>
      </div>
    </form>
  )
}

// EXPORTS
export default CreateCharacter
