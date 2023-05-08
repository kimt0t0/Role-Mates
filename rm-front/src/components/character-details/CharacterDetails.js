// IMPORTS
// Modules
import { useState, useEffect } from 'react'
// Styles
import './CharacterDetails.scss'

// LOGIC
function CharacterDetails ({ character }) {
  // Set character status to human readable language
  const [statusText, setStatusText] = useState([])
  const loadStatusText = () => {
    const statuses = []
    character.status.map((data) => {
      switch (data) {
        case 'DRAFT': return statuses.push('Brouillon')
        case 'IN PLAY': return statuses.push('En jeu')
        case 'ALIVE': return statuses.push('En vie')
        case 'DEAD': return statuses.push('Décédé·e')
        case 'ARCHIVED': return statuses.push('Dans les archives')
        default: return null
      }
    })
    setStatusText(statuses)
  }

  useEffect(() => {
    loadStatusText()
  }, [])
  return (
    <>
      {/* Info group 2 */}
      <div className='cd-group __more-details'>
        <h3 className='cdg-title'>Détails du personnage</h3>
        <div className='cdg-contents'>
          <div className='cdgc-group'>
            <h4 className='cdgcg-title'>Points de vie: {character.life}</h4>
          </div>
          {/* <div className='cdgc-group'>
            <h4 className='cdgcg-title'>Statistiques:</h4>
            {
                character.stats.map((stat, index) => {
                  return (<p key={index}><strong>{stat.name}:</strong> {stat.amount}</p>)
                })
              }
          </div>
          <div className='cdgc-group'>
            <h4 className='cdgcg-title'>Capacités:</h4>
            {
                character.abilities.map((ability, index) => {
                  return (<p key={index}><strong>{ability.name}:</strong> {ability.amount}</p>)
                })
              }
          </div> */}
        </div>
      </div>
      {/* Info group 3 */}
      <div className='cd-group __more-details'>
        <h3 className='cdg-title'>Statut</h3>
        <div className='cdg-contents'>
          <div className='cdgc-group'>
            <p className='char-txt'>
              <strong>Statut de jeu: </strong>
              {statusText.map((status, index) => {
                return (index !== -1 ? status + ', ' : status)
              })}
            </p>
            <p className='char-txt'>
              <strong>Parties intégrées: </strong>
              {
                    character.games.map((game, index) => {
                      return (index !== -1 ? game.name + ', ' : game.name)
                    })
                  }
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

// EXPORTS
export default CharacterDetails
