// IMPORTS
// Modules
import { useState } from 'react'
// Styles
import './createCharacter.scss'

// LOGIC
function CreateCharacter ({ userId }) {
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
    if (type === 'autre') {
      chartypes[e.target.value] = true
    }
    chartypes[type] = e.target.checked
  }
  const getChartypes = () => {
    const fchartypes = []
    for (const c in chartypes) {
      if (chartypes[c] === true) fchartypes.push(c)
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
  // follow entire form data changes
  const [formData, setFormData] = useState({
    user: userId,
    name: '',
    description: '',
    types: getChartypes(),
    life: 0,
    status: getStatuses(),
    file: null
  })

  const handleChange = (e) => {
    if (e.target.name !== 'user') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(`Envoi des données: ${JSON.stringify(formData)}`)
      // await createCharacter(formData)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form className='create-character-form' onSubmit={handleSubmit}>
      {/* name */}
      <div className='ccf-bloc'>
        <h3 className='ccf-subtitle'>Nom du personnage</h3>
        <input
          type='text'
          name='name'
          className='ccfb-input'
          onChange={handleChange}
          placeholder='Anowon le Voleur des Ruines'
        />
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
          {/* autre */}
          <li className='bl-item'>
            <input
              type='text'
              name='types'
              className='ccfb-input'
              onSubmit={e => onChartypesChange(e, 'autre')}
            />
            <label className='ccfb-label' htmlFor='types'>Autre</label>
          </li>
        </ul>
      </div>
      {/* life */}
      <div className='ccf-bloc'>
        <h3 className='ccf-subtitle'>Points de vie</h3>
        <button className='number-input-btn __left'>-</button>
        <input
          type='number'
          name='name'
          className='ccfb-input'
          value={FormData.life}
          placeholder='0'
          onChange={handleChange}
        />
        <button className='number-input-btn __left'>+</button>
      </div>
      {/* status */}
      <div className='ccf-bloc'>
        <h3 className='ccf-subtitle'>Statut</h3>
        {/* (global status) */}
        <label>
          <select
            className='stats-select-menu'
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
            className='stats-select-menu'
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
        <label className='ccfb-label' htmlFor='file'>Illustration</label>
        <input type='file' name='file' className='ccfb-input' />
      </div>
      <div className='ccf-submit-bloc'>
        <button type='submit' className='secondary-btn'>AJOUTER LE PERSONNAGE</button>
      </div>
    </form>
  )
}

// EXPORTS
export default CreateCharacter
